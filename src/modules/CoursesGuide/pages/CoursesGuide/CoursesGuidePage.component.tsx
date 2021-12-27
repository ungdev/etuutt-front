import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { InputResearchBox } from '../../../../components';

import { FieldBox } from '../../../../components/UI/FieldBox';

export const CoursesGuidePage: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <>
    <h1 className="title">{t('page.coursesGuide')}</h1>

    <InputResearchBox title={t("coursesGuide.researchBox")} size="largeResearchBox" description="" placeholder="LO07" linkHrefResearch="" linkHrefGoTo="" linkNameGoTo="" ></InputResearchBox>

    <h2 className="subtitle">{t('coursesGuide.categories')}</h2>
    <FieldBox></FieldBox>

    <h2 className="subtitle">{t('coursesGuide.myCourses')}</h2>

    
    </>
  );

};
