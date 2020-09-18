import { render } from '@testing-library/react';
import React from 'react';
import { LifeStudentPage } from './LifeStudentPage.component';

describe('[Component] LifeStudentPage', () => {
  it('renders correctly', () => {
    const lifeStudentPage = render(<LifeStudentPage />);
    expect(lifeStudentPage).toMatchSnapshot();
  });
});
