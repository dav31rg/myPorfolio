import Badge from "../../components/ui/badge";

interface SkillsProps {
  info: {
    label: string;
    title: string;
    subtitle: string;
    knowledge: Array<Record<string, string[]>>;
  };
}

const Skills: React.FC<SkillsProps> = ({ info }) => {
  const categories = info.knowledge[0] ?? {};

  return (
    <section id="skills" className="layout py-32 max-lg:py-8">
      <Badge className="mb-4">02 / {info.label.toUpperCase()}</Badge>
      <h2 className="text-4xl font-semibold max-lg:text-3xl">{info.title}</h2>
      <p className="mt-4 max-w-3xl text-base text-tertiary">{info.subtitle}</p>

      <div className="mt-10 grid w-full gap-5 md:grid-cols-2">
        {Object.entries(categories).map(([category, skills]) => (
          <article
            key={category}
            className="flex flex-col gap-5 rounded-xl border border-secondary/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="text-lg font-semibold text-[var(--text-color)]">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-tertiary/10 px-3 py-1 text-sm text-secondary dark:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
