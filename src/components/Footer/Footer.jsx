import React from "react";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { FaGithub, FaHeart } from "react-icons/fa";

const Footer = () => {

      const socials = [
        { icon: FaGithub, link: "https://github.com/mbilalattari" },
        { icon: FaHeart, link: "https://www.yourwebsite.com" },
      ];

  return (
    <motion.footer
      className={styles.footer}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={styles.container}>
        <motion.p className={styles.text}>
          © 2026 Muhammad Bilal Attari. Made with{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <FaHeart color="#ff0000" />
          </motion.span>{" "}
          for sister
        </motion.p>
        <p className={styles.subtext}>
          Every component uses <code>.module.css</code> + Framer Motion
          animations
        </p>
        <div className={styles.techBadges}>
          <span>React</span>
          <span>Framer Motion</span>
          <span>Modular CSS</span>
          <span>Component-based</span>
        </div>
        <div>
          {socials.map((social,idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
