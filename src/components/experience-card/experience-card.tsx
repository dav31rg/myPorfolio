
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
      className="flex h-auto w-full flex-col gap-4 rounded-[25px] border border-[var(--border-color)] shadow-[0_8px_24px_rgba(17,17,26,0.1),0_16px_56px_rgba(17,17,26,0.1),0_24px_80px_rgba(17,17,26,0.1)]"
    >
      <div className="mt-3 p-4">
        <div className="mb-4 flex flex-col items-start">
          <div className="flex gap-4">
            <h1 className="m-0 text-xl text-[var(--text-color)]">{title}</h1>
            <h2 className="m-0 text-xl text-primary">{company}</h2>
          </div>
          <h3 className="m-0 text-base text-primary">{date}</h3>
        </div>
        <p className="m-0 text-justify text-base">{description}</p>
      <div className="mt-2 flex justify-center gap-2">
        {technologies.map((icon, index)=>( 
          <img key={index} src={icon} className="h-6 w-6" alt={`${title} image`} />

        ))}
      </div>
      </div>
    </div>
  );
};

export default Card;
