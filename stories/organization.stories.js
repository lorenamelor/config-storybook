import React from 'react';

import { storiesOf } from '@storybook/react';
import SnackBar from '../src/components/SnackBar';

storiesOf('Componentes|Uteis/SnackBar', module)
  .add('error', () => <SnackBar type="error" message="This is an error message!"/>)
  .add('success', () => <SnackBar type="success" message="This is an success message!"/>)
  .add('warning', () => <SnackBar type="warning" message="This is an warning message!"/>)
  .add('info', () => <SnackBar type="info" message="This is an information message!"/>
  ,{
    notes: "menssagem"
  });
