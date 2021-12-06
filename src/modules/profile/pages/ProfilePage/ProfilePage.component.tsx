import React, { FunctionComponent } from 'react';
import { ProfileCard } from '../../../../components';
import { InfoProfileBox } from '../../../../components';
import { useTranslation } from 'react-i18next';

var imageName = require("./IMG_8651.JPG")

export const ProfilePage: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <>
    <h1 className="title">{t('page.profile')}</h1>

    <ProfileCard name="Madeline Cormicy" mail="madeleine.cormicy@utt.fr" sex="Female" phone="" birthDate='05/12/01' address="35 rue Kléber" imgSrc={imageName} alt="pictureOfMadeleineCormicy"></ProfileCard>

    <h2 className="subtitle">{t('profile.subtitle.formation')}</h2>
    <InfoProfileBox studentNum="45 994" studentUes="LO02, GL02, IF37, LG03" formation="ISI1"></InfoProfileBox>

    <h2 className="subtitle">{t('profile.subtitle.association')}</h2>
    </>
  );

};
