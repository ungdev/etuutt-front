import React, { FunctionComponent } from 'react';
import { Card } from '../../../../components';
import logo from './../../../../assets/logo.png';
export const StudentLifePage: FunctionComponent = () => {
  return (
    <div className="card-container">
      <div className="card-grid">
        <Card
          title={'Game UTT'}
          description={`Club de jeux video d'école`}
          logo={logo}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
    </div>
  );
};
