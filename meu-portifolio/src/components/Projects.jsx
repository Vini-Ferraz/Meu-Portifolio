/*Componente Projects*/
/*Este componente representa a seção de projetos na página. Ele exibe uma lista de projetos, cada um representado pelo componente Project.*/
import { Project } from "./Project";
import GeradorDeSenhaTelasDesktop from "../assets/images/gerador-de-senhas-telas-desktop.png";
import GeradorDeSenhaTelasTablet from "../assets/images/gerador-de-senhas-telas-tablet.png";
import GeradorDeSenhaTelasMobile from "../assets/images/gerador-de-senhas-telas-mobile.png";
import BussinesCardGeneratorDesktop from "../assets/images/bussines-card-generator-telas-desktop.png";
import BussinesCardGeneratorTablet from "../assets/images/bussines-card-generator-telas-tablet.png";
import BussinesCardGeneratorMobile from "../assets/images/bussines-card-generator-telas-mobile.png";
import WhosThatPokemonDesktop from "../assets/images/who's-that-pokémon-telas-desktop.png";
import WhosThatPokemonTablet from "../assets/images/who's-that-pokémon-telas-tablet.png";
import WhosThatPokemonMobile from "../assets/images/who's-that-pokémon-telas-mobile.png";
import NaturezaVivaDesktop from "../assets/images/natureza-viva-telas-desktop.png";
import NaturezaVivaTablet from "../assets/images/natureza-viva-telas-tablet.png";
import NaturezaVivaMobile from "../assets/images/natureza-viva-telas-mobile.png";

import CieAestheticsDesktop from "../assets/images/cie-aesthetics-telas-desktop.png";
import CieAestheticsTablet from "../assets/images/cie-aesthetics-telas-tablet.png";
import CieAestheticsMobile from "../assets/images/cie-aesthetics-telas-mobile.png";

export function Projects() {
  return (
    <section
      className="fonte-cor-clara md:flex md:flex-col pb-28 md:justify-around md:items-center"
      id="Projetos"
    >
      <h1 className="text-5xl font-bold pb-8 px-6 sm:px-14 sm:text-center md:text-left lg:px-24 :text-7xl">
        Projetos
      </h1>
      <p className="text-xl pb-8 px-6 sm:px-14 md:text-center md:text-left md:w-2/3">
        Confira alguns dos projetos recentes que demonstrei minhas habilidades e
        paixão pelo desenvolvimento front-end.
      </p>
      <Project
        name="Gerador de Senhas Aleatórias 🔐"
        description="Entre no mundo da segurança digital com nosso Gerador de Senhas Aleatórias. Essa ferramenta interativa não apenas cria senhas robustas e personalizadas, mas também fortalece sua proteção online. Com opções flexíveis de personalização e uma interface intuitiva, agora você pode garantir a segurança dos seus dados com facilidade e confiança."
        technology="Tecnologias Utilizadas:  HTML, CSS, JavaScript"
        demoLink="https://vini-ferraz.github.io/geradorDeSenhas/"
        codeLink="https://github.com/Vini-Ferraz/geradorDeSenhas"
        imageSmartPhone={GeradorDeSenhaTelasMobile}
        imageTablets={GeradorDeSenhaTelasTablet}
        imageDesktops={GeradorDeSenhaTelasDesktop}
      />
      <Project
        name="Gerador de Business Card 🪪"
        description="Crie cartões de visita digitais personalizados com o Gerador de Business Card. Esta aplicação interativa, desenvolvida com React e html2canvas, permite aos usuários inserir informações pessoais e profissionais e visualizar as alterações em tempo real. Com a funcionalidade de download integrada, os usuários podem facilmente salvar e utilizar seus cartões de visita personalizados."
        technology="Tecnologias Utilizadas:  React, html2canvas"
        demoLink="https://vini-ferraz.github.io/bussinesCardGenerator/"
        codeLink="https://github.com/Vini-Ferraz/bussinesCardGenerator"
        imageSmartPhone={BussinesCardGeneratorMobile}
        imageTablets={BussinesCardGeneratorTablet}
        imageDesktops={BussinesCardGeneratorDesktop}
      />
      <Project
        name="Who's that Pokémon?!⚡"
        description="Desafie suas habilidades de reconhecimento de Pokémon com o Who's that Pokémon?! Este jogo interativo, desenvolvido com React e consumindo a API PokeAPI, oferece três níveis de dificuldade e um tempo limite para adivinhar o Pokémon. No final de cada jogo, os usuários podem ver sua pontuação atual e a melhor pontuação alcançada, e têm a opção de jogar novamente para aprimorar suas habilidades e conhecimentos sobre Pokémon."
        technology="Tecnologias Utilizadas: React, Tailwind CSS"
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
        description="Explore o encanto do artesanato com o Cie Aesthetics, um site institucional que captura a beleza e a singularidade de peças artesanais feitas à mão. Desenvolvido para uma amiga empreendedora, este site é uma vitrine online que apresenta produtos únicos e feitos com carinho. Otimizado para SEO e integrado com a biblioteca Swiper, proporciona uma experiência de navegação suave e encantadora para os visitantes."
        technology="Tecnologias Utilizadas:  HTML, CSS, JavaScript (Swiper)"
        demoLink="https://vini-ferraz.github.io/Cie-Aesthetics/"
        codeLink="https://github.com/Vini-Ferraz/Cie-Aesthetics"
        imageSmartPhone={CieAestheticsMobile}
        imageTablets={CieAestheticsTablet}
        imageDesktops={CieAestheticsDesktop}
      />
    </section>
  );
}
