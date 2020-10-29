import React, { FunctionComponent } from 'react';
import { Badge, Button } from '../../../../components';

export const StyleGuidePage: FunctionComponent = () => {
  return (
    <div>
      <h1>StyleGuide Page</h1>
      <h3>small button</h3>
      <Button onClick={() => {}} title="Test" size="small" />
      <h3>medium button</h3>
      <Button onClick={() => {}} title="Test" size="medium" />
      <h3>large button</h3>
      <Button onClick={() => {}} title="Test" size="large" />
      <h3>Bagde UE</h3>
      <Badge onClick={() => {}} title="UE" />
    </div>
  );
};
