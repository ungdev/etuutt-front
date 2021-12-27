import React, { FunctionComponent } from 'react';
import './Overlay.style.scss';
import { useTranslation } from 'react-i18next';

import { Button } from '../Button';

type ButtonSize = 'small' | 'medium' | 'large';

interface Overlay {
  name: string;
  personInCharge: string;
  description: string;
  logoSrc: string;
}


export const Overlay: FunctionComponent<Overlay> = ({ name, personInCharge, description, logoSrc }) => {
  const { t } = useTranslation();

  return (
      <div className="overlayBox">
          {logoSrc && <img  src={logoSrc} alt={name} />}
          <div className="overlayFilter">
              <div className="text">
                  <h3>{name}</h3>
                  <div>Président : {personInCharge}</div>
                  <div className="description_overlay">{description}</div>
                  <Button title={t("cummunityLife.moreInfo")} size="small" typeOfButton="button" onClick={() => console.log("You clicked on the first button!")}>En savoir plus !</Button>
              </div>
          </div>
      </div>
    
    

  );
};

