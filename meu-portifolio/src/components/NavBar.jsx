import { useState } from "react";
import { SocialMedias } from "./SocialMedias";

export function NavBar({ screenWidth }) {
  const [handleClick, setHandleClick] = useState(false);
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
        <p className="text-3xl drop-shadow-md black tracking-wider lg: text-4xl">
          <a href="#">Vini Ferraz</a>
        </p>
        {screenWidth < 900 ? (
          <button onClick={() => switcher(handleClick)}>
            <img src="menu.svg" alt="icone menu" className="h-12" />
          </button>
        ) : (
          <>
            <div className="py-5">
              <ul className="flex text-2xl" id="itens-menu-navbar">
                <li className="pr-5">
                  <a href="#Habilidades">Habilidades</a>
                </li>
                <li className="pr-5">
                  <a href="#Projetos">Projetos</a>
                </li>
                <li>
                  <a href="#Sobre-Mim">Sobre mim</a>
                </li>
              </ul>
            </div>
            <SocialMedias />
          </>
        )}
      </div>
      {handleClick == false ? null : (
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
      )}
    </>
  );
}
