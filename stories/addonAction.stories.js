import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import { Button } from '@storybook/react/demo';

storiesOf('Addons|Actions', module)
  .addDecorator(withInfo)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)