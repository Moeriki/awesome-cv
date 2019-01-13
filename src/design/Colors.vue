<template>
  <div>
    <h2>Colors</h2>
    <h3>Neutral colors</h3>
    <div class="examples">
      <ul class="color-list">
        <li v-for="name in neutralShades" :key="name">
          <color :name="name"/>
        </li>
      </ul>
    </div>
    <h3>Primary colors</h3>
    <div class="examples">
      <ul class="color-list">
        <li v-for="name in primaryShades" :key="name">
          <color :name="name"/>
        </li>
      </ul>
    </div>
    <h3>To do</h3>
    <ul>
      <li>Accent color</li>
    </ul>
  </div>
</template>

<style lang="scss">
@import './design.scss';

.color-list {
  margin: 0;
  padding: 0;
  li {
    display: inline;
    list-style-type: none;
  }
  li + li {
    margin-left: 4px;
  }
}
</style>

<script>
import { rangeStep } from 'lodash/fp';

import Color from './components/Color.vue';

export default {
  components: { Color },
  data() {
    return {
      neutralShades: rangeStep(100)(100, 999).map(
        (shade) => `neutral-${shade}`,
      ),
      primaryShades: rangeStep(100)(100, 999).map(
        (shade) => `primary-${shade}`,
      ),
    };
  },
};
</script>
