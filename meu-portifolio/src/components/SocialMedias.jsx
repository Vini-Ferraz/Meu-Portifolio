/*Componente SocialMedias*/
/*Este componente representa uma lista de ícones de redes sociais, com efeitos de hover para destacar os ícones quando o mouse passa sobre eles.*/
import { useState } from "react";
import { IconeGithub } from "../assets/icons/github.jsx";
import { IconeGithubHover } from "../assets/icons/github-hover.jsx";
import { IconeLinkedIn } from "../assets/icons/linkedin.jsx";
import { IconeLinkedInHover } from "../assets/icons/linkedin-hover.jsx";
import { IconeInstagram } from "../assets/icons/instagram.jsx";
import { IconeInstagramHover } from "../assets/icons/instagram-hover.jsx";
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
          {handleHoverGH == false ? <IconeGithub /> : <IconeGithubHover />}
        </a>
      </li>
      <li className="px-7">
        <a
          href="https://www.linkedin.com/in/vini-ferraz/"
          target="_blank"
          onMouseOver={() => setHandleHoverLI(true)}
          onMouseLeave={() => setHandleHoverLI(false)}
        >
          {handleHoverLI == false ? <IconeLinkedIn /> : <IconeLinkedInHover />}
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/vini_ferraz_sites/"
          target="_blank"
          onMouseOver={() => setHandleHoverIG(true)}
          onMouseLeave={() => setHandleHoverIG(false)}
        >
          {handleHoverIG == false ? (
            <IconeInstagram />
          ) : (
            <IconeInstagramHover />
          )}
        </a>
      </li>
    </ul>
  );
}
