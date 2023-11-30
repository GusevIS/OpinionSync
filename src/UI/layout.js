import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center  w-full sm:w-1/2 min-h-screen bg-slate-300">
      <Header className="mt-0" />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
