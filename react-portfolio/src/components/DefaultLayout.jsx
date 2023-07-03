import React, { useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios-client.js";
import Portfolio from "../views/About";

export default function DefaultLayout() {
  const { user, token, setUser, setToken } = useStateContext();

  if (!token) {
    return <Navigate to="/portfolio" />;
  }

  const onLogout = (ev) => {
    ev.preventDefault();

    axiosClient.post("/logout").then(() => {
      setUser({});
      setToken(null);
    });
  };

  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      setUser(data);
    });
  }, []);

  return (
    <div id="defaultLayout">
      <Link to="/portfolio">Portfolio</Link>
      <div className="content">
        <header>
          <div>Header</div>
          <div>
            {user.name}
            <a onClick={onLogout} href="#">
              Logout
            </a>
          </div>
        </header>
        <main>
          DefaultLayout
          <Outlet />
        </main>
      </div>
    </div>
  );
}
