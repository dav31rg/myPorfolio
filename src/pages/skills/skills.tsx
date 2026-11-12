import Badge from "../../components/ui/badge";
import Divider from "../../components/ui/divider";
import { Cloud, Database, Monitor, Server } from "../../components/ui/icons";

interface SkillsProps {
  info: {
    label: string;
    title: string;
    subtitle: string;
    knowledge: Array<Record<string, string[]>>;
  };
}

const categoriesIcons = {
  Frontend: Monitor,
  "Desarrollo frontend": Monitor,
  "Backend & Architecture": Server,
  "Backend y arquitectura": Server,
  "Data & Integrations": Database,
  "Datos e integraciones": Database,
  "Cloud & Dev Tools": Cloud,
  "Nube y herramientas de desarrollo": Cloud,
};

const Skills: React.FC<SkillsProps> = ({ info }) => {
  const categories = info.knowledge[0] ?? {};
  const getIconComponent = (category: string) => {
    const IconComponent =
      categoriesIcons[category as keyof typeof categoriesIcons];
    return IconComponent ? <IconComponent className="size-5" /> : null;
  };

  return (
    <div>
      <section
        id="skills"
        className="layout flex flex-col w-full py-32 max-lg:py-8">
        <Badge>{`02 / ${info.label.toUpperCase()}`}</Badge>
        <h2 className="text-4xl font-semibold max-lg:text-3xl">{info.title}</h2>
        <p className="mt-1 max-w-3xl text-base text-tertiary">
          {info.subtitle}
        </p>

        <div className="mt-12 w-full flex flex-wrap gap-5">
          {Object.entries(categories).map(([category, skills]) => (
            <article
              key={category}
              className="flex flex-col flex-1 min-w-62.5 gap-5 rounded-xs bg-tertiary/10 p-4 lg:p-8"
            >
              <div className="flex gap-2">
                {getIconComponent(category)}
                <h3 className="text-base font-semibold text-(--text-color)">
                  {category}
                </h3>
              </div>
              <Divider />
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="whitespace-nowrap rounded-xs bg-white dark:bg-secondary px-3 py-1 font-mono text-xs text-secondary dark:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
