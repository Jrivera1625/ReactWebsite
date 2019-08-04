import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a href="http://linkedin.com" target="_blank">
          <i class="fa fa-linkedin" />
        </a>
        <a href="http://github.com" target="_blank">
          <i class="fa fa-github" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <div className="nav-link">
                {" "}
                <Link to="">Home </Link>{" "}
                <span className="sr-only">(current)</span>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                {" "}
                <Link to="Resume">Resume </Link>
              </div>
            </li>

            <li className="nav-item">
              <div className="nav-link ">
                <Link to="Projects">Projects </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavBar;
