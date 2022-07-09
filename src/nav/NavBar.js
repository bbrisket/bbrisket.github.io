import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="Nav">
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/cards"> Cards </Link>
            </li>
        </div>
    );
};

export default NavBar;