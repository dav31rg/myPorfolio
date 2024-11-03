import React from "react";
import meebo from "../../assets/meboo.jpeg";
import styles from "./hero.module.css";
import { motion } from "framer-motion";

interface Info {
  info: {
    name: string;
    role: string;
    email: string;
    phone: string;
    address: string;
    github: string;
    instagram: string;
    linkedin: string;
  };
}

const Hero: React.FC<Info> = ({ info }) => {
  return (
    <motion.div
      id="hero"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className={styles.main}
    >
      <section className={styles.textContainer}>
        <motion.span
          whileHover={{
            scale: 1.3,
          }}
          transition={{type: "spring", damping: 5, stiffness: 100}}
          className={styles.iam}
        >
          Hello I'm
        </motion.span>
        <h1 className={styles.title}>{info.name}</h1>
        <h2 className={styles.subtitle}>{info.role}</h2>
        <ul className="flex-col list">
          <li>{info.email}</li>
          <li>{info.phone}</li>
          <li>{info.address}</li>
        </ul>
        <ul className="flex-col list">
          <li>{info.github}</li>
          <li>{info.instagram}</li>
          <li>{info.linkedin}</li>
        </ul>
      </section>
      <section>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className={styles.imageBackground}
        >
          <img
            className={styles.rounded}
            width={340}
            src={meebo}
            alt="foto de perfil"
          />
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Hero;
