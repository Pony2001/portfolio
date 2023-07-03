import React from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import Cubes from "../components/Cubes";
export default function NotFound() {
  return (
    <m.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      exit={{
        y: "-100%",
      }}
      className="work-in-progress"
    >
      <Cubes />
      <div className="container vertical-center">
        <div className="center">
          <h1 className="display-1">404 - Not Found</h1>
          <h4 className="display-7">
            We couldn't find the page you were looking for.{" "}
            <Link className="link" to="/">
              Click here to reroute.
            </Link>
          </h4>
        </div>
      </div>
    </m.div>
  );
}
