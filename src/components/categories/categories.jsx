import React from "react";
import { Link } from "react-router-dom";
const Categories = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to='/categories/consolas' className="nav-link">Consolas</Link>
        </li>
        <li className="nav-item">
            <Link to='/categories/consolas-retro' className="nav-link">Consolas retro</Link>
        </li>
        <li className="nav-item">
            <Link to='/categories/videojuegos' className="nav-link">Videojuegos</Link>
        </li>
        <li className="nav-item">
            <Link to='/categories/accesorios' className="nav-link">Accesorios</Link>
        </li>
        </ul>
    );
}

export default Categories;
