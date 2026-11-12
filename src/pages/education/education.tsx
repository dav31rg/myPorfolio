import Badge from "../../components/ui/badge";
import { Academic, Book, Medal } from "../../components/ui/icons";
import clsx from "clsx";

interface EducationProps {
  info: {
    label: string;
    title: string;
    subtitle: string;
    educationDetail: {
      title: string;
      company: string;
      date: string;
      description: {
        title: string;
        description: string;
        border?: boolean;
      }[];
    }[];
  };
}

const educationIcons = {
  "Academic Education": Academic,
  "Specialized Training": Medal,
  "Continuous Learning": Book,
  "Formación académica": Academic,
  "Formación especializada": Medal,
  "Aprendizaje continuo": Book,
};

const Education: React.FC<EducationProps> = ({ info }) => {
  const getIconComponent = (category: string) => {
    const IconComponent =
      educationIcons[category as keyof typeof educationIcons];

    return IconComponent ? <IconComponent className="size-5" /> : null;
  };

  return (
    <div className="bg-secondary/5">
      <section id="education" className="layout py-32 max-lg:py-8">
        <Badge>05 / {info.label.toUpperCase()}</Badge>
        <h2 className="text-4xl font-semibold max-lg:text-3xl">{info.title}</h2>
        <p className="mt-1 max-w-3xl text-base text-tertiary">
          {info.subtitle}
        </p>

        <div className="mt-12 flex w-full flex-wrap gap-5">
          {info.educationDetail.map((item) => (
            <article
              key={`${item.company}-${item.date}`}
              className="min-w-62.5 flex flex-1 flex-col gap-5 rounded-lg bg-white p-6 shadow-sm dark:bg-secondary"
            >
              <header className="flex flex-col items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xs bg-primary/10 text-primary">
                  {getIconComponent(item.title)}
                </span>
                <div>
                  <p className="font-mono text-xs font-bold text-primary">
                    {item.title.toUpperCase()}
                  </p>
                  <p className="font-sans text-base text-secondary dark:text-white">
                    {item.company}
                  </p>
                  <p className="text-xs font-semibold text-tertiary dark:text-white/70">
                    {item.date}
                  </p>
                </div>
              </header>
              <div className="flex flex-col gap-4 text-sm text-tertiary dark:text-white/70">
                {item.description.map((detail, index) => (
                  <div
                    key={`${detail.title}-${index}`}
                    className={clsx(
                      "rounded-sm",
                      detail.border && "p-3 bg-secondary/5 dark:bg-white/5",
                    )}
                  >
                    <h4 className="font-semibold text-secondary dark:text-white">
                      {detail.title}
                    </h4>
                    <p className="whitespace-pre-line">{detail.description}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
