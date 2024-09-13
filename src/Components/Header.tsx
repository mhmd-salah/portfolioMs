import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation()
  const styleHeader = location.pathname !== "/" ? "#111" : "transparent";
  return (
    <header
      className=" w-full left-0 z-11111 relative"
      style={{ background: styleHeader }}
    >
      <div className="container py-6 flex justify-between ">
        <h2 className="text-gradient text-2xl font-extrabold">Mohamed Salah</h2>
        <nav>
          <ul className="absolute right-5 sm:relative sm:flex items-center gap-5 *:cursor-pointer">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
