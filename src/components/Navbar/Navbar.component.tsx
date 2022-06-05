/* eslint-disable react/jsx-key */
import React, { FunctionComponent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PATHS } from '../../modules/navigation/services';
import './Navbar.style.scss';
import { NavbarLink } from './NavbarLink.components';

const sideBarLink = [
  <NavbarLink name={'Accueil'} link={PATHS.ROOT_PAGE.ROUTE} icon={'bx bx-home'} subItems={'0'} />,
  <NavbarLink
    name={'Evenements'}
    link={PATHS.EVENT_PAGE.ROUTE}
    icon={'bx bx-calendar'}
    subItems={'0'}
  />,
  <NavbarLink
    name={'Vie Etudiant'}
    link={PATHS.STUDENT_LIFE_PAGE.ROUTE}
    icon={'bx bxs-school'}
    subItems={'0'}
  />,
  <NavbarLink
    name={'Services'}
    link={PATHS.SERVICES.ROUTE}
    icon={'bx bx-grid-alt'}
    subItems={[
      {
        subItemName: 'Profil',
        subItemLink: PATHS.PROFILE.ROUTE,
      },
      {
        subItemName: 'Email',
        subItemLink: PATHS.EMAIL.ROUTE,
      },
      {
        subItemName: 'Guide des UEs',
        subItemLink: PATHS.GUIDE_UE.ROUTE,
      },
      {
        subItemName: 'Trombinoscope',
        subItemLink: PATHS.TROMBINOSCOPE.ROUTE,
      },
      {
        subItemName: 'Buck UTT',
        subItemLink: PATHS.BUCKUTT.ROUTE,
      },
      {
        subItemName: 'Wiki',
        subItemLink: PATHS.WIKI.ROUTE,
      },
    ]}
  />,
  <NavbarLink name={'Equipe'} link={PATHS.TEAM.ROUTE} icon={'bx bx-group'} subItems={'0'} />,
  <NavbarLink
    name={'Paramètres'}
    link={PATHS.SETTING.ROUTE}
    icon={'bx bx-collection'}
    subItems={[
      {
        subItemName: 'SIA',
        subItemLink: PATHS.SIA.ROUTE,
      },
      {
        subItemName: 'Status UNG',
        subItemLink: PATHS.STATUS_UNG.ROUTE,
      },
      {
        subItemName: 'RGPD',
        subItemLink: PATHS.GDPR.ROUTE,
      },
      {
        subItemName: 'Signaler un Bug',
        subItemLink: PATHS.BUG.ROUTE,
      },
    ]}
  />,
];

export const Navbar: FunctionComponent = () => {
  const { t } = useTranslation();
  const [isClose, setIsClose] = useState(window.innerWidth < 1200);
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        const isclose = window.innerWidth < 1200;
        if (isclose !== isClose) setIsClose(isclose);
      },
      false
    );
  }, [isClose]);

  useEffect(() => {
    const arrow = document.querySelectorAll('.arrow');
    for (let i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.parentElement != null) {
          if (target.parentElement.parentElement != null) {
            const arrowParent = target.parentElement.parentElement; //selecting main parent of arrow
            arrowParent.classList.toggle('showMenu');
          }
        }
      });
    }
  });

  useEffect(() => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarBtn = document.querySelector('.bx-menu');
    if (sidebarBtn != null) {
      sidebarBtn.addEventListener('click', () => {
        if (sidebar != null) {
          sidebar.classList.toggle('close');
        }
      });
    }
  });

  return (
    <>
      <link href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css" rel="stylesheet"></link>
      <div className={`${isClose ? 'sidebar close' : 'sidebar'}`}>
        <div className="logo-details">
          <span className="logo_name">LOGO</span>
        </div>
        <ul className="nav-links">{sideBarLink}</ul>
      </div>
      <section className="home-section">
        <div className="home-content">
          <i className="bx bx-menu"></i>
        </div>
      </section>
    </>
  );
};
