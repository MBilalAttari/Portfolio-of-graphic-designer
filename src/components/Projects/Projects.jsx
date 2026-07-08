import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaBehance } from "react-icons/fa";
import styles from "./Projects.module.css";
import panverse from "../../assets/panverse.png";
import nexify from "../../assets/nexify.jpg";
import cupcake from "../../assets/cupcake.jpg";
import {
  fadeInUp,
  staggerContainer,
  scaleOnHover,
} from "../../animations/variants";

const Projects = () => {
  const projects = [
    {
      title: "Panverse",
      image: panverse,
      description:
        "A stationery brand that brings your dreams to life with unique and personalized designs.",
      tech: ["Photoshop", "Illustrator", "Figma", "After Effects"],
      behance: "https://www.behance.net/amnaattariya",
      live: "https://www.behance.net/gallery/246972267/Penverse-Sapno-ki-ibtidaStationery-world",
    },
    {
      title: "Nexify",
      image: nexify,
      description:
        "A sleek and modern UI/UX design for a futuristic social media platform.",
      tech: ["Photoshop", "Illustrator", "Figma", "After Effects"],
      behance: "https://www.behance.net/amnaattariya",
      live: "https://www.behance.net/gallery/247655859/Nexify",
    },
    {
      title: "CupCake Cloud",
      image: cupcake,
      description:
        "cupcake cloud is a whimsical and delightful UI/UX design for a bakery website that will make your taste buds dance with joy.",
      tech: ["Photoshop", "Illustrator", "Figma", "After Effects"],
      behance: "https://www.behance.net/amnaattariya",
      live: "https://www.behance.net/gallery/247656755/The-cupcake-cloud",
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <motion.div
        className={styles.container}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 variants={fadeInUp} className={styles.heading}>
          <span className={styles.gradientText}>Featured Projects</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className={styles.subheading}>
          Some things I've built recently
        </motion.p>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              variants={fadeInUp}
              whileHover={{
                y: -12,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              <div className={styles.cardHeader}>
                <img className={styles.cardImage} src={project.image} alt="" />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <motion.a
                    href={project.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                    {...scaleOnHover}
                  >
                    <FaBehance /> Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                    {...scaleOnHover}
                  >
                    <FaExternalLinkAlt /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
