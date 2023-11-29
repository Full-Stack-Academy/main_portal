import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";
import "./utils/firebaseConfig";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import Testimonials from "./pages/Testimonials";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import Placements from "./pages/Placements";
import Batches from "./pages/Batches";
// import Enquiries from "./pages/Enquiries";

function App() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  useEffect(() => {
    localStorage.getItem("token") ? setIsLoggedIn(true) : null;
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
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/testimonials" element={<Testimonials />} />
              <Route exact path="/placements" element={<Placements />} />
              <Route exact path="/batches" element={<Batches />} />
              {/* <Route exact path="/enquiries" element={<Enquiries />} /> */}
              <Route
                exact
                path="*"
                element={
                  <>
                    <Navigate to="/" />
                  </>
                }
              />
            </Routes>
            {/* <Banner /> */}
          </div>
        </div>
      ) : (
        <Routes>
          <Route exact path="/signin" element={<Signin setIsLoggedIn={setIsLoggedIn} />} />
          <Route
            exact
            path="*"
            element={
              <>
                <Navigate to={"/signin"} />
              </>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
