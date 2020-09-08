import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.scss';
import './modules/internationalization/service/i18n.service';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
