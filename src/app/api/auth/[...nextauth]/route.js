import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.baseURL = "http://localhost";
axios.defaults.headers.common = {
  "Content-Type": "application/json",
};

export const authOptions = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
    error: "/auth/login",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const response = await axios.get(
          "http://localhost/sanctum/csrf-cookie"
        );
        const cookies = response.headers["set-cookie"];
        let sessionKey = null;
        let xsrfToken = null;

        for (const cookie of cookies) {
          if (cookie.startsWith("laravel_session=")) {
            sessionKey = cookie.split("=")[1];
          } else if (cookie.startsWith("XSRF-TOKEN=")) {
            xsrfToken = cookie.split("=")[1];
          }

          if (sessionKey && xsrfToken) {
            break;
          }
        }

        const loginData = {
          email: credentials?.email,
          password: credentials?.password,
        };
        const headers = {
          ...axios.defaults.headers.common,
          Cookie: `laravel_session=${sessionKey}`,
          "Content-Type": "application/json",
        };

        if (xsrfToken) {
          headers["X-XSRF-TOKEN"] = xsrfToken;
        }

        axios.defaults.headers.common = headers;

        try {
          const response = await axios.post(
            "http://localhost/api/auth/login",
            loginData
          );

          if (response.status === 200) {
            axios.defaults.headers = {
              ...axios.defaults.headers,
              Authorization: `Bearer ${response.data.data.access_token}`,
            };
            return response.data.data;
          } else {
            // console.log("HTTP error! Status:", response.status);
            // Handle non-successful response here, return an appropriate JSON response.
            return { error: "Authentication failed" };
          }
        } catch (error) {
          console.log("Error", error);
        }

        return null;
      },
    }),
  ],
  callbacks: {
    // async redirect({ url, baseUrl }) {
    //   console.log(url, baseUrl);
    //   const parsedUrl = new URL(url);
    //   let callbackUrl = parsedUrl.searchParams.get("callbackUrl");
    //   if (callbackUrl) {
    //     if (callbackUrl.startsWith(baseUrl)) {
    //       callbackUrl = callbackUrl.replace(baseUrl, "");
    //     }
    //     console.log(callbackUrl);
    //     return baseUrl + "/" + callbackUrl;
    //   }
    //   return baseUrl + "/app";
    // },
    async jwt({ token, account, user }) {
      if (user) {
        token.user = user;
        token.accessToken = user.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.access_token;
      session.user = token.user;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
