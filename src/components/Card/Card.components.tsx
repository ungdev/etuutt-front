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
      <div className="info">
        <h1 className="title">{title}</h1>
        <p className="describe">{description}</p>
        <Button title={'Savoir Plus'} size={'small'} onClick={onClick} />
      </div>
    </div>
  );
};
