/*Componente NavBar*/
/*Este componente representa a barra de navegação da página. Ele exibe o nome do autor e os itens do menu de navegação.*/
import { useState } from "react";
import { SocialMedias } from "./SocialMedias";
import { IconeMenu } from "../assets/icons/menu";
import logo from "../assets/images/favIconPortifolio.webp";
export function NavBar({ screenWidth }) {
  // Estado para controlar o estado de exibição do menu móvel
  const [handleClick, setHandleClick] = useState(false);
  //Função para alternar o estado de exibição do menu móvel
  function switcher(handleClick) {
    if (handleClick) {
      setHandleClick(false);
    } else {
      setHandleClick(true);
    }
  }
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="text-3xl drop-shadow-md font-bold	 tracking-wider lg:text-4xl">
          <a href="#">
            <img
              src={logo}
              alt="ilustração de um alien verde minimalista"
              className="w-20"
            />
          </a>
        </p>
        {
          //Renderização condicional: exibe o botão do menu móvel se a largura da tela for inferior a 900 pixels
          screenWidth < 900 ? (
            <button onClick={() => switcher(handleClick)}>
              <IconeMenu />
            </button>
          ) : (
            <>
              <div className="py-5">
                <ul className="flex text-2xl" id="itens-menu-navbar">
                  <li className="pr-7">
                    <a href="#Habilidades" className="menuItens">
                      Habilidades
                    </a>
                  </li>
                  <li className="pr-7">
                    <a href="#Projetos" className="menuItens">
                      Projetos
                    </a>
                  </li>
                  <li>
                    <a href="#Sobre-Mim" className="menuItens">
                      Sobre mim
                    </a>
                  </li>
                </ul>
              </div>
              <SocialMedias />
            </>
          )
        }
      </div>
      {
        //Renderização condicional: exibe o menu móvel se handleClick for true
        handleClick == false ? null : (
          <div className="py-5">
            <ul className="flex flex-col text-2xl" id="itens-menu-navbar">
              <li className="pb-5" onClick={() => switcher(handleClick)}>
                <a href="#Habilidades">Habilidades</a>
              </li>
              <li className="pb-5">
                <a href="#Projetos" onClick={() => switcher(handleClick)}>
                  Projetos
                </a>
              </li>
              <li>
                <a href="#Sobre-Mim" onClick={() => switcher(handleClick)}>
                  Sobre mim
                </a>
              </li>
            </ul>
          </div>
        )
      }
    </>
  );
}
