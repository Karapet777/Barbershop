import React from "react";




import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <main>{children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
