export const scrollToSection = (sectionId: string): void => {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
    block: "start",
  });
};
