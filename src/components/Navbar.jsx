import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { DriveULogo } from "./DriveULogo";

export const Navbar = () => {
  const cart = JSON.parse(localStorage.getItem("punctureCart"));
  return (
    <div className="navbar">
      <div>
        <Link to="/main">
          <DriveULogo />
        </Link>
      </div>
      <div className="right">
        <div>
          <FaUserAlt style={{ fontSize: "25px" }} />
        </div>
        <div>
          <Link to="/cartpage">
            <BsCartFill
              style={{
                fontSize: "25px",
                textDecoration: "none",
                color: "black",
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
