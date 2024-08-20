import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

const Layout = ({ children, className }) => {
  return (
    <>
      <div className={`${className}`}>
        <Navbar/>
        <Sidebar />
        <div className="admin-content min-h-full bg-black-3">
          <p>Hello</p>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
