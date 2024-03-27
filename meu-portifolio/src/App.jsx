/*Componente App*/
/*Este componente é o componente principal da aplicação. Ele controla o estado do tamanho da tela e renderiza os diferentes componentes da página, como NavBar, HeroRow, Skills, Projects, AboutMe e Footer.*/
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { HeroRow } from "./components/HeroRow";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export function App() {
  // Estado para controlar a largura da tela
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // Função para atualizar a largura da tela quando a janela é redimensionada
  function getScreenWidth() {
    setScreenWidth(window.innerWidth);
  }
  useEffect(() => {
    // Adiciona um event listener para monitorar as mudanças de tamanho da tela
    window.addEventListener("resize", getScreenWidth);
  });

  return (
    <>
      <nav className="fundo-secundario fonte-cor-clara p-6 border-b-4 border-b-teal-50 fixed w-full z-10 sm:px-14 lg:px-24">
        <NavBar screenWidth={screenWidth} />
      </nav>
      <main className="fundo-primario">
        <HeroRow screenWidth={screenWidth} />
        <Skills />
        <Projects />
        <AboutMe />
      </main>
      <footer className="fundo-secundario py-6">
        <Footer />
      </footer>
    </>
  );
}
