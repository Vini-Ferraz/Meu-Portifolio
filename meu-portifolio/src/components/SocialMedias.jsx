/*Componente SocialMedias*/
/*Este componente representa uma lista de ícones de redes sociais, com efeitos de hover para destacar os ícones quando o mouse passa sobre eles.*/
import { useState } from "react";

export function SocialMedias() {
  //Estados para controlar os efeitos de hover dos ícones
  const [handleHoverGH, setHandleHoverGH] = useState(false);
  const [handleHoverLI, setHandleHoverLI] = useState(false);
  const [handleHoverIG, setHandleHoverIG] = useState(false);
  return (
    <ul className="flex" id="icone-menu-navbar">
      <li>
        <a
          href="https://github.com/Vini-Ferraz"
          target="_blank"
          className="icone"
          onMouseOver={() => setHandleHoverGH(true)}
          onMouseLeave={() => setHandleHoverGH(false)}
        >
          {handleHoverGH == true ? (
            <img
              src="github-hover.svg"
              alt="Icone GitHub"
              className="icone w-10"
            />
          ) : (
            <img src="github.svg" alt="Icone GitHub" className="icone w-10" />
          )}
        </a>
      </li>
      <li className="px-7">
        <a
          href="https://www.linkedin.com/in/vin%C3%ADcius-augusto-de-almeida-ferraz-5038022a0/"
          target="_blank"
          onMouseOver={() => setHandleHoverLI(true)}
          onMouseLeave={() => setHandleHoverLI(false)}
        >
          {handleHoverLI == true ? (
            <img
              src="linkedin-hover.svg"
              alt="Icone LinkedIn"
              className="icone w-10"
            />
          ) : (
            <img
              src="linkedin.svg"
              alt="Icone LinkedIn"
              className="icone w-10"
            />
          )}
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/viniferraz72/"
          target="_blank"
          onMouseOver={() => setHandleHoverIG(true)}
          onMouseLeave={() => setHandleHoverIG(false)}
        >
          {handleHoverIG == true ? (
            <img
              src="instagram-hover.svg"
              alt="Icone Instagram"
              className="icone w-10"
            />
          ) : (
            <img
              src="instagram.svg"
              alt="Icone Instagram"
              className="icone w-10"
            />
          )}
        </a>
      </li>
    </ul>
  );
}
