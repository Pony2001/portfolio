import React from "react";
import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";
import { AnimatePresence } from "framer-motion";
import NotFound from "./views/NotFound";
import WorkInProgress from "./views/WorkInProgress";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        {/* Home */}
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<About />} />

        {/* Others */}
        <Route path="/contact" element={<Contact />} />

        {/* Work In Progress */}
        <Route path="/quotation-maker" element={<WorkInProgress />} />

        {/* 404 - Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
