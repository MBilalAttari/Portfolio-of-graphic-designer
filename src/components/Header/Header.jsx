import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Skills", "Projects", "Contact"];

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.logo}
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <img className={styles.logoImg} src={logo} alt="logo" />
          <span className={styles.logoText}>Amna Attariya</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className={styles.navDesktop}>
          {navLinks.map((link, index) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={styles.navLink}
              whileHover={{ scale: 1.1, color: "#6ac6b7b6" ,transition: { duration: 0.2 }}}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Navigation */}
        <motion.nav
          className={`${styles.navMobile} ${isOpen ? styles.open : ""}`}
          initial={false}
          animate={isOpen ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {navLinks.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={styles.navLinkMobile}
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 10, color: "#6AC6B7" }}
            >
              {link}
            </motion.a>
          ))}
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
