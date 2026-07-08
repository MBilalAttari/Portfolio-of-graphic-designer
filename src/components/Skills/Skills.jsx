import { motion } from "framer-motion";
import { FaFigma } from "react-icons/fa";
import {
  SiCoreldraw,
  SiFramer,
  SiLottiefiles,
  SiSketch,
  SiMiro,
  SiRive,
} from "react-icons/si";
import {
  TbBrandAdobeAfterEffect,
  TbBrandAdobeIllustrator,
  TbBrandAdobeIndesign,
  TbBrandAdobePhotoshop,
  TbBrandAdobeXd,
} from "react-icons/tb";
import styles from "./Skills.module.css";
import {
  fadeInUp,
  staggerContainer,
  scaleOnHover,
} from "../../animations/variants";

const Skills = () => {
  const skills = [
    { icon: TbBrandAdobePhotoshop, name: "Photoshop", color: "#61dafb" },
    { icon: TbBrandAdobeIllustrator, name: "Illustrator", color: "#ff9a00" },
    { icon: TbBrandAdobeIndesign, name: "Indesign", color: "#e32c26" },
    { icon: TbBrandAdobeXd, name: "XD", color: "#ff61a6" },
    { icon: TbBrandAdobeAfterEffect, name: "After Effects", color: "#9999ff" },
    { icon: FaFigma, name: "Figma", color: "#a259ff" },
    { icon: SiRive, name: "Rive", color: "#ffffff" },
    { icon: SiLottiefiles, name: "LottieFiles", color: "#00DDB3" },
    { icon: SiFramer, name: "Framer", color: "#ffffff" },
    { icon: SiSketch, name: "Sketch", color: "#FFC30B" },
    { icon: SiCoreldraw, name: "CorelDRAW", color: "#12B35F" },
    { icon: SiMiro, name: "Miro", color: "#FFDD33" },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <motion.div
        className={styles.container}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 variants={fadeInUp} className={styles.heading}>
          <span className={styles.gradientText}>My Skills</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className={styles.subheading}>
          Technologies I work with regularly
        </motion.p>

        <motion.div className={styles.grid}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={styles.skillCard}
              variants={fadeInUp}
              {...scaleOnHover}
              whileHover={{
                ...scaleOnHover.whileHover,
                boxShadow: `0 8px 32px ${skill.color}33`,
                borderColor: skill.color,
              }}
            >
              <skill.icon
                className={styles.skillIcon}
                style={{ color: skill.color }}
              />
              <span className={styles.skillName}>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
