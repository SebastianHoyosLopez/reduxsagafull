import React from "react";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/">Home</Link>
        <Link to="rickAndMorty">Rick and Morty</Link>
        <Link to="Detalles">Detalles</Link>
      </nav>
    </div>
  );
};

export default NavbarMenu;
