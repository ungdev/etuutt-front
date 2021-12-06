import React, { FunctionComponent } from 'react';

import { useTranslation } from 'react-i18next';
import { Overlay } from '../../../../components/UI/Overlay';

var imageName = require("./BDE_logo.png")

export const CommunityLife: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <>
    <h1 className="title">{t('page.communityLife')}</h1>
    
    <Overlay name="BDE UTT" personInCharge="Emile Rey" description="La meilleure asso" logoSrc={imageName}></Overlay>


    
    </>
  );

};
