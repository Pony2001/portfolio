import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import Cubes from "../components/Cubes";
export default function WorkInProgress() {
  const navigate = useNavigate();
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
          <h1 className="display-1">Work In Progress</h1>
          <h4 className="display-7">
            This page is not done yet, check back later!{" "}
            <Link className="link" to="/about">
              Want to go back?
            </Link>
          </h4>
        </div>
      </div>
    </m.div>
  );
}
