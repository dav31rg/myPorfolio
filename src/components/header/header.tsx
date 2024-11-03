import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./header.module.css";

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState("hero");

  const handleClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -255; // Ajusta este valor según el margen deseado
      const yPosition =
        section.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
    setIsActive(sectionId);
  };

  return (
    <section className={styles.header}>
      <ul className={styles.list}>
        <motion.li
          whileHover={{ scale: 1.3 }}
          transition={{type: "spring", damping: 5, stiffness: 100}}
          className={isActive === "hero" ? styles.active : ""}
          onClick={() => handleClick("hero")}
        >
          Home
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.3 }}
          transition={{type: "spring", damping: 5, stiffness: 100}}
          className={isActive === "about" ? styles.active : ""}
          onClick={() => handleClick("about")}
        >
          About
        </motion.li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </section>
  );
};

export default Header;
