import Button from "../ui/button";
import Divider from "../ui/divider";
import { GitHub, Eye } from "../ui/icons";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <article className="flex h-full flex-col gap-5 rounded-xs bg-white dark:bg-secondary p-8">
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-semibold text-(--text-color)">
        {project.title}
      </h3>
      <p className="text-sm text-tertiary dark:text-white/70">
        {project.description}
      </p>
    </div>

    <Divider />

    <ul
      aria-label={`${project.title} technologies`}
      className="flex list-none flex-wrap items-center gap-3"
    >
      {project.technologies.map((technology, index) => (
        <span
          key={`${index}-${technology}`}
          className="whitespace-nowrap rounded-xs bg-tertiary/10 dark:bg-secondary px-3 py-1 font-mono text-xs text-secondary dark:text-white"
        >
          {technology}
        </span>
      ))}
    </ul>

    <div className="mt-auto flex justify-end flex-wrap gap-3">
      {project.github?.trim() && (
        <Button
          href={project.github}
          target="_blank"
          rel="noreferrer"
          variant="secondary"
          size="sm"
          leftIcon={<GitHub className="size-4" />}
        >
          GitHub
        </Button>
      )}
      {project.demo?.trim() && (
        <Button
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          variant="primary"
          size="sm"

          leftIcon={<Eye className="size-4" />}
        >
          Live Demo
        </Button>
      )}
    </div>
  </article>
);

export default ProjectCard;
