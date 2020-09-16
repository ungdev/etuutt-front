import React, { FunctionComponent } from 'react';
import './Navbar.style.scss';

export const Navbar: FunctionComponent = () => {
  return (
    <div className="navbar">
      <ul>
        <a href="#Acceuil">Accueil</a>
        <a href="#Evenement">Evenement</a>
        <a href="#Forum">Forum</a>
        <a href="#Vie etudiante">Vie Etudiante</a>
      </ul>
    </div>
  );
};
