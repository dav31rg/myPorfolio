import github from "../../assets/github.svg";

interface Info {
  theme: "light" | "dark";
  project: {
    title: string;
    description: string;
    image: string;
    link: string;
    textColor?: string;
    backgroundColor?: string;
    technologies: Array<string>;
  };
}
const Cover: React.FC<Info> = ({ project, theme }) => {
  const textColor = theme === "dark" ? "#ffffff" : project.textColor;

  return (
    <div
      className="flex h-auto w-full flex-col justify-between gap-8 rounded-[20px] pb-4"
      style={{
        backgroundColor:
          theme === "dark" ? "var(--surface-primary)" : project.backgroundColor,
      }}
    >
      <h1 className="mt-4" style={{ color: textColor }}>
        {project.title}
      </h1>
      <div>
        <img
          src={project.image}
          className="h-auto w-full"
          alt={`${project.title} image`}
        />
        <p className="p-4 text-justify" style={{ color: textColor }}>
          {project.description}
        </p>
        <ul className="flex list-none justify-center gap-2">
          {project.technologies.map((item, index) => (
            <li key={index}>
              <img src={item} className="h-6 w-6" alt={`${item} icon`} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <a className="cursor-pointer" href={project.link} target="_blank">
          <img className="w-11 transition-transform hover:scale-110 motion-reduce:transition-none" src={github} alt="github link icon" />
        </a>
      </div>
    </div>
  );
};

export default Cover;
