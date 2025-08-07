import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import NotFound from "./components/notFound/notFound";
import Portfolio from "./components/portfolio/portfolio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { info } from "./utils/info";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header info={info.header} />
      <Routes>
        <Route path="/" element={<Hero info={info.personal} />} />
        <Route path="/about" element={<About info={info.about} />} />
        <Route
          path="/experience"
          element={<Experience info={info.experience} />}
        />
        <Route path="/projects" element={<Portfolio info={info.projects} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
