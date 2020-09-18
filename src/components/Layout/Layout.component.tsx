import React, { FunctionComponent } from 'react';
import { Navbar } from '../Navbar';
import './Layout.style.scss';

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className="layout">
      <div className="header">
        <Navbar></Navbar>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};
