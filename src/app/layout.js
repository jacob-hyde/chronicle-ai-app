import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ".//styles/app.scss";
import { store } from "./store/store";
import { Providers } from "./store/provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import theme from "./theme";

export default function RootLayout({ children }) {
  axios.defaults.baseURL = process.env.API_URL;
  axios.defaults.headers.common = {
    ...axios.defaults.headers.common,
    "Content-Type": "application/json",
  };

  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers store={store}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              {children}
              <div id="modal-root"></div>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
}
