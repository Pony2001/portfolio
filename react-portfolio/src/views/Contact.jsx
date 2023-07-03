import React, { useEffect, useRef, useState } from "react";
import axiosClient from "../axios-client";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip } from "react-tooltip";
import ClickAwayListener from "react-click-away-listener";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

export default function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const textRef = useRef();

  const [errors, setErrors] = useState(null);
  const [hasErrors, setHasErrors] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [openEmail, setOpenEmail] = useState(false);
  const [openPhone, setOpenPhone] = useState(false);

  const phoneHandleTooltipOpen = () => {
    setOpenEmail(false);
    setOpenPhone(true);
    console.log(openEmail);
  };

  const emailHandleTooltipOpen = () => {
    setOpenEmail(true);
    setOpenPhone(false);
    console.log(openEmail);
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      text: textRef.current.value,
    };
    const success = {
      message: "",
    };
    setErrors(null);
    setHasErrors(false);
    setIsSuccess(false);
    console.log(payload);

    axiosClient
      .post("/contact", payload)
      .then(({ status, data }) => {
        if (status === 201) {
          setIsSuccess(true);
        }
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          if (response.data.errors) {
            setErrors(response.data.errors);
            setHasErrors(true);
          } else {
            setHasErrors(true);
            setErrors({
              email: [response.data.message],
            });
          }
          console.log(response.data.errors);
        }
      });
  };

  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.75 }}
      exit={{
        opacity: 1,
      }}
      // exit={{ x: "-100%", duration: 0.1 }}
      className="hire-me d-flex"
    >
      <div className="container">
        <m.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7, ease: "easeInOut" }}
          style={{ width: "max-content" }}
        >
          <div className="back pb-5 pt-5">
            <Link
              className="link"
              style={{
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
              to="/about"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                fill="currentColor"
                class="bi bi-arrow-left-short"
                viewBox="0 0 16 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                />
              </svg>{" "}
              About
            </Link>
          </div>
        </m.div>
        <div className="align-self-center">
          <m.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
            className="pt-5 pb-5 mx-auto text-center"
          >
            Should you need any further information,
            <br /> please do not hesitate to contact me
          </m.h1>
          <div>
            <div className="row mt-5">
              <m.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="col-md-7"
              >
                <m.div
                  initial={{ x: innerWidth < 768 ? 0 : "35%" }}
                  animate={{ x: 0 }}
                  transition={{
                    delay: 2,
                    duration: 1.4,
                    ease: "easeInOut",
                  }}
                >
                  <div className="overflow-hidden">
                    <h3>
                      <div className="contact-form-title-max-width">
                        You can send me an e-mail by filling&nbsp;
                      </div>
                      <div className="hire-me-typing ">
                        <span className="green-light">this</span>
                        <span className="blue-light">.Form()</span>
                      </div>
                    </h3>
                  </div>

                  <form onSubmit={onSubmit}>
                    {isSuccess && (
                      <div
                        className={isSuccess ? "alert alert-success" : "hidden"}
                      >
                        <p>The e-mail was sent successfully!</p>
                      </div>
                    )}
                    {errors && (
                      <div className={errors ? "alert alert-danger" : "hidden"}>
                        {Object.keys(errors).map((key) => (
                          <p key={key}>{errors[key][0]}</p>
                        ))}
                      </div>
                    )}
                    <div className="row mt-3">
                      <m.div
                        initial={{ y: "20%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 1,
                          duration: 0.7,
                          ease: "easeInOut",
                        }}
                        className="col-md-6 mb-4"
                      >
                        <div class="form-group">
                          <input
                            ref={nameRef}
                            type="name"
                            class="form-control"
                            id="name"
                            placeholder="Enter your name"
                          />
                        </div>
                      </m.div>

                      <m.div
                        initial={{ y: "20%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 1.2,
                          duration: 0.7,
                          ease: "easeInOut",
                        }}
                        className="col-md-6 mb-4"
                      >
                        <div class="form-group">
                          <input
                            ref={emailRef}
                            type="email"
                            class="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter your email"
                          />
                        </div>
                      </m.div>

                      <m.div
                        initial={{ y: "20%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 1.4,
                          duration: 0.7,
                          ease: "easeInOut",
                        }}
                        className="col-md-12"
                      >
                        <div class="form-group">
                          <textarea
                            ref={textRef}
                            class="form-control"
                            id="message"
                            placeholder="Message"
                          />
                        </div>
                      </m.div>
                      <div className="col-md-12 mt-4">
                        <m.button
                          initial={{ y: "20%", opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            delay: 1.6,
                            duration: 0.7,
                            ease: "easeIn",
                          }}
                          className="btn btn-primary w-100"
                        >
                          Send
                        </m.button>
                      </div>
                    </div>
                  </form>
                </m.div>
              </m.div>

              <m.div
                initial={
                  innerWidth < 768
                    ? { y: 0, opacity: 0 }
                    : { x: "50%", opacity: 0 }
                }
                animate={
                  innerWidth < 768 ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }
                }
                transition={{ delay: 2, duration: 1.4, ease: "easeInOut" }}
                className="col-md-5"
              >
                <h3 className="mt-5 text-center">
                  You have the option to either <br />
                  copy my e-mail or my phone number.
                </h3>
                <div className="row mt-5">
                  <div className="col-6 text-center">
                    <Tooltip id="email-tooltip" />
                    <CopyToClipboard text="csikoszs21@gmail.com">
                      <button
                        data-tooltip-id="email-tooltip"
                        data-tooltip-content={
                          openEmail ? "Copied" : "Copy to clipboard"
                        }
                        className="btn btn-outline-light mb-5"
                        onClick={emailHandleTooltipOpen}
                      >
                        Copy Email
                      </button>
                    </CopyToClipboard>
                  </div>
                  <div className="col-6 text-center">
                    <Tooltip id="phone-tooltip" />
                    <CopyToClipboard text="06202825192">
                      <button
                        data-tooltip-id="phone-tooltip"
                        data-tooltip-content={
                          openPhone ? "Copied" : "Copy to clipboard"
                        }
                        className="btn btn-outline-light mb-5"
                        onClick={phoneHandleTooltipOpen}
                      >
                        Copy Phone
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
              </m.div>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}
