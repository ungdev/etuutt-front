import { render } from '@testing-library/react';
import React from 'react';
import { TeamPage } from './TeamPage.component';

describe('[Component] TeamPage', () => {
  it('renders correctly', () => {
    const teamPage = render(<TeamPage />);
    expect(teamPage).toMatchSnapshot();
  });
});
