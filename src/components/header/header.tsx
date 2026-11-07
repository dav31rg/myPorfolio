import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import hamburger from "../../assets/hamburger.svg";
import styles from "./header.module.css";
import type { Locale } from "../../data/portfolio";

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
    <header className={styles.light} ref={headerRef}>
      <nav aria-label={navigationLabel}>
        {/* Desktop navigation */}
        <ul className={styles.list}>
          {info.map((item) => (
            <motion.li
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", damping: 5, stiffness: 100 }}
              key={item.id}
            >
              <a href={getSectionHref(item.id)} className={styles.navLink}>
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile navigation */}
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.languageButton}
            aria-label={themeButtonLabel}
            onClick={onThemeChange}
          >
            {theme === "light" ? "☾" : "☀"}
          </button>
          <button
            type="button"
            className={styles.languageButton}
            aria-label={changeLanguageLabel}
            onClick={() => onLocaleChange(locale === "en" ? "es" : "en")}
          >
            {locale === "en" ? "ES" : "EN"}
          </button>
          <button
            type="button"
            onClick={handleMenuView}
            className={styles.mobile}
            aria-label={toggleMenuLabel}
            aria-expanded={isMenuOpen}
          >
            <img src={hamburger} alt="" width={24} height={24} />
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              className={styles.menuMobile}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {info.map((item) => (
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", damping: 5, stiffness: 100 }}
                  key={item.id}
                >
                  <a
                    href={getSectionHref(item.id)}
                    onClick={handleCloseMenu}
                    className={styles.navLink}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
