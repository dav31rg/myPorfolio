import styles from "./hero.module.css";
import { motion } from "framer-motion";

interface Info {
  info: {
    meebo: string;
    name: string;
    role: string;
    contact: Array<{ icon: string; value: string }>;
    socialMedia: Array<{ icon: string; value: string }>;
  };
}

const Hero: React.FC<Info> = ({ info }) => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className={styles.main}
    >
      <section className={styles.textContainer}>
        <motion.span
          whileHover={{
            scale: 1.3,
          }}
          transition={{ type: "spring", damping: 5, stiffness: 100 }}
          className={styles.iam}
        >
          Hello I'm
        </motion.span>
        <div>
          <h1 className={styles.title}>{info.name}</h1>
          <h2 className={styles.subtitle}>{info.role}</h2>
        </div>
        <ul className={styles.list}>
          {info.contact.map((contact, index) => (
            <li key={index}>
              <img src={contact.icon} alt="contact icon" />
              {contact.value}
            </li>
          ))}
        </ul>
        <ul className={styles.socialMedia}>
          {info.socialMedia.map((social, index) => (
            <li key={index}>
              <a href={`https://${social.value}`} target="_blank">
                <motion.img
                  src={social.icon}
                  alt={`${social.value} icon`}
                  className={styles.icon}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.imageContainer}>
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
            className={styles.imageSecondBackground}
          >
            <img
              className={styles.rounded}
              width={340}
              src={info.meebo}
              alt="foto de perfil"
            />
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Hero;
