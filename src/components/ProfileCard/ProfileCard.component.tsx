import { PATHS } from '../../modules/navigation/services';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import './ProfileCard.style.scss';

import { Button } from './../UI/Button';

interface ProfileCard {
    name: string;
    mail: string;
    sex: string;
    phone: string;
    birthDate: string;
    address: string;
    imgSrc: string;
    alt: string;
}

/**
* Displays a card which can contain an image, a content and a button
*/
export const ProfileCard : FunctionComponent<ProfileCard> = ({name, mail, sex, phone, birthDate, address, imgSrc, alt}) => {
  const { t } = useTranslation();


  return (
    <div className="card profileCard">
      {imgSrc && <img className="card-image imgProfile" alt={alt} src={imgSrc} />}
      {/* data-src={imgSrc} */}
        <>
            <div className="profileCard-content">
                <div className="profileCardItem profileStudentName">{name}</div>
                <div className="profileCardItem">{mail}</div>
                <div className="profileCardItem">{sex}</div>
                <div className="profileCardItem">{phone}</div>
                <div className="profileCardItem">{birthDate}</div>
                <div className="profileCardItem">{address}</div>
            </div>
            <Button title={t("profile.button1")} size="small" onClick={() => console.log("You clicked on the first button!")}></Button> 
            <Button title={t("profile.button2")} size="small" onClick={() => console.log("You clicked on the second button!")}></Button> 
        </>

    </div>
  );

}
