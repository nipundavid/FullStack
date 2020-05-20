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
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        {/* <span className="navbar-toggler-icon" /> */}
        <i className="fas fa-bars" style={{ color: "#fff" }}></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ml-5">
          <li className="nav-item active">
            <Link className="nav-link text-white" to="/">
              Home&nbsp;<i className="fas fa-home"></i>{" "}
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 ml-5">
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
