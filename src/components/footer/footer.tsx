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
}) => {
  const handleBackToTop = () => {
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`,
    );
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <footer className="border-t border-tertiary/15 bg-white dark:border-white/10 dark:bg-secondary">
      <div className="layout flex flex-wrap items-center justify-center gap-3 py-8">
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
          className="flex gap-10"
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
                aria-label={isLinkedIn ? "LinkedIn" : "GitHub"}
                variant="ghost"
                size="sm"
                className="font-mono"
                leftIcon={<SocialIcon className="size-5" />}
              >
                <span className="hidden sm:inline">
                  {isLinkedIn ? "LinkedIn" : "GitHub"}
                </span>
              </Button>
            );
          })}
          <Button
            type="button"
            onClick={handleBackToTop}
            variant="ghost"
            size="sm"
            className="font-mono "
            rightIcon={<ArrowUp className="size-5" />}
          >
            <span className="hidden sm:inline whitespace-nowrap">{backToTop}</span>
          </Button>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
