import styles from "./card.module.css";

interface CardProps {
  title: string;
  company: string;
  date: string;
  description: string;
  technologies: string[];
}

const Card: React.FC<CardProps> = ({ title, company, date, description, technologies }) => {
  return (
    <div
      className={styles.container}
    >
      <div className={styles.padContainer}>
        <div className={styles.leftAlign}>
          <div className={styles.flex}>
            <h1 className={styles.titleGray}>{title}</h1>
            <h2 className={styles.titleOrange}>{company}</h2>
          </div>
          <h3 className={styles.date}>{date}</h3>
        </div>
        <p className={styles.text}>{description}</p>
      <div className={styles.imageContainer}>
        {technologies.map((icon, index)=>( 
          <img key={index} src={icon} className={styles.image} alt={`${title} image`} />

        ))}
      </div>
      </div>
    </div>
  );
};

export default Card;
