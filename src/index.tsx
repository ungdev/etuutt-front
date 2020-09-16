import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './modules/internationalization/service/i18n.service';
import { MainNavigator } from './modules/navigation/pages';

ReactDOM.render(
  <React.StrictMode>
    <MainNavigator />
  </React.StrictMode>,
  document.getElementById('root')
);
