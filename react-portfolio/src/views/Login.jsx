import React, { useRef, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios-client";

const onSubmit = (ev) => {
  ev.preventDefault();
};
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [errors, setErrors] = useState(null);
  const { setUser, setToken } = useStateContext();

  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    setErrors(null);
    console.log(payload);

    axiosClient
      .post("/login", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          if (response.data.errors) {
            setErrors(response.data.errors);
          } else {
            setErrors({
              email: [response.data.message],
            });
          }
          console.log(response.data.errors);
        }
      });
  };
  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <h1>Login into your account</h1>
          {errors && (
            <div className="alert">
              {Object.keys(errors).map((key) => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          )}
          <input ref={emailRef} type="email" placeholder="email" />
          <input ref={passwordRef} type="password" placeholder="password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
