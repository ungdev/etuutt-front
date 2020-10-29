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

const TAILLE_IMG = 64;
const sideBarDatas = [
  {
    title: 'navbar.home',
    path: PATHS.ROOT_PAGE.ROUTE,
    image: home,
  },
  {
    title: 'navbar.events',
    path: PATHS.EVENT_PAGE.ROUTE,
    image: timetable,
  },
  {
    title: 'navbar.studentLife',
    path: PATHS.STUDENT_LIFE_PAGE.ROUTE,
    image: city,
  },
  {
    title: 'Services',
    path: PATHS.SERVICES.ROUTE,
    image: services,
  },
  {
    title: "L'équipe",
    path: PATHS.TEAM.ROUTE,
    image: equipe,
  },
  {
    title: 'RGPD',
    path: PATHS.GDPR.ROUTE,
    image: rgpd,
  },
  {
    title: 'Signaler un bug',
    path: PATHS.BUG.ROUTE,
    image: bug,
  },
];

export const Navbar: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="header">
      <img className="etu-logo" src={logo}></img>
      <nav>
        {sideBarDatas.map(({ title, path, image }) => (
          <a key={title} href={path} className="nav-text">
            <img className="nav-logo" src={image} height={TAILLE_IMG} width={TAILLE_IMG} />
            <span>{t(title)}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};
