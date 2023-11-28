import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center  w-full sm:w-1/2 h-screen bg-orange-400">
      <Header className="mt-0" />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
