import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import './InfoProfileBox.style.scss';

interface InfoProfileBox {
    studentNum: string;
    studentUes: string;
    formation: string;
}

/**
* Displays a card which can contain an image, a content and a button
*/
export const InfoProfileBox : FunctionComponent<InfoProfileBox> = ({studentNum, studentUes, formation}) => {
  const { t } = useTranslation();


  return (
    <div className="card infoProfileBox">
        <>
        <div className="profileBox-content">
            <div className="profileBoxItem">{t("profile.studentNum")} : {studentNum}</div>
            <div className="profileBoxItem">{t("profile.studentUes")} : {studentUes}</div>
            <div className="profileBoxItem">{t("profile.formation")} : {formation}</div>
            
        </div>
        </>

    </div>
  );

}
