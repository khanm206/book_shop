import React from "react";
import NavBar from "../components/navBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
