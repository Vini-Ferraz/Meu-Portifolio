import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { HeroRow } from "./components/HeroRow";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export function App() {
  return (
    <>
      <nav className="fundo-secundario fonte-cor-clara p-6 border-b-4	 border-b-teal-50	fixed w-full z-10">
        <NavBar />
      </nav>
      <main className="fundo-primario">
        <HeroRow />
        <Skills />
        <Projects />
        <AboutMe />
      </main>
    </>
  );
}
