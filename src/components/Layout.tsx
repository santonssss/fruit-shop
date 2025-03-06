import React, { ReactNode } from "react";
import Footer from "./Footer";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { ThemeProvider } from "@context/Theme-context";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default Layout;
