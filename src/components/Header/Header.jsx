import NavBar from "../Nav/NavBar";
import "./Header.css";
import { ItemsContext, SET_SEARCH_ITEM } from "../context/itemsContext";
import { useContext } from "react";

export default function Header() {
  const { dispatch } = useContext(ItemsContext);

  const handleSearch = (e) => {
    dispatch({ type: SET_SEARCH_ITEM, payload: e.target.value });
  };

  return (
    <header className="header">
      <div>
        <h2>TIENDA</h2>
      </div>
      <input
        type="text"
        placeholder="Buscar productos"
        className="navbar__search"
        onChange={handleSearch}
      />
      <NavBar />
    </header>
  );
}
