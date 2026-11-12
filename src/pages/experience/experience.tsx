import ExperienceCard from "../../components/experience-card/experience-card";
import Badge from "../../components/ui/badge";
import Button from "../../components/ui/button";
import { Check, Information } from "../../components/ui/icons";

interface WorkExperience {
  title: string;
  company: string;
  initialDate: string;
  endDate: string;
  description: {
    subtitle: string;
    contributions: string[];
    technologies: string[];
  }[];
}

interface ExperienceProps {
  locale: "en" | "es";
  info: {
    label: string;
    title: string;
    subtitle: string;
    leadRecommendation: string;
    work: WorkExperience[];
  };
}

const Experience: React.FC<ExperienceProps> = ({ info, locale }) => {
  console.log("Experience page locale:", locale);

  return (
    <div>
      <section id="experience" className="layout py-32 max-lg:py-8">
        <Badge>04 / {info.label.toUpperCase()}</Badge>
        <h2 className="text-4xl font-semibold max-lg:text-3xl">{info.title}</h2>
        <p className="mt-1 max-w-3xl text-base text-tertiary">
          {info.subtitle}
        </p>

        <div className="mt-12 flex w-full flex-col gap-5">
          {info.work.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${experience.initialDate}-${index}`}
              experience={experience}
              locale={locale}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-between p-8 bg-secondary/5 mt-10">
          <div className="flex flex-wrap gap-4">
            <div className="size-10 flex shrink-0 items-center justify-center bg-secondary/3 rounded-xs">
              <Information className="size-5 text-primary" />
            </div>

            <div>
              <div className="flex flex-wrap font-mono text-xs gap-2">
                <p className="font-bold text-primary">
                  {locale === "en"
                    ? "LINKEDIN RECOMMENDATIONS"
                    : "RECOMENDACIONES DE LINKEDIN"}
                </p>
                <span aria-hidden="true">·</span>
                <p>
                  {locale === "en"
                    ? "Experiences shared by people I've had the opportunity to work with."
                    : "Experiencias compartidas por quienes trabajaron conmigo."}
                </p>
              </div>
              <p className="font-semibold">
                {
                  locale === "en"
                  ? "Here's what my colleagues and technical leads have to say about working with me."
                  : "Así describen mi trabajo las personas con las que he colaborado."
                }
              </p>
            </div>
          </div>

          <Button
            href={info.leadRecommendation}
            target="_blank"
            rel="noreferrer"
            variant="primary"
            size="sm"
            className="font-mono font-bold text-xs"
            leftIcon={<Check className="size-4" />}
          >
            {locale === "es"
              ? "Mira lo que dijo mi jefe"
              : "See what my manager said"}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Experience;
