import Cover from "../../components/project-card/project-card";

interface Info {
  title: string;
  theme: "light" | "dark";
  info: {
    title: string;
    description: string;
    image: string;
    link: string;
    technologies: Array<string>;
  }[];
}

const Portfolio: React.FC<Info> = ({ info, title, theme }) => {
  return (
    <div
      id="projects"
      className="layout flex flex-col items-center">
      <h1 className="mt-12 text-5xl max-lg:mt-4 max-lg:text-3xl">{title}</h1>
      <div className="mt-12 grid w-full grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
        {info.map((project, index) => (
          <Cover key={index} project={project} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
