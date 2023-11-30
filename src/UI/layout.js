import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout sm:w-1/2">
      <Header className="mt-0" />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
