import Cover from "../cover/cover";
import styles from "./portfolio.module.css";
import { motion } from 'framer-motion';

interface Info {
  info: {
    title: string;
    description: string;
    image: string;
    link: string;
    technologies: Array<string>;
  }[];
}

const Portfolio: React.FC<Info> = ({ info }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}   
      className={styles.main}>
      <h1 className={styles.title}>Recent Portfolio</h1>
      <div className={styles.container}>
        {info.map((project, index) => (
          <Cover key={index} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
