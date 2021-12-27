import React, { FunctionComponent } from 'react';
import './FieldBox.style.scss';
import { useTranslation } from 'react-i18next';

//Ant Design Icons
import {BookOutlined} from '@ant-design/icons';
import {BarChartOutlined} from '@ant-design/icons';
import {BranchesOutlined} from '@ant-design/icons';
import {AuditOutlined} from '@ant-design/icons';
import {LikeOutlined} from '@ant-design/icons';
import {FormOutlined} from '@ant-design/icons';
import {FontSizeOutlined} from '@ant-design/icons';

interface FieldBox {
}


export const FieldBox: FunctionComponent<FieldBox> = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="containerFieldBox">
        <div className="FieldBox">
            <BookOutlined />
            <a href=""><p>Connaissances Scientifiques</p></a>
        </div>
        <div className="FieldBox">
            <BranchesOutlined />
            <a href=""><p>Technique et méthode</p></a>
        </div>
        <div className="FieldBox">
            <LikeOutlined />
            <a href=""><p>Humanité</p></a>
        </div>
        <div className="FieldBox">
            <AuditOutlined />
            <a href=""><p>Management de l'entreprise</p></a>
        </div>
        <div className="FieldBox">
            <FontSizeOutlined />
            <a href=""><p>Expression et communication</p></a>
        </div>
        <div className="FieldBox">
            <BarChartOutlined />
            <a href=""><p>Stage</p></a>
        </div>
        <div className="FieldBox">
            <FormOutlined />
            <a href=""><p>Master</p></a>
        </div>
        
      </div>
      <div className="clear"></div>
    </div>
    
    
  );
};

