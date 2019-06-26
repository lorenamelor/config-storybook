import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

storiesOf('Addons|Viewport', module)
  .addParameters({ viewport: { defaultViewport: 'iphone6' }})
  .add('with text', () => <Button onClick={action('clicked')}>Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
