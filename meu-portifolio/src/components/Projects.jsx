/*Componente Projects*/
/*Este componente representa a seção de projetos na página. Ele exibe uma lista de projetos, cada um representado pelo componente Project.*/
import { Project } from "./Project";
import GeradorDeSenhaTelasDesktop from "../assets/images/gerador-de-senhas-telas-desktop.webp";
import GeradorDeSenhaTelasTablet from "../assets/images/gerador-de-senhas-telas-tablet.webp";
import GeradorDeSenhaTelasMobile from "../assets/images/gerador-de-senhas-telas-mobile.webp";
import BussinesCardGeneratorDesktop from "../assets/images/bussines-card-generator-telas-desktop.webp";
import BussinesCardGeneratorTablet from "../assets/images/bussines-card-generator-telas-tablet.webp";
import BussinesCardGeneratorMobile from "../assets/images/bussines-card-generator-telas-mobile.webp";
import WhosThatPokemonDesktop from "../assets/images/who's-that-pokémon-telas-desktop.webp";
import WhosThatPokemonTablet from "../assets/images/who's-that-pokémon-telas-tablet.webp";
import WhosThatPokemonMobile from "../assets/images/who's-that-pokémon-telas-mobile.webp";
import NaturezaVivaDesktop from "../assets/images/natureza-viva-telas-desktop.webp";
import NaturezaVivaTablet from "../assets/images/natureza-viva-telas-tablet.webp";
import NaturezaVivaMobile from "../assets/images/natureza-viva-telas-mobile.webp";
import CieAestheticsDesktop from "../assets/images/cie-aesthetics-telas-desktop.webp";
import CieAestheticsTablet from "../assets/images/cie-aesthetics-telas-tablet.webp";
import CieAestheticsMobile from "../assets/images/cie-aesthetics-telas-mobile.webp";

export function Projects({ screenWidth }) {
  return (
    <section
      className="fonte-cor-clara pb-28 md:justify-around md:items-center"
      id="Projetos"
    >
      <h1 className="text-5xl font-bold pb-8 px-6 sm:text-center lg:text-7xl">
        Projetos
      </h1>

      <swiper-container
        pagination="true"
        speed="500"
        loop="true"
        autoplay-delay="5000"
      >
        <Project
          name="Gerador de Senhas Aleatórias 🔐"
          description="Ferramenta interativa que cria senhas robustas e personalizadas, fortalecendo sua proteção online. Oferece opções flexíveis de personalização e possui uma interface intuitiva para garantir a segurança dos seus dados com facilidade e confiança."
          technology="Tecnologias Utilizadas:  HTML, CSS, JavaScript"
          demoLink="https://vini-ferraz.github.io/geradorDeSenhas/"
          codeLink="https://github.com/Vini-Ferraz/geradorDeSenhas"
          imageSmartPhone={GeradorDeSenhaTelasMobile}
          imageTablets={GeradorDeSenhaTelasTablet}
          imageDesktops={GeradorDeSenhaTelasDesktop}
        />
        <Project
          name="Gerador de Business Card 🪪"
          description="Aplicação interativa desenvolvida com React e html2canvas para criar cartões de visita digitais personalizados. Permite inserir informações e visualizar alterações em tempo real, com funcionalidade de download integrada para fácil salvamento e uso dos cartões."
          technology="Tecnologias Utilizadas:  React, html2canvas"
          demoLink="https://vini-ferraz.github.io/bussinesCardGenerator/"
          codeLink="https://github.com/Vini-Ferraz/bussinesCardGenerator"
          imageSmartPhone={BussinesCardGeneratorMobile}
          imageTablets={BussinesCardGeneratorTablet}
          imageDesktops={BussinesCardGeneratorDesktop}
        />
        <Project
          name="Who's that Pokémon?!⚡"
          description="Jogo interativo desenvolvido com React, utilizando a API PokeAPI. Oferece três níveis de dificuldade e um tempo limite para adivinhar o Pokémon. Exibe a pontuação atual e a melhor pontuação ao final de cada jogo, com a opção de jogar novamente para aprimorar habilidades e conhecimentos sobre Pokémon."
          demoLink="https://vini-ferraz.github.io/whosThatPokemon/"
          codeLink="https://github.com/Vini-Ferraz/whosThatPokemon"
          imageSmartPhone={WhosThatPokemonMobile}
          imageTablets={WhosThatPokemonTablet}
          imageDesktops={WhosThatPokemonDesktop}
        />

        <Project
          name="Natureza Viva 🍃"
          description="Este site, criado para uma empresa fictícia de turismo ecológico chamada 'Natureza Viva', é um convite para descobrir a exuberância da natureza. Com designs inspiradores e uma abordagem visualmente cativante, transportamos os visitantes para destinos eco-amigáveis ao redor do mundo."
          technology="Tecnologias Utilizadas: HTML, Bootstrap, CSS"
          demoLink="https://vini-ferraz.github.io/Natureza-Viva/"
          codeLink="https://github.com/Vini-Ferraz/Natureza-Viva"
          imageSmartPhone={NaturezaVivaMobile}
          imageTablets={NaturezaVivaTablet}
          imageDesktops={NaturezaVivaDesktop}
        />

        <Project
          name="Cie Aesthetics 💍"
          description="Site institucional que exibe peças artesanais feitas à mão, desenvolvido para uma amiga empreendedora. Otimizado para SEO e integrado com a biblioteca Swiper, oferece uma experiência de navegação suave e encantadora, destacando a beleza e a singularidade dos produtos."
          technology="Tecnologias Utilizadas:  HTML, CSS, JavaScript (Swiper)"
          demoLink="https://vini-ferraz.github.io/Cie-Aesthetics/"
          codeLink="https://github.com/Vini-Ferraz/Cie-Aesthetics"
          imageSmartPhone={CieAestheticsMobile}
          imageTablets={CieAestheticsTablet}
          imageDesktops={CieAestheticsDesktop}
        />
      </swiper-container>
    </section>
  );
}
