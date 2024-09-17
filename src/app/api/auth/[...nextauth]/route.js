import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.baseURL = "http://localhost";
axios.defaults.headers = {
  "Content-Type": "application/json",
};

export const authOptions = {
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { data } = await axios.get("/sanctum/csrf-cookie");
        const setCookieHeader = data.headers["set-cookie"];
        const cookies = setCookieHeader?.split(", ");
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
        const headers = new Headers({
          Cookie: `laravel_session=${sessionKey}`,
          "Content-Type": "application/json",
        });

        if (xsrfToken) {
          headers.append("X-XSRF-TOKEN", xsrfToken);
        }

        axios.defaults.headers = headers;

        try {
          const response = await axios.post(
            "http://localhost/api/login",
            loginData
          );

          if (response.ok) {
            const res = await response.json();
            console.log("response", res);
            return res;
          } else {
            console.log("HTTP error! Status:", response.status);
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
