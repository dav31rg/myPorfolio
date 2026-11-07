import { Link } from "react-router-dom";
import { motion } from "motion/react";
import meeboNotFound from "../../assets/meebo-404.webp";
import styles from "./not-found.module.css";

interface NotFoundProps {
  labels: {
    notFoundTitle: string;
    notFoundMessage: string;
    home: string;
  };
}

const NotFound: React.FC<NotFoundProps> = ({ labels }) => {
  return (
    <section className={styles.main}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
        className={styles.container}>
        <img className={styles.image} src={meeboNotFound} alt="404 image" />
        <h1>{labels.notFoundTitle}</h1>
        <span>
          {labels.notFoundMessage} &nbsp;
          <Link to="/">{labels.home}</Link>
        </span>
      </motion.div>
    </section>
  );
};

export default NotFound;
