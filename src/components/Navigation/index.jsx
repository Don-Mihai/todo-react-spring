import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">Главная</li>
                <Link to="/about" className="navigation__item">
                    О приложении
                </Link>
            </ul>
        </nav>
    );
}

export default Navigation;
