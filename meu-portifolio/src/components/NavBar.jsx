export function NavBar() {
  return (
    <div className="flex justify-between items-center">
      <p className="text-3xl drop-shadow-md black tracking-wider">
        Vini Ferraz
      </p>
      <ul className="flex" id="itens-menu-navbar">
        <li>
          <a href="">Habilidades</a>
        </li>
        <li>
          <a href="">Projetos</a>
        </li>
        <li>
          <a href="">Sobre mim</a>
        </li>
      </ul>
      <button>
        <img src="menu.svg" alt="icone menu" className="h-12" />
      </button>
    </div>
  );
}
