import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import Testimonials from "./pages/Testimonials";
import Signin from "./pages/Signin";
import Register from "./pages/Register";

function App() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  useEffect(() => {
    let tkn = localStorage.getItem("token");
    if (tkn) {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      navigate("/signin");
    }
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* Content area */}
          <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {/*  Site header */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/testimonials" element={<Testimonials />} />
            </Routes>
            {/* <Banner /> */}
          </div>
        </div>
      ) : (
        <Routes>
          <Route exact path="/signin" element={<Signin setIsLoggedIn={setIsLoggedIn} />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      )}
    </>
  );
}

export default App;
