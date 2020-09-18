import React, { FunctionComponent } from 'react';
import city from './../../assets/city-hall.png';
import home from './../../assets/home.png';
import logo from './../../assets/logo.png';
import timetable from './../../assets/timetable.png';
import './Navbar.style.scss';

const SideBarData = [
  {
    title: 'Accueil',
    path: '/',
    cName: 'nav-text',
  },
  {
    title: 'Evenement',
    path: '/evenement',
    cName: 'nav-text',
  },
  {
    title: 'Vie Etudiante',
    path: 'vie_etudiante',
    cName: 'nav-text',
  },
];

export const Navbar: FunctionComponent = () => {
  return (
    <nav>
      <img className="logo" src={logo} height="256" width="256"></img>
      <li className="nav-text">
        <a href="/">
          <img src={home} height="64" width="64"></img>
          <span>Accueil</span>
        </a>
      </li>
      <li className="nav-text">
        <a href="/evenement">
          <img src={timetable} height="64" width="64"></img>
          <span>Evenement</span>
        </a>
      </li>
      <li className="nav-text">
        <a href="/vie_etudiante">
          <img src={city} height="64" width="64"></img>
          <span>Vie Etudiante</span>
        </a>
      </li>
    </nav>
  );
};
