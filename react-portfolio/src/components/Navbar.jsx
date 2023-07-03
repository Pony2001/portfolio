import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark navbar">
      <Link className="link nav-link ms-3" to="/about">
        .About()
      </Link>
      <Link className="link nav-link ms-3" to="/hire-me">
        .HireMe()
      </Link>
    </nav>
  );
}
