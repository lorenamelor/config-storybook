import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

// import { Button } from '@storybook/react/demo';
import TextField from '@material-ui/core/TextField';


storiesOf('Addons|Info', module)
  .addDecorator(withInfo)
  .add('datePicker', () => (
    <TextField
      id="date"
      label="Birthday"
      type="date"
      defaultValue="2017-05-24"
      InputLabelProps={{
        shrink: true,
      }}
  />
  ))