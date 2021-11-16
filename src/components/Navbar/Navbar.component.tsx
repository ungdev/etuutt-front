import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { PATHS } from '../../modules/navigation/services';
import city from './../../assets/city-hall.png';
import home from './../../assets/home.png';
import logo from './../../assets/logo.png';
import timetable from './../../assets/timetable.png';
import rgpd from './../../assets/protection.png';
import services from './../../assets/menu.png';
import equipe from './../../assets/team.png';
import bug from './../../assets/careful.png';
import './Navbar.style.scss';

const TAILLE_IMG = 40;
const sideBarDatas = [
  {
    title: 'navbar.home',
    path: PATHS.ROOT_PAGE.ROUTE,
    icon: "nav-logo fas fa-home",
  },
  {
    title: 'navbar.events',
    path: PATHS.EVENT_PAGE.ROUTE,
    icon: "nav-logo far fa-calendar-alt",
  },
  {
    title: 'navbar.studentLife',
    path: PATHS.STUDENT_LIFE_PAGE.ROUTE,
    icon: "nav-logo fas fa-university",
  },
  {
    title: 'Services',
    path: PATHS.SERVICES.ROUTE,
    icon: "nav-logo fas fa-journal-whills",
  },
  {
    title: "L'équipe",
    path: PATHS.TEAM.ROUTE,
    icon: "nav-logo fas fa-laugh-beam",
  },
  {
    title: 'RGPD',
    path: PATHS.GDPR.ROUTE,
    icon: "nav-logo fas fa-unlock",
  },
  {
    title: 'Signaler un bug',
    path: PATHS.BUG.ROUTE,
    icon: "nav-logo fas fa-file-signature",
  },
];

export const Navbar: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="header">
      <img className="etu-logo" src={logo}></img>
      <nav>
        {sideBarDatas.map(({ title, path, icon }) => (
          <a key={title} href={path} className="nav-text">
            {/* <img className="nav-logo" src={image} height={TAILLE_IMG} width={TAILLE_IMG} /> */}
            <i className={icon}></i>
            <span>{t(title)}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};
