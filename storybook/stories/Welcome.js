import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

const Welcome = () => (
  <div>
    <a onClick={linkTo('Button')}>button</a>
  </div>
);

export default Welcome;
