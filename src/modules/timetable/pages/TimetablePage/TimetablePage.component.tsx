import React, { FunctionComponent } from 'react';
import { ProfileCard, Timetable } from '../../../../components';
import { useTranslation } from 'react-i18next';

var imageName = require("./IMG_8651.JPG")

export const TimetablePage: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <>
    <h1 className="title">{t('page.timetable')}</h1>

    <Timetable studentNum="56677" ></Timetable>
    </>
  );

};
