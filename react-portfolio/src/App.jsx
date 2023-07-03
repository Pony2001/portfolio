import { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
