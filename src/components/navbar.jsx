import { useState } from "react";

function Navbar() {
    const[menu, setMenu] = useState(false);
    return (
        <nav>
            <ul id="navbar">
                <li><a href="#">Home</a></li>
                <li><a href="#descripcion">About me</a></li>
                <li><a href="#proyectos">Projects</a></li>
                <li><a href="#contacto">Contact</a></li>
            </ul>
            <ul id="navbarsmall" className={`${menu?'showmenu':''}`}>
                <div id="botonMenu" onClick={()=>setMenu(!menu)}>
                    &lt;
                </div>
                <li><a href="#">Home</a></li>
                <li><a href="#descripcion">About me</a></li>
                <li><a href="#proyectos">Projects</a></li>
                <li><a href="#contacto">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;