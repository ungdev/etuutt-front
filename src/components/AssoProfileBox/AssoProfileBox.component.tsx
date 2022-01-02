import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import './AssoProfileBox.style.scss';


interface AssoProfileBox {
    assoNum: string;
    assoPicture: string;
    assoName: string;
    assoPosition: string;
}

/**
* Displays a card which can contain an image, a content and a button
*/
export const AssoProfileBox : FunctionComponent<AssoProfileBox> = ({assoPicture, assoName, assoPosition}) => {
  const { t } = useTranslation();


  return (
    <div className="card infoProfileBox">
        <>
        <div className="profileBox-content">
            <div className="profileBoxItemLeft">{assoName}</div>
            <div className="profileBoxItemRight">{assoPosition}</div>
        </div>
        </>

    </div>
  );

}
