import { useEffect, useRef, useState } from "react";
import type { Locale } from "../../data/portfolio";
import Button from "../ui/button";
import { Globe, Hamburger, Moon, Sun } from "../ui/icons";
import Logo from "../ui/logo";

interface HeaderProps {
  logo: {
    initials: string;
    name: string;
    role: string;
  };
  info: Array<{ id: string; label: string }>;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  changeLanguageLabel: string;
  navigationLabel: string;
  toggleMenuLabel: string;
  theme: "light" | "dark";
  onThemeChange: () => void;
  themeButtonLabel: string;
}

const Header: React.FC<HeaderProps> = ({
  logo,
  info,
  locale,
  onLocaleChange,
  changeLanguageLabel,
  navigationLabel,
  toggleMenuLabel,
  theme,
  onThemeChange,
  themeButtonLabel,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const handleMenuView = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const getSectionHref = (id: string) => `/#${id}`;

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-secondary/10 bg-(--header-background) shadow-sm dark:border-white/10"
      ref={headerRef}
    >
      <div className="mx-auto flex h-24 w-full max-w-[1200px] items-center justify-between px-[clamp(1rem,4vw,3rem)]">
        <Logo initials={logo.initials} name={logo.name} role={logo.role} />
        <nav
          className="flex flex-1 items-center justify-center"
          aria-label={navigationLabel}
        >
          {/* Desktop navigation */}
          <ul className="m-0 flex list-none p-0 max-lg:hidden">
            {info.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer transition-transform hover:scale-110 "
              >
                <Button
                  href={getSectionHref(item.id)}
                  variant="ghost"
                  size="sm"
                  className="font-sans font-semibold"
                >
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <ul className="absolute right-0 top-[4.6rem] hidden w-full list-none flex-col gap-4 bg-(--header-background) p-4 max-lg:flex">
              {info.map((item) => (
                <li
                  key={item.id}
                  className="animate-[menu-in_180ms_ease_both] motion-reduce:animate-none"
                >
                  <Button
                    href={getSectionHref(item.id)}
                    onClick={handleCloseMenu}
                    variant="ghost"
                    size="md"
                    className="w-full justify-start"
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </nav>
        <div className="flex items-center gap-1">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={themeButtonLabel}
            onClick={onThemeChange}
          >
            {theme === "light" ? (
              <Moon className="size-6" />
            ) : (
              <Sun className="size-6" />
            )}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={changeLanguageLabel}
            onClick={() => onLocaleChange(locale === "en" ? "es" : "en")}
          >
            <Globe className="size-6" />
          </Button>
          <Button
            type="button"
            onClick={handleMenuView}
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label={toggleMenuLabel}
            aria-expanded={isMenuOpen}
          >
            <Hamburger className="size-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
