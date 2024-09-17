import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles/app.scss";
import { store } from "./store/store";
import { Providers } from "./store/provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";

export const metadata = {
  title: "App",
  description: "Generated by create next app",
};

export default function AppLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers store={store}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <div className="flex flex-col min-h-screen max-h-screen bg-white">
                <div className="layout-container flex h-full grow flex-col overflow-hidden">
                  <Header isLoggedIn={true} />
                  <div className="flex p-4 overflow-hidden">
                    <>
                      <div className="hidden sm:flex pr-4">
                        <Sidebar />
                      </div>
                      <div id="scroll" className="flex-1 overflow-y-auto">
                        {children}
                      </div>
                    </>
                  </div>
                </div>
              </div>
              <div id="modal-root"></div>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  );
}
