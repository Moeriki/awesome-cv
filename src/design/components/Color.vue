<template>
  <div :class="name" class="color"/>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.color {
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 3px;
  box-shadow: inset 0 1px 1px hsla(0, 0, 0, 0.1);
}
.primary-100 {
  background-color: $c-primary-100;
}
.primary-200 {
  background-color: $c-primary-200;
}
.primary-300 {
  background-color: $c-primary-300;
}
.primary-400 {
  background-color: $c-primary-400;
}
.primary-500 {
  background-color: $c-primary-500;
}
.primary-600 {
  background-color: $c-primary-600;
}
.primary-700 {
  background-color: $c-primary-700;
}
.primary-800 {
  background-color: $c-primary-800;
}
.primary-900 {
  background-color: $c-primary-900;
}
.neutral-100 {
  background-color: $c-neutral-100;
}
.neutral-200 {
  background-color: $c-neutral-200;
}
.neutral-300 {
  background-color: $c-neutral-300;
}
.neutral-400 {
  background-color: $c-neutral-400;
}
.neutral-500 {
  background-color: $c-neutral-500;
}
.neutral-600 {
  background-color: $c-neutral-600;
}
.neutral-700 {
  background-color: $c-neutral-700;
}
.neutral-800 {
  background-color: $c-neutral-800;
}
.neutral-900 {
  background-color: $c-neutral-900;
}
</style>
