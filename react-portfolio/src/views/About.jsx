import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { color, motion as m } from "framer-motion";

import "bootstrap/dist/css/bootstrap.min.css";
import laptop from "../images/laptop_realistic.png";
import ekke from "../images/ekke-logo-feher-en.png";
import BackToTopButton from "../components/BackToTopButton";
import Cubes from "../components/Cubes";

export default function About() {
  const section = useRef();

  const scrollHandler = (elmRef) => {
    window.scrollTo({
      top: elmRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.75 }}
        exit={{
          opacity: 1,
        }}
        className="about"
      >
        <Cubes />
        {/* INTRODUCE MYSELF */}
        <div className="container d-flex " style={{ minHeight: "100vh" }}>
          <m.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.75, ease: "easeInOut" }}
            className="align-self-center "
          >
            {/* TITLE-1 */}
            <div className="clip">
              <div className=" d-inline-block">
                <div className="about-form-title-max-width">Hi, I'm&nbsp;</div>
                <div className="about-typing">Zsolt</div>
              </div>
            </div>

            {/* TITLE-2 */}
            <m.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.75, ease: "easeInOut" }}
            >
              <div className="about-container">
                <h1 className="about-introduce-1 display-5">
                  Full-Stack Web&nbsp;Developer
                </h1>
              </div>
            </m.div>
            {/* DESCREPTION */}
            <m.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.75, duration: 0.75, ease: "easeInOut" }}
              className="introduce"
            >
              <div className="about-container">
                <div className="row ">
                  <div className="col-sm-12 ">
                    <p className="about-text ">
                      with a passion for turning ideas into amazing web
                      applications. <br /> Let's shape the future of web
                      applications together!{" "}
                      <span className="code">
                        {"<"}
                        <Link className="link " to="/contact">
                          Contact
                        </Link>
                        &nbsp;{"/>"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </m.div>

            {/* SCROLL DOWN */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 0.75, ease: "easeInOut" }}
              className="mb-5"
              style={{ width: "min-content" }}
              onClick={() => scrollHandler(section)}
            >
              <div className="d-flex" style={{ cursor: "pointer" }}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="62"
                    height="62"
                    fill="currentColor"
                    class="bi bi-arrow-down"
                    viewBox="0 0 16 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="arrow-down p-3">Scroll&nbsp;Down</span>
                </div>
              </div>
            </m.div>
          </m.div>
        </div>

        {/* SCHOOL */}
        <div className="mt-5 mb-5" ref={section}>
          <div className="projects shadow pt-5 pb-5">
            <div className="container">
              <div className="row text-center mx-auto">
                <div className="col-lg-6">
                  <img
                    src={ekke}
                    alt="ekke"
                    style={{
                      marginTop: "20px",
                    }}
                    width={"80%"}
                  />
                </div>
                <div className="col-lg-6 mt-4 p-3">
                  <h2>I am currently a university student</h2>
                  <h4>at Eszterhazy Károly Catholic University.</h4>
                  <h5>I am studying Software Information Technology.</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MY FIRST PROJECT */}
        <div className="mt-5 mb-5">
          <div className="projects shadow pt-5">
            <div className="container">
              <div className="row text-center">
                <div className="col-lg-6 pb-5">
                  <h3>My first project is a Quotation Maker </h3>

                  <p className="project-text">
                    This app allows you to easily create professional quotes. It
                    saves time, minimizes errors, and provides valuable insights
                    into sales performance. Built with Laravel both in the
                    backend and in the frontend.
                  </p>
                  <Link
                    to="/quotation-maker"
                    onClick={scrollUp}
                    className="black-to-yellow"
                  >
                    Read More
                  </Link>
                </div>
                <div className="col-lg-6">
                  <div className="text-center pb-5">
                    <img
                      src={laptop}
                      alt="laptop"
                      style={{
                        marginTop: "20px",
                      }}
                      width={"70%"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <div className="projects shadow pt-5 pb-5">
            <div className="container">
              <div className="code">
                <h3 className="made-with-title">
                  // This portfolio was made with
                </h3>
                <div className="row made-with">
                  <div className="col-md-6">
                    <ul>
                      <li>.BackEnd(Laravel)</li>
                      <li>.API(Axios)</li>
                      <li>.FrontEnd(Vite, React)</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      <li>.FramerMotion()</li>
                      <li>.Bootstrap()</li>
                      <li>.Photoshop()</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </m.div>
      <BackToTopButton />
    </div>
  );
}
