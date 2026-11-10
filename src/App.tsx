import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { portfolioContent, type Locale } from "./data/portfolio";
import About from "./pages/about/about";
import Experience from "./pages/experience/experience";
import Hero from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";
import Portfolio from "./pages/projects/projects";

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
              <Experience info={content.experience} labels={content.labels} />
              <Portfolio
                info={content.projects}
                title={content.labels.projects}
                theme={theme}
              />
            </main>
          }
        />
        <Route path="*" element={<NotFound labels={content.labels} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
