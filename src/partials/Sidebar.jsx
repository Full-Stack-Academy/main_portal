import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import SidebarLinkGroup from "./SidebarLinkGroup";
import logo from "../images/fsa_logo_white.png";
import icon1 from "../images/testi.svg";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === "true");

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className="block">
            <img src={logo} alt="FSA Logo" className="mt-4" />
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Pages</span>
            </h3>
            <ul className="mt-3">
              {/* Dashboard */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${(pathname === "/" || pathname.includes("dashboard")) && "bg-slate-900"}`}>
                <NavLink
                  end
                  to="/"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname === "/" || pathname.includes("dashboard") ? "hover:text-slate-200" : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                        <path
                          className={`fill-current ${pathname === "/" || pathname.includes("dashboard") ? "text-indigo-500" : "text-slate-400"}`}
                          d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                        />
                        <path
                          className={`fill-current ${pathname === "/" || pathname.includes("dashboard") ? "text-indigo-600" : "text-slate-600"}`}
                          d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                        />
                        <path
                          className={`fill-current ${pathname === "/" || pathname.includes("dashboard") ? "text-indigo-200" : "text-slate-400"}`}
                          d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                        />
                      </svg>
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Dashboard
                      </span>
                    </div>
                    {/* Badge */}
                    {/* <div className="flex flex-shrink-0 ml-2">
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded">4</span>
                    </div> */}
                  </div>
                </NavLink>
              </li>
              {/* Testimonials */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("testimonials") && "bg-slate-900"}`}>
                <NavLink
                  end
                  to="/testimonials"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("testimonials") ? "hover:text-slate-200" : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 5C22 6.105 21.105 7 20 7C18.895 7 18 6.105 18 5C18 3.895 18.895 3 20 3C21.105 3 22 3.895 22 5ZM22 8H21.026H18.974H18C16.895 8 16 8.895 16 10V16H18V19V21C18 21.552 18.448 22 19 22H21C21.552 22 22 21.552 22 21V19V16H24V10C24 8.895 23.105 8 22 8Z"
                        className={`fill-current ${pathname.includes("testimonials") ? "text-indigo-500" : "text-slate-600"}`}
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 5C6 6.105 5.105 7 4 7C2.895 7 2 6.105 2 5C2 3.895 2.895 3 4 3C5.105 3 6 3.895 6 5ZM6 8H5.026H2.974H2C0.895 8 0 8.895 0 10V16H2V19V21C2 21.552 2.448 22 3 22H5C5.552 22 6 21.552 6 21V19V16H8V10C8 8.895 7.105 8 6 8Z"
                        className={`fill-current ${pathname.includes("testimonials") ? "text-indigo-300" : "text-slate-400"}`}
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 3C9 4.657 10.343 6 12 6C13.657 6 15 4.657 15 3C15 1.343 13.657 0 12 0C10.343 0 9 1.343 9 3ZM9 23C9 23.552 9.448 24 10 24H14C14.552 24 15 23.552 15 23V17H18V11C18 9.343 16.657 8 15 8H9C7.343 8 6 9.343 6 11V17H9V23Z"
                        className={`fill-current ${pathname.includes("testimonials") ? "text-indigo-300" : "text-slate-400"}`}
                      />
                    </svg>

                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Testimonials
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Placements */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("placements") && "bg-slate-900"}`}>
                <NavLink
                  end
                  to="/placements"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("placements") ? "hover:text-slate-200" : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 5C22 6.105 21.105 7 20 7C18.895 7 18 6.105 18 5C18 3.895 18.895 3 20 3C21.105 3 22 3.895 22 5ZM22 8H21.026H18.974H18C16.895 8 16 8.895 16 10V16H18V19V21C18 21.552 18.448 22 19 22H21C21.552 22 22 21.552 22 21V19V16H24V10C24 8.895 23.105 8 22 8Z"
                        className={`fill-current ${pathname.includes("placements") ? "text-indigo-500" : "text-slate-600"}`}
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 5C6 6.105 5.105 7 4 7C2.895 7 2 6.105 2 5C2 3.895 2.895 3 4 3C5.105 3 6 3.895 6 5ZM6 8H5.026H2.974H2C0.895 8 0 8.895 0 10V16H2V19V21C2 21.552 2.448 22 3 22H5C5.552 22 6 21.552 6 21V19V16H8V10C8 8.895 7.105 8 6 8Z"
                        className={`fill-current ${pathname.includes("placements") ? "text-indigo-300" : "text-slate-400"}`}
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 3C9 4.657 10.343 6 12 6C13.657 6 15 4.657 15 3C15 1.343 13.657 0 12 0C10.343 0 9 1.343 9 3ZM9 23C9 23.552 9.448 24 10 24H14C14.552 24 15 23.552 15 23V17H18V11C18 9.343 16.657 8 15 8H9C7.343 8 6 9.343 6 11V17H9V23Z"
                        className={`fill-current ${pathname.includes("placements") ? "text-indigo-300" : "text-slate-400"}`}
                      />
                    </svg>

                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Placements
                    </span>
                  </div>
                </NavLink>
              </li>
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("batches") && "bg-slate-900"}`}>
                <NavLink
                  end
                  to="/enquiries"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("enquiries") ? "hover:text-slate-200" : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 5C22 6.105 21.105 7 20 7C18.895 7 18 6.105 18 5C18 3.895 18.895 3 20 3C21.105 3 22 3.895 22 5ZM22 8H21.026H18.974H18C16.895 8 16 8.895 16 10V16H18V19V21C18 21.552 18.448 22 19 22H21C21.552 22 22 21.552 22 21V19V16H24V10C24 8.895 23.105 8 22 8Z"
                        className={`fill-current ${pathname.includes("enquiries") ? "text-indigo-500" : "text-slate-600"}`}
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 5C6 6.105 5.105 7 4 7C2.895 7 2 6.105 2 5C2 3.895 2.895 3 4 3C5.105 3 6 3.895 6 5ZM6 8H5.026H2.974H2C0.895 8 0 8.895 0 10V16H2V19V21C2 21.552 2.448 22 3 22H5C5.552 22 6 21.552 6 21V19V16H8V10C8 8.895 7.105 8 6 8Z"
                        className={`fill-current ${pathname.includes("enquiries") ? "text-indigo-300" : "text-slate-400"}`}
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 3C9 4.657 10.343 6 12 6C13.657 6 15 4.657 15 3C15 1.343 13.657 0 12 0C10.343 0 9 1.343 9 3ZM9 23C9 23.552 9.448 24 10 24H14C14.552 24 15 23.552 15 23V17H18V11C18 9.343 16.657 8 15 8H9C7.343 8 6 9.343 6 11V17H9V23Z"
                        className={`fill-current ${pathname.includes("enquiries") ? "text-indigo-300" : "text-slate-400"}`}
                      />
                    </svg>

                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Enquiries
                    </span>
                  </div>
                </NavLink>
              </li>
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes("batches") && "bg-slate-900"}`}>
                <NavLink
                  end
                  to="/batches"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("batches") ? "hover:text-slate-200" : "hover:text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 5C22 6.105 21.105 7 20 7C18.895 7 18 6.105 18 5C18 3.895 18.895 3 20 3C21.105 3 22 3.895 22 5ZM22 8H21.026H18.974H18C16.895 8 16 8.895 16 10V16H18V19V21C18 21.552 18.448 22 19 22H21C21.552 22 22 21.552 22 21V19V16H24V10C24 8.895 23.105 8 22 8Z"
                        className={`fill-current ${pathname.includes("batches") ? "text-indigo-500" : "text-slate-600"}`}
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 5C6 6.105 5.105 7 4 7C2.895 7 2 6.105 2 5C2 3.895 2.895 3 4 3C5.105 3 6 3.895 6 5ZM6 8H5.026H2.974H2C0.895 8 0 8.895 0 10V16H2V19V21C2 21.552 2.448 22 3 22H5C5.552 22 6 21.552 6 21V19V16H8V10C8 8.895 7.105 8 6 8Z"
                        className={`fill-current ${pathname.includes("batches") ? "text-indigo-300" : "text-slate-400"}`}
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 3C9 4.657 10.343 6 12 6C13.657 6 15 4.657 15 3C15 1.343 13.657 0 12 0C10.343 0 9 1.343 9 3ZM9 23C9 23.552 9.448 24 10 24H14C14.552 24 15 23.552 15 23V17H18V11C18 9.343 16.657 8 15 8H9C7.343 8 6 9.343 6 11V17H9V23Z"
                        className={`fill-current ${pathname.includes("batches") ? "text-indigo-300" : "text-slate-400"}`}
                      />
                    </svg>

                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Batches
                    </span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
