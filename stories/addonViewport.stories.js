import React from 'react';

import { storiesOf } from '@storybook/react';
import AppBar from '../src/components/AppBar';

storiesOf('Addons|Viewport', module)
  .addParameters({ viewport: { defaultViewport: 'iphone6' }})
  .add('AppBar', () => (
    <AppBar />
  ));
