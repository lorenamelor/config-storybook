import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

storiesOf('Addons|Knobs', module)
  .addDecorator(withKnobs)
  .add('Em componentes', () => (
    <Button disabled={boolean('Disabled', false)} onClick={action('clicked')}>
      {text('Label', 'Hello Storybook')}
    </Button>
  ))
  .add('Em variáveis dinâmicas', () => {
    const name = text('Name', 'Lorena Carla');
    const age = number('Age', 21);
  
    const content = `Meu nome é ${name} e tenho ${age} anos.`;
    return (<div>{content}</div>);
  });
