import React, { FunctionComponent, useEffect, useState } from 'react';
import { Card } from '../../../../components';
import { Translation } from '../../../../utils';
import { API } from '../../../../utils/api';
import logo from './../../../../assets/logo.png';
import './StudentLifePage.style.scss';

interface AssoProps {
  id: string;
  name: string;
  descriptionShort: Translation;
  logo: string;
}
interface AssosProps {
  'hydra:member': Array<AssoProps>;
}

export const StudentLifePage: FunctionComponent = () => {
  const [assos, setAssos] = useState<AssosProps | undefined>();

  const fetchAssos = async () => {
    const res = await API.get<AssosProps>(`/assos`, 'admin');
    setAssos(res.data);
  };
  // Fetch the assos once, after the first render
  useEffect(() => {
    if (!assos) {
      fetchAssos();
    }
  }, []);

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
        {!assos
          ? 'pas assos'
          : assos['hydra:member'].map(({ id, name, descriptionShort, logo }) => (
              <>
                <div className="card-key" key={id}>
                  <Card
                    title={name}
                    description={descriptionShort.french}
                    logo={logo}
                    onClick={function (): void {
                      throw new Error('Function not implemented.');
                    }}
                  />
                </div>
              </>
            ))}
      </div>
    </div>
  );
};
