import Card from "../card/card";
import styles from "./experience.module.css";
import { motion } from 'framer-motion';

interface Info {
  info: {
    education: {
      title: string;
      company: string;
      date: string;
      description: string;
      technologies: Array<string>;
    }[];
    work: {
      title: string;
      company: string;
      date: string;
      description: string;
      technologies: Array<string>;
    }[];
  };
}

const Experience: React.FC<Info> = ({ info }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }} 
      id="experience" 
      className={styles.main}>
      <div id={styles.education} className={styles.flexCol}>
        <h1 className={styles.title}>Education</h1>
        {info.education.map((card, idx) => (
          <Card
            key={idx}
            title={card.title}
            company={card.company}
            date={card.date}
            description={card.description}
            technologies={card.technologies}
          />
        ))}
      </div>

      <div id={styles.experience} className={styles.flexCol}>
        <h1 className={styles.title}>Work Experience</h1>
        {info.work.map((card, idx) => (
          <Card
            key={idx}
            title={card.title}
            company={card.company}
            date={card.date}
            description={card.description}
            technologies={card.technologies}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
