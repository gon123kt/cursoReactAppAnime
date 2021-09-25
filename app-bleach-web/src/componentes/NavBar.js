import React from 'react';
import {Link} from 'react-router-dom';
import './../estilos/estilos.css'

const NavBar = () => {
    return (
        <>
          <header>
                <h1>App personajes de Bleach</h1>
                <nav>
                <Link to='/about'>Character Detail</Link>
                <Link to='/detalles'>About</Link>
                </nav>
            </header>
        </>
        
    );
}
 
export default NavBar;