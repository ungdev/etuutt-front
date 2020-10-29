import React, { FunctionComponent } from 'react';
import './Button.style.scss';

type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  title: string;
  size: ButtonSize;
  onClick: () => void;
}
interface BadgeProps {
  title: string;
  onClick: () => void;
}

export const Button: FunctionComponent<ButtonProps> = ({ title, size, onClick }) => {
  return (
    <button onClick={onClick} className={`button button-${size}`}>
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
