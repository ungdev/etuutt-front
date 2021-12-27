import React, { FunctionComponent } from 'react';
import { ProfileCard } from '../../../../components';
import { InputResearchBox } from '../../../../components/UI/InputResearchBox';
import { useTranslation } from 'react-i18next';


export const HomePage: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <>
    <InputResearchBox title={t("navbar.trombi")} size="smallResearchBox" description="BLA" placeholder="Charlotte Sarter" linkHrefResearch="" linkHrefGoTo="" linkNameGoTo="Aller à la page BLA" ></InputResearchBox>

    <InputResearchBox title={t("navbar.ueguide")} size="smallResearchBox" description="BLE" placeholder="LO07" linkHrefResearch="" linkHrefGoTo="" linkNameGoTo="Aller à la page BLE" ></InputResearchBox>
    </>
  );

};
