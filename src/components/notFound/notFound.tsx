import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import meeboNotFound from "../../assets/meebo-404.webp";
import styles from "./notFound.module.css";

const NotFound = () => {
  return (
    <section className={styles.main}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}  
        className={styles.container}>
        <img className={styles.image} src={meeboNotFound} alt="404 image" />
        <h1>404 - Page Not Found</h1>
        <span>
          Sorry, the page you are looking for does not exist. Maybe this will
          help &nbsp;
          <Link to="/">Home</Link>
        </span>
      </motion.div>
    </section>
  );
};

export default NotFound;
