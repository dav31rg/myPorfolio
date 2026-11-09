import Card from "../../components/experience-card/experience-card";

interface Info {
  labels: {
    education: string;
    workExperience: string;
  };
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

const Experience: React.FC<Info> = ({ info, labels }) => {
  return (
    <div
      id="experience"
      className="mx-auto mt-12 grid w-[90%] max-w-[1200px] grid-cols-2 gap-20 max-lg:mt-4 max-lg:grid-cols-1">
      <div id="education" className="flex w-full flex-col items-center gap-16 max-lg:order-2 max-lg:gap-8">
        <h1 className="m-0 text-5xl max-lg:text-3xl">{labels.education}</h1>
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

      <div id="experience" className="flex w-full flex-col items-center gap-16 max-lg:order-1 max-lg:gap-8">
        <h1 className="m-0 text-5xl max-lg:text-3xl">{labels.workExperience}</h1>
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
    </div>
  );
};

export default Experience;
