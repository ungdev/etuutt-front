import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import './AssoProfileBox.style.scss';


interface UeBox {
    assoNum: string;
    assoPicture: string;
    assoName: string;
    assoPosition: string;
}

/**
* Displays a card which can contain an image, a content and a button
*/
export const UeBox : FunctionComponent<UeBox> = ({assoPicture, assoName, assoPosition}) => {
  const { t } = useTranslation();


  return (
    <div className="card infoProfileBox">
        <>
        <div className="profileBox-content">
            <div className="profileBoxItem">{assoName}</div>
            <div className="profileBoxItem">{assoPosition}</div>
        </div>
        </>

    </div>
  );

}
