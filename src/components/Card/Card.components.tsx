import React, { FunctionComponent } from 'react';
import { Button } from '../Button';
import './Card.style.scss';

interface CardProps {
  title: string;
  description: string;
  logo: string;
  onClick: () => void;
}

export const Card: FunctionComponent<CardProps> = ({ title, description, logo, onClick }) => {
  return (
    <div className="card">
      <img src={logo} />
      <div className="card-info">
        <div className="card-text">
          <p className="card-title">{title}</p>
          <p className="card-describe">{description}</p>
          <Button title={'Savoir Plus'} size={'small'} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};
