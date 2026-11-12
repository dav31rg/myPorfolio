import Badge from "../../components/ui/badge";
import Button from "../../components/ui/button";
import Card from "../../components/ui/card";
import { Chip, Code, Group } from "../../components/ui/icons";
import { calculateDateDuration } from "../../utils/date";

interface AboutProps {
  label: string;
  title: string;

  subtitle: string;
  description: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  timeExperience: {
    time: string;
    years: string;
    buttonLabel: string;
    buttonLink: string;
    title: string;
    description: string;
  };
}

const About: React.FC<AboutProps> = ({
  label,
  title,
  subtitle,
  description,
  timeExperience,
}) => {
  return (
    <div className="bg-secondary/5">
      <section
        id="about"
        className="layout flex flex-col w-full py-32 max-lg:py-8"
      >
        <Badge>{`01 / ${label.toUpperCase()}`}</Badge>
        <div className="flex flex-col gap-4 lg:gap-3 lg:flex-row">
          <h2 className="w-full lg:max-w-3/5 text-4xl font-semibold max-lg:text-3xl">
            {title}
          </h2>
          <p className="w-full max-w-3xl text-base text-tertiary lg:max-w-2/5">
            {subtitle}
          </p>
        </div>

        <div className="mt-12 grid w-full gap-4 md:grid-cols-3">
          {description.map((item, index) => (
            <Card
              key={index}
              icon={
                (item.icon === "electronics" && <Chip className="size-6" />) ||
                (item.icon === "code" && <Code className="size-6" />) ||
                (item.icon === "teamwork" && <Group className="size-6" />)
              }
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 p-8 rounded-lg border border-secondary/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
          <div>
            <h3 className="text-7xl font-bold text-primary">
              {calculateDateDuration(timeExperience.time).years}+
              <span className="font-sans text-3xl font-normal text-secondary dark:text-tertiary">
                {timeExperience.years}
              </span>
            </h3>
            <p className="font-mono text-tertiary">{timeExperience.title}</p>
            <span className="font-sans text-tertiary">
              {timeExperience.description}
            </span>
          </div>
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="md"
              href={`#${timeExperience.buttonLink}`}
            >
              {timeExperience.buttonLabel}
            </Button>
          </div>
        </div>
        <div className="block md:hidden mt-4 w-full">
          <Button
            variant="primary"
            size="md"
            href={`#${timeExperience.buttonLink}`}
          >
            {timeExperience.buttonLabel}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
