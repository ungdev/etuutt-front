import React, { FunctionComponent } from 'react';

interface ButtonProps {
  title: string;
}

export const Button: FunctionComponent<ButtonProps> = ({ title }) => {
  return <button className="button">{title}</button>;
};
