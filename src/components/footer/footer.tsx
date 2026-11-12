import Button from "../ui/button";
import { ArrowUp, GitHub, LinkedIn } from "../ui/icons";

interface FooterProps {
  name: string;
  socialMedia: Array<{ icon: string; value: string }>;
  credit: string;
  description: string;
  backToTop: string;
  navigationLabel: string;
}

const Footer: React.FC<FooterProps> = ({
  name,
  socialMedia,
  credit,
  description,
  backToTop,
  navigationLabel,
}) => (
  <footer className="border-t border-tertiary/15 bg-white dark:border-white/10 dark:bg-secondary">
    <div className="layout flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center">
      <p className="text-sm text-tertiary">
        <span className="font-mono text-secondary dark:text-white">
          {credit.toLocaleUpperCase()} {name.toUpperCase()}
        </span>
        <span className="mx-2" aria-hidden="true">
          —
        </span>
        <span>{description}</span>
      </p>

      <nav
        aria-label={navigationLabel}
        className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
      >
        {socialMedia.map((social) => {
          const isLinkedIn = social.icon === "linkedin";
          const SocialIcon = isLinkedIn ? LinkedIn : GitHub;
          const href = social.value.startsWith("http")
            ? social.value
            : `https://${social.value}`;

          return (
            <Button
              key={social.icon}
              href={href}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              size="sm"
              className="font-mono"
              leftIcon={<SocialIcon className="size-4" />}
            >
              {isLinkedIn ? "LinkedIn" : "GitHub"}
            </Button>
          );
        })}
        <Button
          href="#home"
          variant="ghost"
          size="sm"
          className="font-mono"
          rightIcon={<ArrowUp className="size-4" />}
        >
          {backToTop}
        </Button>
      </nav>
    </div>
  </footer>
);

export default Footer;
