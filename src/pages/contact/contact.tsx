import Badge from "../../components/ui/badge";
import Button from "../../components/ui/button";
import {
  Atline,
  GitHub,
  LinkedIn,
  Location,
  Mail,
} from "../../components/ui/icons";

interface ContactProps {
  info: {
    label: string;
    title: string;
    subtitle: string;
    titleCard: string;
    subtitlecard: string;
    availabilityLabel: string;
    emailLabel: string;
    email: string;
    locationLabel: string;
    location: string;
    timezone: string;
    networksLabel: string;
    github: string;
    linkedin: string;
  };
}

const Contact: React.FC<ContactProps> = ({ info }) => (
  <div>
    <section id="contact" className="layout py-32 max-lg:py-8">
      <Badge>06 / {info.label.toUpperCase()}</Badge>
      <h2 className="text-4xl font-semibold max-lg:text-3xl">{info.title}</h2>
      <p className="mt-1 max-w-3xl text-base text-tertiary">{info.subtitle}</p>

      <article className="mt-12 mb-48 rounded-sm bg-tertiary/10 p-6 dark:bg-secondary">
        <header className="flex flex-wrap-reverse items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xs bg-primary/10">
              <Atline className="size-5" />
            </span>
            <div>
              <h2 className="font-mono text-xs font-bold text-primary">
                {info.titleCard.toUpperCase()}
              </h2>
              <p className="text-lg text-secondary dark:text-white">
                {info.subtitlecard}
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 rounded-xs bg-white dark:bg-black px-3 py-1 text-xs font-mono text-tertiary">
            <span
              className="size-2 shrink-0 animate-pulse rounded-full bg-green-500 motion-reduce:animate-none"
              aria-hidden="true"
            />
            {info.availabilityLabel.toUpperCase()}
          </span>
        </header>

        <div className="mt-8 flex flex-col gap-6">
          <a
            href={`mailto:${info.email}`}
            className="bg-white dark:bg-tertiary/5 p-4 rounded-xs group flex flex-col items-start text-secondary no-underline dark:text-white"
          >
            <span className="flex gap-2" aria-hidden="true">
              <Mail className="size-4 text-primary" />
              <span className="mb-4 font-mono block text-xs text-tertiary font-bold">
                {info.emailLabel.toUpperCase()}
              </span>
            </span>
            <span className="break-all text-lg group-hover:text-primary">
              {info.email}
            </span>
          </a>

          <div className="bg-white dark:bg-tertiary/5 flex flex-col items-start p-4 text-secondary dark:text-white">
            <span className="flex gap-2" aria-hidden="true">
              <Location className="size-4 text-primary" />
              <span className="mb-4 font-mono block text-xs text-tertiary font-bold">
                {info.locationLabel.toUpperCase()}
              </span>
            </span>
            <span>
              <span className="block font-medium">{info.location}</span>
              <span className="block text-sm text-tertiary">
                {info.timezone}
              </span>
            </span>
          </div>
        </div>

        <div className="mt-8 border-t border-tertiary/15 pt-6 dark:border-white/15">
          <h3 className="font-mono text-xs font-bold text-tertiary">
            {info.networksLabel.toUpperCase()}
          </h3>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button
              href={info.github}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="sm"
              className="font-mono"
              leftIcon={<GitHub className="size-4" />}
            >
              GitHub
            </Button>
            <Button
              href={info.linkedin}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="sm"
              className="font-mono"
              leftIcon={<LinkedIn className="size-4" />}
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </article>
    </section>
  </div>
);

export default Contact;
