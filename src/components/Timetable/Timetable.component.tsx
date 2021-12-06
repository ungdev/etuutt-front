import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import APIRequest from './../../utils/apiRequest'

import './Timetable.style.scss';

import { Button } from '../UI/Button';

interface Timetable {
  studentNum: string;
  //studentUes: string;
  //studentTimetable: string;
}

/**
* Displays a card which can contain an image, a content and a button
*/
export const Timetable: FunctionComponent<Timetable> = ({ studentNum }) => {
  const { t } = useTranslation();

  //Requête API

  console.log("plop")
  var request = new APIRequest(false);

  request.makeRequest("user/1ec4c4ea-4454-6f16-b98b-b9d2a785c599/edt");

  //Traitement JSON

  //Tableau qui correspond à l'edt
  return (
    <div className="timetable">
      <>
        <div className="profileBox-content">
          <p>ploooop</p>
          <div className="profileBoxItem">{t("profile.studentNum")} : {studentNum}</div>

        </div>
      </>

    </div>
  );

}
