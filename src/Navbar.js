import React, { useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./Navbar.css";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useViewportScroll();
  const yPos = useTransform(scrollY, [0, 200], ["50vh", "0vh"]);

  scrollY.onChange((y) => {
    setIsScrolled(y > 0);
  });

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-center">
        <motion.h1
          style={{ y: yPos }}
          initial={{ y: "50vh" }}
          transition={{ duration: 1 }} // Change this value to control the animation speed
        >
          Your Navbar
        </motion.h1>
      </div>
    </nav>
  );
};

export default Navbar;
