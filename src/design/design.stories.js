import { storiesOf } from '@storybook/vue';
import Vue from 'vue';
import 'normalize.css';

import Overview from './Overview.vue';
import Borders from './Borders.vue';
import Colors from './Colors.vue';
import Fonts from './Fonts.vue';
import Spacing from './Spacing.vue';

Vue.component('ds-overview', Overview);
Vue.component('ds-borders', Borders);
Vue.component('ds-colors', Colors);
Vue.component('ds-fonts', Fonts);
Vue.component('ds-spacing', Spacing);

storiesOf('Design System', module)
  .add('Overview', () => ({
    template: `<ds-overview></ds-overview>`,
  }))
  .add('Borders', () => ({
    template: `<ds-borders></ds-borders>`,
  }))
  .add('Colors', () => ({
    template: `<ds-colors></ds-colors>`,
  }))
  .add('Fonts', () => ({
    template: `<ds-fonts></ds-fonts>`,
  }));
