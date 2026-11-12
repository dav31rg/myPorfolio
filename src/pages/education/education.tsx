import Badge from "../../components/ui/badge";

interface EducationProps {
  info: {
    label: string;
    title: string;
    subtitle: string;
    educationDetail: {
      title: string;
      company: string;
      date: string;
      description: string;
      technologies: string[];
    }[];
  };
}

const Education: React.FC<EducationProps> = ({ info }) => (
  <div className="bg-secondary/5">
    <section id="education" className="layout py-32 max-lg:py-8">
      <Badge>05 / {info.label.toUpperCase()}</Badge>
      <h2 className="text-4xl font-semibold max-lg:text-3xl">{info.title}</h2>
      <p className="mt-1 max-w-3xl text-base text-tertiary">{info.subtitle}</p>

      <div className="mt-12 w-full flex flex-wrap gap-5">
        {info.educationDetail.map((item) => (
          <article
            key={`${item.company}-${item.date}`}
            className="flex flex-col flex-1 min-w-[250px] gap-5 rounded-lg bg-white p-6 shadow-sm dark:bg-secondary"
          >
            <header>
              <h3 className="text-lg font-semibold text-(--text-color)">
                {item.title}
              </h3>
              <p className="text-primary">{item.company}</p>
              <p className="text-sm text-tertiary dark:text-white/70">
                {item.date}
              </p>
            </header>
            <p className="text-sm text-tertiary dark:text-white/70">
              {item.description}
            </p>
            <ul
              aria-label={`${item.title} technologies`}
              className="flex list-none flex-wrap items-center gap-3"
            >
              {item.technologies.map((technology, index) => (
                <li key={`${technology}-${index}`}>
                  <img
                    src={technology}
                    className="size-6"
                    alt=""
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default Education;
