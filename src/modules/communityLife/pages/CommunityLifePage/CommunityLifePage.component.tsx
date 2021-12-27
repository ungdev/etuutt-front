import React, { FunctionComponent } from 'react';

import { useTranslation } from 'react-i18next';
import { InputResearchBox } from '../../../../components';
import { Overlay } from '../../../../components/UI/Overlay';

import * as fileParsed from './response_1638889297437.json';

var imageName = require("./BDE_logo.png")
class Asso {

  name;
  logo;

	constructor( name:string, logo:string) {

		this.name = name;
    this.logo = logo;
		
	}
}



export const CommunityLife: FunctionComponent = () => {
  const { t } = useTranslation();


  console.log(fileParsed['hydra:member']);

  var associations = [];

  for (var i = 0; i < fileParsed['hydra:member'].length; i++){

    var currAsso = fileParsed['hydra:member'][i];
    console.log(currAsso)
    var name = currAsso['name'];
    var logo = currAsso['logo'];
    var asso = new Asso(name, logo);
    associations.push(asso);

  }

  console.log(associations)
  
  
  
  return (
    <>
    <h1 className="title">{t('page.communityLife')}</h1>

    <InputResearchBox title={t("navbar.trombi")} size="largeResearchBox" description="BLA" placeholder="Charlotte Sarter" linkHrefResearch="" linkHrefGoTo="" linkNameGoTo="Aller à la page BLA" ></InputResearchBox>
    
    <div className="containerOverlay">
      <Overlay name={associations[0].name} personInCharge="Emile Rey" description="La meilleure asso" logoSrc={associations[0].logo}></Overlay>
      <Overlay name={associations[1].name} personInCharge="Emile Rey" description="La meilleure asso" logoSrc={associations[1].logo}></Overlay>
      <Overlay name={associations[2].name} personInCharge="Emile Rey" description="La meilleure asso" logoSrc={associations[2].logo}></Overlay>
      <Overlay name={associations[3].name} personInCharge="Emile Rey" description="La meilleure asso" logoSrc={associations[3].logo}></Overlay>
      <Overlay name={associations[4].name} personInCharge="Emile Rey" description="La meilleure asso" logoSrc={associations[4].logo}></Overlay>
      <Overlay name={associations[5].name} personInCharge="Emile Rey" description="La meilleure asso" logoSrc={associations[5].logo}></Overlay>
      <Overlay name={associations[6].name} personInCharge="Emile Rey" description="La meilleure asso" logoSrc={associations[6].logo}></Overlay>
      <Overlay name={associations[7].name} personInCharge="Emile Rey" description="La meilleure asso" logoSrc={associations[7].logo}></Overlay>
      <Overlay name={associations[8].name} personInCharge="Emile Rey" description="La meilleure asso" logoSrc={associations[8].logo}></Overlay>
      <Overlay name={associations[9].name} personInCharge="Emile Rey" description="La meilleure asso" logoSrc={associations[9].logo}></Overlay>
    </div>

    </>
  );

};

