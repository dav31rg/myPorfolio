import { motion } from "framer-motion";
import styles from "./about.module.css";

interface Info {
  info: {
    avatar: string;
    cv: string;
    description: string;
    knowledge: string[];
  };
}

const About: React.FC<Info> = ({ info }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
      id="about" 
      className={styles.main}
    >
      <section className={styles.row}>
        <div>
          <img className={styles.image} src={info.avatar} alt="" />
        </div>
        <div className={styles.container}>
          <h1 className={styles.title}>About me</h1>
          <p className={styles.text}>{info.description}</p>
          <motion.div 
            className={styles.button}
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", damping: 5, stiffness: 100 }}
          >
            <a target="_blank" href={`https://${info.cv}`}>
              download CV
            </a>
          </motion.div>
        </div>
      </section>
      <div className={styles.imageContainer}>
        <motion.div
          className={styles.carrusel}
          animate={{ x: ["50%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {info.knowledge.map((icon, index) => (
            <motion.img
              whileHover={{ scale: 1.3 }}
              key={index}
              height={100}
              width={100}
              src={icon}
              alt={`image of ${icon}`}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
