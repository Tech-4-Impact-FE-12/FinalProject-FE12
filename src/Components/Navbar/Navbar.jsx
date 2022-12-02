import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "../../Pages/Aboutpage/About";
import Kegiatan from "../../Pages/Activitypage/Kegiatan";
import Home from "../../Pages/Homepage/Home";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import "./Navbar.css";
import AddActivity from "../../Pages/Dashboard/AddActivity";
import EditActivity from "../../Pages/Dashboard/EditActivity";
import Detail from "../../Pages/Activitypage/Detail";

const Navbar = () => {
  const [isAdmin, setIsAdmin] = useState(sessionStorage.getItem("status") || "user");
  const { pathname } = useLocation();

  useEffect(() => {
    setIsAdmin(sessionStorage.getItem("status"));
  }, [pathname]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navItem container-fluid">
          <Link className="navbar-brand mx-3" to="/">
            <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1669133626/MyNature/Logo_m36xes.svg" alt="" width="90" height="50" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mx-5 mb-2 mb-lg-0">
              <LinkContainer to="/">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                </li>
              </LinkContainer>
              <LinkContainer to="/kegiatan">
                <li className={`nav-item ${isAdmin === "admin" && "d-none"}`}>
                  <a className="nav-link" aria-current="page" href="#">
                    Activity
                  </a>
                </li>
              </LinkContainer>
              <LinkContainer to="/about">
                <li className={`nav-item ${isAdmin === "admin" && "d-none"}`}>
                  <a className="nav-link" aria-current="page" href="#">
                    About
                  </a>
                </li>
              </LinkContainer>
              <LinkContainer to="/dashboard">
                <li className={`nav-item ${isAdmin !== "admin" && "d-none"}`}>
                  <a className="nav-link" aria-current="page" href="#">
                    Dashboard
                  </a>
                </li>
              </LinkContainer>
              <LinkContainer id="Login" to="/login">
                <button type="button" className="btn btn-outline-success" id="login-btn">
                  Login <i className="bi bi-box-arrow-in-right"></i>
                </button>
              </LinkContainer>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addactivity" element={<AddActivity />} />
        <Route path="/editactivity/:id" element={<EditActivity />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default Navbar;
