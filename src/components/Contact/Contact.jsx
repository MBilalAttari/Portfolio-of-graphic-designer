import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Contact.module.css";
import {
  fadeInUp,
  staggerContainer,
  scaleOnHover,
} from "../../animations/variants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
  };

  return (
    <section id="contact" className={styles.contact}>
      <motion.div
        className={styles.container}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 variants={fadeInUp} className={styles.heading}>
          <span className={styles.gradientText}>Get in Touch</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className={styles.subheading}>
          Have a project in mind? Let's talk.
        </motion.p>

        <div className={styles.content}>
          <motion.div className={styles.info} variants={fadeInUp}>
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.infoIcon} />
              <div>
                <h4>Email</h4>
                <p>amnaattariyaarshad@gmail.com</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <FaPhone className={styles.infoIcon} />
              <div>
                <h4>Phone</h4>
                <p>+92 311 2773 013</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.infoIcon} />
              <div>
                <h4>Location</h4>
                <p>Karachi ,Pakistan</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className={styles.form}
            variants={fadeInUp}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={styles.input}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className={styles.textarea}
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <motion.button
              type="submit"
              className={styles.submitBtn}
              {...scaleOnHover}
              whileHover={{
                ...scaleOnHover.whileHover,
                boxShadow: "0 0 30px #00fff231",
              }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
