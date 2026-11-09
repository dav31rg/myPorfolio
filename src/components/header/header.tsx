import { useEffect, useRef, useState } from "react";
import hamburger from "../../assets/hamburger.svg";
import type { Locale } from "../../data/portfolio";
import Logo from "../ui/logo";

interface HeaderProps {
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
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-[1000] flex h-24 w-full items-center justify-end bg-[var(--background-color-light)]" ref={headerRef}>
      <Logo />
      <nav className="flex w-full items-center justify-end" aria-label={navigationLabel}>
        {/* Desktop navigation */}
        <ul className="m-0 mr-4 flex list-none justify-end gap-8 p-0 text-2xl max-lg:hidden">
          {info.map((item) => (
            <li key={item.id} className="cursor-pointer transition-transform hover:scale-110">
              <a href={getSectionHref(item.id)} className="block text-[var(--background-color-dark)] no-underline">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile navigation */}
        <div className="mr-4 flex items-center gap-4">
          <button
            type="button"
            className="cursor-pointer rounded border border-[var(--background-color-dark)] bg-transparent px-2 py-1 text-[var(--background-color-dark)]"
            aria-label={themeButtonLabel}
            onClick={onThemeChange}
          >
            {theme === "light" ? "☾" : "☀"}
          </button>
          <button
            type="button"
            className="cursor-pointer rounded border border-[var(--background-color-dark)] bg-transparent px-2 py-1 text-[var(--background-color-dark)]"
            aria-label={changeLanguageLabel}
            onClick={() => onLocaleChange(locale === "en" ? "es" : "en")}
          >
            {locale === "en" ? "ES" : "EN"}
          </button>
          <button
            type="button"
            onClick={handleMenuView}
            className="hidden cursor-pointer border-0 bg-transparent p-0 max-lg:block"
            aria-label={toggleMenuLabel}
            aria-expanded={isMenuOpen}
          >
            <img src={hamburger} alt="" width={24} height={24} />
          </button>
        </div>
        {isMenuOpen && (
          <ul className="absolute right-0 top-[4.6rem] hidden w-full list-none flex-col gap-4 bg-[var(--background-color-light)] p-4 max-lg:flex">
            {info.map((item) => (
              <li key={item.id} className="animate-[menu-in_180ms_ease_both] motion-reduce:animate-none">
                <a
                  href={getSectionHref(item.id)}
                  onClick={handleCloseMenu}
                  className="block cursor-pointer px-4 py-2 text-2xl text-[var(--background-color-dark)] no-underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
