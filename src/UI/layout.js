import React from "react";
import Header from "./Menu/header";
import Footer from "./footer";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col ">
      <Header className="mt-0" />
      <div className="layout  mt-20">
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
