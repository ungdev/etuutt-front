import React, { FunctionComponent } from 'react';

import { useTranslation } from 'react-i18next';
import { Overlay } from '../../../../components/UI/Overlay';

// import * as fileParsed from './response_1638889297437.json';

var imageName = require("./BDE_logo.png")

const sideBarDatas = [
  {
    title: 'navbar.home',
    key: "sub1",
  },
  {
    title: 'navbar.events',
    key: "sub2",
  },
  {
    title: 'navbar.studentLife',
    key: "sub3",
  },
  
  
];


export const CommunityLife: FunctionComponent = () => {
  const { t } = useTranslation();


  // console.log(fileParsed['hydra:member']);
  
  return (
    <>
    <h1 className="title">{t('page.communityLife')}</h1>
    
    <Overlay name="BDE UTT" personInCharge="Emile Rey" description="La meilleure asso" logoSrc={imageName}></Overlay>


    
    </>
  );

};

