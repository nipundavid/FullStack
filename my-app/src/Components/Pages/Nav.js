import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <img src={logo} alt="logo" style={{ width: "35px" }}></img>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        {/* The hamburger icon */}
        <i className="fas fa-bars" style={{ color: "#fff" }}></i>
      </button>
      {/* <span className="navbar-toggler-icon" /> */}
      {props.name}

      <div className="collapse navbar-collapse ml-5" id="navbarTogglerDemo01">
        <Link className="navbar-brand" href="#"></Link>
        <div className="container justify-content-center">
          <ul className="navbar-nav m-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link text-white  ml-5" to="/">
                Home &nbsp;<i className="fas fa-home"></i>
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white  ml-5" to="/news">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white  ml-5" to="/contacts">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
