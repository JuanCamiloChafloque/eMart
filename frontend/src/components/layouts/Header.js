import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar row">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <img
                  className=""
                  src="images/logo.png"
                  style={{
                    height: "35px",
                    marginRight: "8px",
                  }}
                  alt=""
                />
              </div>
              <strong style={{ color: "#febd69" }}>E-</strong>
              <strong style={{ color: "#ffffff" }}>Mart</strong>
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <Search />
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <button className="btn" id="login_btn">
            Login
          </button>

          <span id="cart" className="ml-3">
            Cart
          </span>
          <span className="ml-1" id="cart_count">
            2
          </span>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
