import meboo from "../../assets/meboo.webp";
import { motion } from "framer-motion";
import styles from "./about.module.css";

interface Info {
  info: {
    description: string;
    knowledge: string[];
  };
}

const About: React.FC<Info> = ({ info }) => {
  return (
    <div
      id="about"
      className={styles.main}
    >
      <section className={styles.row}>
        <div>
          <img className={styles.image} src={meboo} alt="" />
        </div>

        <div className={styles.container}>
          <h1 className={styles.title}>About me</h1>
          <p className={styles.text}>{info.description}</p>
          <span>download cv</span>
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
    </div>
  );
};

export default About;
