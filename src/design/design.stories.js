import { storiesOf } from '@storybook/vue';
import Vue from 'vue';
import 'normalize.css';

import Colors from './Colors.vue';

Vue.component('ds-colors', Colors);

storiesOf('Design System', module).add('Colors', () => ({
  template: `<ds-colors></ds-colors>`,
}));
