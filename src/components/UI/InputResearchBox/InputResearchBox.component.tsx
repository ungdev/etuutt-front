import React, { FunctionComponent } from 'react';
import './InputResearchBox.style.scss';


interface InputResearchBox {
  title: string;
  description: string;
  placeholder: string;
  linkHref: string;
  linkName: string;
}


export const InputBox: FunctionComponent<InputResearchBox> = ({ title, description }) => {
  return (
    <div></div>
  );
};

