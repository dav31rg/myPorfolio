import styles from "./cover.module.css";
import github from "../../assets/github.svg";
import { motion } from "framer-motion";

interface Info {
  project: {
    title: string;
    description: string;
    image: string;
    link: string;
    textColor?: string;
    backgroundColor?: string;
    technologies: Array<string>;
  };
}
const Cover: React.FC<Info> = ({ project }) => {
  return (
    <div
      className={styles.main}
      style={{ backgroundColor: project.backgroundColor }}
    >
      <h1 style={{ color: project.textColor }}>{project.title}</h1>
      <div>
        <img
          src={project.image}
          className={styles.image}
          alt={`${project.title} image`}
        />
        <p className={styles.description} style={{ color: project.textColor }}>
          {project.description}
        </p>
        <ul className={styles.list}>
          {project.technologies.map((item, index) => (
            <li key={index}>
              <img src={item} className={styles.icon} alt={`${item} icon`} />
            </li>
          ))}
        </ul>
      </div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", damping: 5, stiffness: 100 }}
      >
        <a href={project.link} target="_blank">
          <img src={github} className={styles.link} alt="github link icon" />
        </a>
      </motion.div>
    </div>
  );
};

export default Cover;
