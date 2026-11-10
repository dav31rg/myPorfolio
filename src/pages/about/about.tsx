import Button from "../../components/ui/button";

interface Info {
  labels: {
    about: string;
    downloadCv: string;
  };
  info: {
    avatar: string;
    cv: string;
    description: string;
    knowledge: string[];
  };
}

const About: React.FC<Info> = ({ info, labels }) => {
  return (
    <div
      id="about"
      className="layout flex h-[50rem] flex-col items-baseline gap-12 overflow-x-hidden"
    >
      <section className="mt-28 grid w-full grid-cols-2 justify-between max-lg:mt-4 max-lg:grid-cols-1 max-lg:gap-4">
        <div>
          <img className="h-[400px] w-[400px] rounded-[20%] max-lg:h-auto max-lg:w-[280px]" src={info.avatar} alt="" />
        </div>
        <div className="flex flex-col items-center justify-between max-lg:gap-8">
          <h1 className="m-0 text-5xl max-lg:text-3xl">{labels.about}</h1>
          <p className="m-0 max-w-[700px] px-4 text-justify text-xl max-lg:text-base">{info.description}</p>
          <Button
            href={`https://${info.cv}`}
            target="_blank"
            rel="noreferrer"
            className="w-[200px] rounded-[30px_30px_30px_0] hover:scale-105"
          >
            {labels.downloadCv}
          </Button>
        </div>
      </section>
      <div className="flex gap-2">
        <div className="flex animate-scroll flex-row gap-8 [flex-wrap:nowrap] motion-reduce:animate-none">
          {info.knowledge.map((icon, index) => (
            <img
              key={index}
              className="h-[100px] w-[100px] transition-transform hover:scale-110 motion-reduce:transition-none"
              src={icon}
              alt={`image of ${icon}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
