import { storiesOf } from '@storybook/vue';
import Vue from 'vue';
import 'normalize.css';

import Colors from './Colors.vue';
import Fonts from './Fonts.vue';

Vue.component('ds-colors', Colors);
Vue.component('ds-fonts', Fonts);

storiesOf('Design System', module)
  .add('Colors', () => ({
    template: `<ds-colors></ds-colors>`,
  }))
  .add('Fonts', () => ({
    template: `<ds-fonts></ds-fonts>`,
  }));
