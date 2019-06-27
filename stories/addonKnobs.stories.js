import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import ExpansionPanel from '../src/components/ExpasionPanel';

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex
sit amet blandit leo lobortis eget`;

storiesOf('Addons|Knobs', module)
  .addDecorator(withKnobs)
  .add('Em componentes', () => (
    <ExpansionPanel 
      description={text('description', description)}
      title={text('title', "Expansion Panels")}
      disabled={boolean('Disabled', false)}
    />
  ))
  .add('Em variáveis dinâmicas', () => {
    const name = text('Name', 'Lorena Carla');
    const age = number('Age', 21);
  
    const content = `Meu nome é ${name} e tenho ${age} anos.`;
    return (<div>{content}</div>);
  });
