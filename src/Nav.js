import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pancake">Pancake</NavLink>
      <NavLink to="/pizza">Pizza</NavLink>
      <NavLink to="/ramen">Ramen</NavLink>
      <NavLink to="/taco">Taco</NavLink>
    </nav>
  );
};

export default Nav;
