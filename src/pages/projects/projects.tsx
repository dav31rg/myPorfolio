import Cover from "../../components/project-card/project-card";
import styles from "./projects.module.css";
import { motion } from "motion/react";

interface Info {
  title: string;
  theme: "light" | "dark";
  info: {
    title: string;
    description: string;
    image: string;
    link: string;
    technologies: Array<string>;
  }[];
}

const Portfolio: React.FC<Info> = ({ info, title, theme }) => {
  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
      className={styles.main}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.container}>
        {info.map((project, index) => (
          <Cover key={index} project={project} theme={theme} />
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
