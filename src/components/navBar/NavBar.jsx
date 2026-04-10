import React from "react";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "active lg:animate-bounce" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/listed_books"}
          className={({ isActive }) =>
            isActive ? "active lg:animate-bounce" : ""
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/pages_to_read"}
          className={({ isActive }) =>
            isActive ? "active lg:animate-bounce" : ""
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100">
      <div className="navbar shadow-sm px-[2%]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
              <li>
                <button className="btn bgs">Sign Up</button>
              </li>
            </ul>
          </div>

          <img className="w-28" src={logo} alt="logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">{links}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn bgp">Sign In</button>
          <button className="btn bgs hidden lg:flex">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
