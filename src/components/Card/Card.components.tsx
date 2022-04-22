import React, { FunctionComponent } from 'react';
import { Button } from '../Button';
import './Button.style.scss';

interface CardProps {
  title: string;
  description: string;
  logo: string;
  onClick: () => void;
}

export const Catd: FunctionComponent<CardProps> = ({ title, description, logo, onClick }) => {
  return (
    <div className="card">
      <img src={logo} />
      <div className="card-info">
        <div className="card-text">
          <p className="card-title">{title}</p>
          <p className="card-describe">{description}</p>
        </div>
        <Button
          title={'Savoir Plus'}
          size={'small'}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
    </div>
  );
};
