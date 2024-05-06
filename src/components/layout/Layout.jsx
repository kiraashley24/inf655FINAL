import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="main-content min-h-screen">
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
