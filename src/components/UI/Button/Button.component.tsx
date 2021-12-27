import React, { FunctionComponent } from 'react';
import './Button.style.scss';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonType = "submit" | "reset" | "button" | undefined;

interface ButtonProps {
  title: string;
  size: ButtonSize;
  typeOfButton: ButtonType;
  onClick: () => void;
}
interface BadgeProps {
  title: string;
  onClick: () => void;
}

export const Button: FunctionComponent<ButtonProps> = ({ title, size, typeOfButton, onClick }) => {
  return (
    <button onClick={onClick} className={`button button-${size}`} type={typeOfButton}>
      {title}
    </button>
  );
};

export const Badge: FunctionComponent<BadgeProps> = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className={`badge button-large}`}>
      {title}
    </button>
  );
};
