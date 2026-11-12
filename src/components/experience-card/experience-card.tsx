import clsx from "clsx";
import { calculateDateDuration, getMonthYear } from "../../utils/date";
import Button from "../ui/button";
import Divider from "../ui/divider";
import { Check } from "../ui/icons";

interface ExperienceCardProps {
  locale: "en" | "es";
  experience: {
    title: string;
    company: string;
    initialDate: string;
    endDate: string;
    description: {
      subtitle: string;
      contributions: string[];
      technologies: string[];
    }[];
  };
}

const formatDuration = (
  startDate: string,
  endDate: string,
  locale: "en" | "es",
) => {
  const { years, months } = calculateDateDuration(startDate, endDate);
  const parts: string[] = [];

  if (years > 0) {
    parts.push(
      new Intl.NumberFormat(locale, {
        style: "unit",
        unit: "year",
        unitDisplay: "long",
      }).format(years),
    );
  }

  if (months > 0 || years === 0) {
    parts.push(
      new Intl.NumberFormat(locale, {
        style: "unit",
        unit: "month",
        unitDisplay: "long",
      }).format(months),
    );
  }

  return parts.join(", ");
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  locale,
}) => {
  console.log("ExperienceCard locale:", locale);
  const isCurrentExperience =
    !experience.endDate.trim() ||
    /^(present|actualidad|current|now)$/i.test(experience.endDate.trim());

  return (
    <article className="flex flex-col gap-5 rounded-sm bg-white p-6 dark:bg-secondary">
      <header className="flex flex-col gap-1">
        <div className="flex flex-wrap justify-between">
          <h3 className="text-lg text-secondary dark:text-white">
            {experience.title}ssdfsdf
          </h3>
          <span
            className={clsx(
              "inline-flex items-center gap-2 py-1 px-3 text-xs font-mono font-bold",
              isCurrentExperience
                ? "bg-primary/10 text-primary"
                : "bg-tertiary/20 text-tertiary",
            )}
          >
            {isCurrentExperience && (
              <span
                className="size-2 shrink-0 animate-pulse rounded-full bg-green-500 motion-reduce:animate-none"
                aria-hidden="true"
              />
            )}
            {getMonthYear(experience.initialDate, locale)} –{" "}
            {experience.endDate || (locale === "es" ? "ACTUALIDAD" : "PRESENT")}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <p className="font-bold text-primary">{experience.company}</p>
          <span aria-hidden="true">·</span>
          <p className="font-mono text-tertiary dark:text-white/70">
            {formatDuration(experience.initialDate, experience.endDate, locale)}
          </p>
        </div>
      </header>

      <Divider />

      {experience.description.map((detail, index) => (
        <section
          key={`${detail.subtitle}-${index}`}
          className="flex flex-col gap-4 mb-14"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h4 className="whitespace-nowrap text-base">
              {detail.subtitle}
            </h4>

          </div>

          <ul className="list-disc space-y-1 pl-5 text-sm text-tertiary dark:text-white/70">
            {detail.contributions.map((contribution, contributionIndex) => (
              <li key={`${contribution}-${contributionIndex}`}>
                {contribution}
              </li>
            ))}
          </ul>

          <Divider />

          <ul
            aria-label={`${detail.subtitle} technologies`}
            className="flex list-none flex-wrap gap-2"
          >
            {detail.technologies.map((technology, technologyIndex) => (
              <li
                key={`${technology}-${technologyIndex}`}
                className="rounded-xs bg-tertiary/10 px-3 py-1 font-mono text-xs text-secondary dark:bg-white/10 dark:text-white"
              >
                {technology}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  );
};

export default ExperienceCard;
