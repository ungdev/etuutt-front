import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import APIRequest from './../../utils/apiRequest'

import './Timetable.style.scss';

import { Button } from '../UI/Button';

import * as fileParsed from './response.json';


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
  //var request = new APIRequest(true);

  // request.makeRequest("user/1ec4c4ea-4454-6f16-b98b-b9d2a785c599/edt");
  //request.makeRequest("users?page=1");

  //Traitement JSON

  console.log(fileParsed);

  //document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;

  //Tableau qui correspond à l'edt
  return (
    <div className="timetable.box">
      <div className="timetable">
        <table>
          <thead>
            <tr>
              <th> </th>
              <th>{t("timetable.day1")}</th>
              <th>{t("timetable.day2")}</th>
              <th>{t("timetable.day3")}</th>
              <th>{t("timetable.day4")}</th>
              <th>{t("timetable.day5")}</th>
              <th>{t("timetable.day6")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{t("timetable.slot1")}</th>
              <td>huuu</td>
            </tr>
            <tr>
              <th>{t("timetable.slot2")}</th>
              <td>huuu</td>
            </tr>
            <tr>
              <th>{t("timetable.slot3")}</th>
              <td>huuu</td>
            </tr>
            <tr>
              <th>{t("timetable.slot4")}</th>
              <td>huuu</td>
            </tr>
            <tr>
              <th>{t("timetable.slot5")}</th>
              <td>huuu</td>
            </tr>
            <tr>
              <th>{t("timetable.slot6")}</th>
              <td>huuu</td>
            </tr>
            <tr>
              <th>{t("timetable.slot7")}</th>
              <td>huuu</td>
            </tr>
            <tr>
              <th>{t("timetable.slot8")}</th>
              <td>huuu</td>
            </tr>
            <tr>
              <th>{t("timetable.slot9")}</th>
              <td>huuu</td>
            </tr>
            <tr>
              <th>{t("timetable.slot10")}</th>
              <td>huuu</td>
            </tr>
            <tr>
              <th>{t("timetable.slot11")}</th>
              <td>huuu</td>
            </tr>
            <tr>
              <th>{t("timetable.slot12")}</th>
              <td>huuu</td>
            </tr>
            <tr>
              <th>{t("timetable.slot13")}</th>
              <td>huuu</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button title="Cumuler" size="small" onClick={() => console.log("You clicked on the first button!")}></Button>
    </div>
  );

}
