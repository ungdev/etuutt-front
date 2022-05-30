import React, { FunctionComponent } from 'react';
import { Card } from '../../../../components';
import logo from './../../../../assets/logo.png';
import './StudentLifePage.style.scss';

export const StudentLifePage: FunctionComponent = () => {
  return (
    <div className="card-container">
      <div className="card-grid">
        <Card
          title={'Game UTT'}
          description={`Lorem ipsum dolor sit amet. A reprehenderit nemo aut voluptatem voluptatem ut modi illo At vitae quam ut accusantium odio. `}
          logo={logo}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <Card
          title={'Game UTT'}
          description={`Lorem ipsum dolor sit amet. A reprehenderit nemo aut voluptatem voluptatem ut modi illo At vitae quam ut accusantium odio. `}
          logo={logo}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <Card
          title={'Game UTT'}
          description={`Lorem ipsum dolor sit amet. A reprehenderit nemo aut voluptatem voluptatem ut modi illo At vitae quam ut accusantium odio. `}
          logo={logo}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <Card
          title={'Game UTT'}
          description={`Lorem ipsum dolor sit amet. A reprehenderit nemo aut voluptatem voluptatem ut modi illo At vitae quam ut accusantium odio. `}
          logo={logo}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
    </div>
  );
};
