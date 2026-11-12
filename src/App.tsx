import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { portfolioContent, type Locale } from "./data/portfolio";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Education from "./pages/education/education";
import Experience from "./pages/experience/experience";
import Hero from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";
import Projects from "./pages/projects/projects";
import Skills from "./pages/skills/skills";

function App() {
  const [locale, setLocale] = useState<Locale>("en");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const content = portfolioContent[locale];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <BrowserRouter>
      <Header
        logo={content.logo}
        info={content.header}
        locale={locale}
        onLocaleChange={setLocale}
        changeLanguageLabel={content.labels.changeLanguage}
        theme={theme}
        onThemeChange={() =>
          setTheme((current) => (current === "light" ? "dark" : "light"))
        }
        themeButtonLabel={
          theme === "light"
            ? content.labels.darkTheme
            : content.labels.lightTheme
        }
        navigationLabel={content.labels.navigation}
        toggleMenuLabel={content.labels.toggleMenu}
      />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero
                info={content.personal}
              />
              <About {...content.about} />
              <Skills info={content.skills} />
              <Projects info={content.projects} />
              <Experience info={content.experience} locale={locale} />
              <Education info={content.education} />
              <Contact info={content.contact} />
            </main>
          }
        />
        <Route path="*" element={<NotFound labels={content.labels} />} />
      </Routes>
      <Footer
        name={content.personal.name}
        socialMedia={content.personal.socialMedia}
        credit={content.footer.credit}
        description={content.footer.description}
        backToTop={content.footer.backToTop}
        navigationLabel={content.footer.navigationLabel}
      />
    </BrowserRouter>
  );
}

export default App;
