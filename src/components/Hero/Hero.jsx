import React from "react";
import { motion } from "framer-motion";
import { FaBehanceSquare,FaInstagram,FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./Hero.module.css";
import { fadeInUp, scaleOnHover } from "../../animations/variants";
import heroImg from "../../assets/heroImg.png";

const Hero = () => {
  const socials = [{icon: FaBehanceSquare, link: "https://www.behance.net/amnaattariya"}, {icon: FaLinkedin, link: "https://www.linkedin.com/in/amna-attariya-arshad-ali-0954ba400/"}, {icon: FaInstagram, link: "https://www.instagram.com/amna_attariya_shaikh/"}];
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <motion.div className={styles.content} variants={fadeInUp}>
          <motion.div
            className={styles.badge}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
             Open to opportunities
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Hi, I'm{" "}
            <motion.span
              className={styles.gradientText}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              Amna Attariya
            </motion.span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Graphic designer · UI/UX designer
          </motion.p>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            I create meaningful visual identities and intuitive digital
            experiences that connect brands with people.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <motion.button
              className={styles.primaryBtn}
              {...scaleOnHover}
              whileHover={{
                boxShadow: "0 0 30px #dff75531",
                ...scaleOnHover.whileHover,
                
              }}
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                projectsSection.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </motion.button>
            <motion.button 
            className={styles.secondaryBtn}
             {...scaleOnHover}
             onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection.scrollIntoView({ behavior: "smooth" });
            }}
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            className={styles.socials}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                className={styles.socialLink}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  color: "#00fff2",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
        >
          <div className={styles.imageWrapper}>
            <div className={styles.floatingOrb}></div>
            <div className={styles.floatingOrb2}></div>
            <div className={styles.profilePlaceholder}>
              <span>
                <img className={styles.heroImg} src={heroImg} alt="Hero" />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
