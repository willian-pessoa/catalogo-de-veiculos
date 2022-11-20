import React from "react";
import { Link } from "react-router-dom";

import "./navigation.styles.scss"

const Navigation = () => {
  return (
    <div className="navigation">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="admin">Admin</Link>
      </nav>
    </div>
  );
};

export default Navigation;
