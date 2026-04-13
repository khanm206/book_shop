import React from "react";
import NavBar from "../components/navBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 flex items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
