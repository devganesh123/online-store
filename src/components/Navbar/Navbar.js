import React from "react";
import { Typography, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItem }) => {
  const location = useLocation();
  return (
    <header className="top-header">
      <div className="nav">
        <Typography component={Link} to="/">
          Navbar
        </Typography>
      </div>
      {location.pathname === "/" && (
        <div className="header-cart">
          <IconButton component={Link} to="/cart">
            <ShoppingCartIcon variant="contained"></ShoppingCartIcon>
            <span className="cart-count">{totalItem}</span>
          </IconButton>
        </div>
      )}
    </header>
  );
};

export default Navbar;
