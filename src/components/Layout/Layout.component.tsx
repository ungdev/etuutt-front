import React, { FunctionComponent } from 'react';
import { Navbar } from '../Navbar';
import './Layout.style.scss';

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
};
