import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {

  
  return (
    <>
      <>
        <nav className="navbar">
          <ul className="navbar__list">
            <Link to="/">Inventario</Link>
            <Link to="/create">Agregar productos</Link>
          </ul>
        </nav>
      </>
    </>
  );
}
