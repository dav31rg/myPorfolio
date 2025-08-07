import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import hamburger from "../../assets/hamburger.svg";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

interface HeaderProps {
  info: string[];
}

const Header: React.FC<HeaderProps> = ({ info }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);

  const handelMenuView = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const getRouterPath = (item: string) => (item === "home" ? "/" : `/${item}`);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <section className={styles.light}>
      {/* Desktop View */}
      <ul className={styles.list}>
        {info.map((item, index) => {
          return (
            <motion.li
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", damping: 5, stiffness: 100 }}
              key={index}
            >
              <Link to={getRouterPath(item)} className={styles.navLink}>
                {item}
              </Link>
            </motion.li>
          );
        })}
      </ul>

      {/* Mobile View */}
      <div
        onClick={handelMenuView}
        className={styles.mobile}
        role="button"
        aria-label="Toggle menu"
      >
        <img src={hamburger} alt="hamburguer" width={24} height={24} />
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            className={styles.menuMobile}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            ref={menuRef}
          >
            {info.map((item, index) => (
              <Link
                  to={getRouterPath(item)}
                  onClick={handleCloseMenu}
                  className={styles.navLink}
                >
              <motion.li
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", damping: 5, stiffness: 100 }}
                key={index}
              >
              </motion.li>
                  {item}
                </Link>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Header;
