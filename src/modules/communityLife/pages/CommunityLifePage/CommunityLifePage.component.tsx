import React, { FunctionComponent } from 'react';

import { useTranslation } from 'react-i18next';
import { Overlay } from '../../../../components/UI/Overlay';

// import { readFileSync } from 'fs';
import * as fileParsed from './response_1638889297437.json';

var imageName = require("./BDE_logo.png")

export const CommunityLife: FunctionComponent = () => {
  const { t } = useTranslation();


  // console.log("TESTTTTTTT")
  // const file = fs.readFileSync('./response_1638889297437.json', 'utf-8');
  // console.log(typeof file);
  // var parsedFile = JSON.parse(file);
  //console.log(parsedFile);

  console.log(fileParsed['hydra:member']);
  


  return (
    <>
    <h1 className="title">{t('page.communityLife')}</h1>
    
    <Overlay name="BDE UTT" personInCharge="Emile Rey" description="La meilleure asso" logoSrc={imageName}></Overlay>


    
    </>
  );

};

