import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from '@material-ui/core/Button';

storiesOf('Addons|Actions', module)
  .addDecorator(withInfo)
  .add('button', () => (
    <Button 
      variant="contained" 
      color="primary" 
      onClick={action('clicked')}>
      Hello Button
    </Button>))