import React from 'react';
import './Navigation.scss';

function Navigation() {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">Главная</li>
                <li className="navigation__item">О приложении</li>
            </ul>
        </nav>
    );
}

export default Navigation;
