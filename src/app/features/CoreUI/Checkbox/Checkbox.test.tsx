import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Checkbox from './Checkbox';

const dummyText = 'label text';

describe('Checkbox', () => {
  afterEach(cleanup);

  it('display label', () => {
    const { getByText } = render(
      <Checkbox label={dummyText} />,
    );
    const element = getByText(dummyText);
    expect(element).toBeInTheDocument();
  });
});
