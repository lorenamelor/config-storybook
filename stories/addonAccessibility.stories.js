import React from 'react';

import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';


storiesOf('Addons|Accessibility', module)
  .addDecorator(withA11y)
  .add('with text', () => <img src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5OS83MTYvb3JpZ2luYWwva29hbGFzLXdpdGgtY2hsYW15ZGlhLmpwZw=="/>)