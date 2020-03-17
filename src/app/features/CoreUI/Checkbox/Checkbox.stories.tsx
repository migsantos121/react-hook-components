import React from 'react';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';
import '../../App/Root/Root.scss';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

export const normal = () => (
  <Checkbox label='Checkbox' onChange={action('changed')} />
);

export const checked = () => (
  <Checkbox
    label='Checkbox'
    defaultValue={true}
    onChange={action('changed')}
  />
);

export const disabled = () => (
  <Checkbox
    label='Checkbox'
    disabled
    onChange={action('changed')}
  />
);
