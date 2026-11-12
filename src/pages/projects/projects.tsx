import Badge from "../../components/ui/badge";
import ProjectCard from "../../components/project-card/project-card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

interface ProjectsProps {
  info: {
    label: string;
    title: string;
    subtitle: string;
    projectsDetail: Project[];
  };
}

const Projects: React.FC<ProjectsProps> = ({ info }) => {
  return (
    <div className="bg-secondary/5">
      <section id="projects" className="layout flex flex-col py-32 max-lg:py-8">
        <Badge>03 / {info.label.toUpperCase()}</Badge>
        <h2 className="text-4xl font-semibold max-lg:text-3xl">{info.title}</h2>
        <p className="mt-1 max-w-3xl text-base text-tertiary">
          {info.subtitle}
        </p>

        <div className="mt-12 flex w-full flex-col gap-10">
          {info.projectsDetail.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
