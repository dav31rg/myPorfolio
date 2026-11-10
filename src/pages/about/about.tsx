import Badge from "../../components/ui/badge";

interface AboutProps {
  title: string;
  subtitle: string;
  description: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  knowledge: string[];
}

const About: React.FC<AboutProps> = ({
  title,
  subtitle,
  description,
  knowledge,
}) => {
  return (
    <div className="bg-secondary/5">
      <section id="about" className="layout flex w-full py-32 max-lg:py-8">
        <Badge>01 / ABOUT</Badge>
        <div className="flex flex-col">
          <h2 className="mt-6 text-4xl font-semibold max-lg:text-3xl">
            {title}
          </h2>
          <p className="mt-4 max-w-3xl text-base text-tertiary">{subtitle}</p>
          <div className="mt-8 grid w-full gap-4 md:grid-cols-3">
            {description.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-3 rounded-xl border border-secondary/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <span className="text-primary" aria-hidden="true">
                  <img className="size-6" src={item.icon} alt="" />
                </span>
                <h3 className="text-lg font-semibold text-[var(--text-color)]">
                  {item.title}
                </h3>
                <p className="text-sm text-tertiary dark:text-white/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            {knowledge.map((icon, index) => (
              <img
                key={`${icon}-${index}`}
                className="size-10 object-contain"
                src={icon}
                alt=""
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
