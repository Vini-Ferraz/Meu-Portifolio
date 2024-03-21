export function SocialMedias() {
  return (
    <ul className="flex" id="icone-menu-navbar">
      <li>
        <a href="https://github.com/Vini-Ferraz" target="_blank">
          <img src="github.svg" alt="Icone GitHub" className="icone w-10" />
        </a>
      </li>
      <li className="px-7">
        <a
          href="https://www.linkedin.com/in/vin%C3%ADcius-augusto-de-almeida-ferraz-5038022a0/"
          target="_blank"
        >
          <img src="linkedin.svg" alt="Icone LinkedIn" className="icone w-10" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/viniferraz72/" target="_blank">
          <img
            src="instagram.svg"
            alt="Icone Instagram"
            className="icone w-10"
          />
        </a>
      </li>
    </ul>
  );
}
