<template>
  <div>
    <h2 class="header">Headers</h2>
    <div class="examples">
      <h1>Hello World!</h1>
      <h2>Hello World!</h2>
      <h3>Hello World!</h3>
      <h4>Hello World!</h4>
      <h5>Hello World!</h5>
      <h6>Hello World!</h6>
    </div>
    <h2 class="header">Body</h2>
    <div class="examples">
      <div
        v-for="(scale, index) in typeScale"
        :class="[scale, 'body-example']"
        :key="index"
      >The quick brown fox jumped over the lazy dog.</div>
    </div>
  </div>
</template>

<style lang="scss">
@import './design.scss';
@import './styles.scss';
.body-example + .body-example {
  margin-top: 0.5em;
}
</style>

<script>
export default {
  data() {
    return {
      typeScale: [
        'fs-sm-1',
        'fs-sm-2',
        'fs-md-1',
        'fs-md-2',
        'fs-md-3',
        'fs-lg-1',
        'fs-lg-2',
        'fs-lg-3',
        'fs-xl-1',
        'fs-xl-2',
        'fs-xl-3',
      ],
    };
  },
};
</script>
