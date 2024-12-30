/*Componente Projects*/
/*Este componente representa a seção de projetos na página. Ele exibe uma lista de projetos, cada um representado pelo componente Project.*/
import { Project } from "./Project";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
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
  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters

    const params = {
      effect: "coverflow",
      pagination: {
        clickable: true,
      },
      speed: 750,
      loop: true,
      navigation: true,
      autoplay: {
        delay: 7000,
        pauseOnMouseEnter: true,
      },
    };

    const paramsMobile = {
      speed: 750,
      loop: true,
      autoplay: {
        delay: 7000,
      },
    };

    if (screenWidth > 425) {
      Object.assign(swiperRef.current, params);
    } else {
      Object.assign(swiperRef.current, paramsMobile);
    }

    // initialize swiper
    swiperRef.current.initialize();
  });
  return (
    <section
      className="fonte-cor-clara pb-28 md:justify-around md:items-center"
      id="Projetos"
    >
      <h1 className="text-5xl font-bold px-6 sm:text-center lg:text-7xl">
        Projects
      </h1>

      <swiper-container init="false" ref={swiperRef}>
        <Project
          name="Random Password Generator 🔐"
          description="Interactive tool that creates strong and personalized passwords, enhancing your online protection. Offers flexible customization options and has an intuitive interface to ensure the security of your data with ease and confidence."
          technology="Technologies Used: HTML, CSS, JavaScript"
          demoLink="https://vini-ferraz.github.io/geradorDeSenhas/"
          codeLink="https://github.com/Vini-Ferraz/geradorDeSenhas"
          imageSmartPhone={GeradorDeSenhaTelasMobile}
          imageTablets={GeradorDeSenhaTelasTablet}
          imageDesktops={GeradorDeSenhaTelasDesktop}
        />
        <Project
          name="Business Card Generator 🪪"
          description="Interactive application developed with React and html2canvas to create personalized digital business cards. Allows you to enter information and view changes in real-time, with integrated download functionality for easy saving and use of the cards."
          technology="Technologies Used: React, html2canvas"
          demoLink="https://vini-ferraz.github.io/bussinesCardGenerator/"
          codeLink="https://github.com/Vini-Ferraz/bussinesCardGenerator"
          imageSmartPhone={BussinesCardGeneratorMobile}
          imageTablets={BussinesCardGeneratorTablet}
          imageDesktops={BussinesCardGeneratorDesktop}
        />
        <Project
          name="Who's that Pokémon?!⚡"
          description="Interactive game developed with React, using the PokeAPI. Offers three difficulty levels and a time limit to guess the Pokémon. Displays the current score and the best score at the end of each game, with the option to play again to improve skills and knowledge about Pokémon."
          technology="Technologies Used: React, RESTful API, Tailwind"
          demoLink="https://vini-ferraz.github.io/whosThatPokemon/"
          codeLink="https://github.com/Vini-Ferraz/whosThatPokemon"
          imageSmartPhone={WhosThatPokemonMobile}
          imageTablets={WhosThatPokemonTablet}
          imageDesktops={WhosThatPokemonDesktop}
        />

        <Project
          name="Natureza Viva 🍃"
          description="This website, created for a fictional eco-tourism company called 'Natureza Viva', is an invitation to discover the exuberance of nature. With inspiring designs and a visually captivating approach, we transport visitors to eco-friendly destinations around the world."
          technology="Technologies Used: HTML, Bootstrap, CSS"
          demoLink="https://vini-ferraz.github.io/Natureza-Viva/"
          codeLink="https://github.com/Vini-Ferraz/Natureza-Viva"
          imageSmartPhone={NaturezaVivaMobile}
          imageTablets={NaturezaVivaTablet}
          imageDesktops={NaturezaVivaDesktop}
        />

        <Project
          name="Cie Aesthetics 💍"
          description="Institutional website showcasing handmade artisanal pieces, developed for an entrepreneurial friend. Optimized for SEO and integrated with the Swiper library, it offers a smooth and delightful browsing experience, highlighting the beauty and uniqueness of the products."
          technology="Technologies Used: HTML, CSS, JavaScript (Swiper)"
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
