import React from "react";
import CartWidget from "./CartWidget"

function NavBar(){
    return(
        <>
        <h3>TIENDA ONLINE</h3>
        <button>Categoria A</button>
        <button>Categoria B</button>
        <button>Categoria C</button>
        <CartWidget></CartWidget>
        </>
    );
}

export default NavBar;