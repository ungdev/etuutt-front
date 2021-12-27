import React, { FunctionComponent } from 'react';
import './InputResearchBox.style.scss';

import { useTranslation } from 'react-i18next';


import { Button } from './../Button';

type BoxSize = 'largeResearchBox' | 'smallResearchBox';
interface InputResearchBox {
  title: string;
  size: BoxSize;
  description: string;
  placeholder: string;
  linkHrefResearch: string;
  linkHrefGoTo: string;
  linkNameGoTo: string;
}


export const InputResearchBox: FunctionComponent<InputResearchBox> = ({ title, size, description, placeholder, linkHrefResearch, linkHrefGoTo, linkNameGoTo }) => {
  const { t } = useTranslation();
  
  return (
    <div className={size}>
      <div className="researchBox">
        <h2>{title}</h2>
        <p>{description}</p>
        <form className="submitResearchBox">
          <input placeholder={placeholder}></input>
          <Button size="small" typeOfButton="submit" onClick={() => console.log("You clicked on the first button!")} title={t("inputResearchBox.research")} ></Button>
        </form>
        <a href={linkHrefGoTo}>{linkNameGoTo}</a>

      </div>
    </div>
  );
};

