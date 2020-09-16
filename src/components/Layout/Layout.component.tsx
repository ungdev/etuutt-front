import React, { FunctionComponent } from 'react';
import './Layout.style.scss';

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className="layout">
      <div className="header">header</div>
      <div className="content">{children}</div>
    </div>
  );
};
