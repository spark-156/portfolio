<template>
  <div class="container" :class="{
    red: this.color === 'red',
    yellow: this.color === 'yellow',
    green: this.color === 'green',
    blue: this.color === 'blue',
    purple: this.color === 'purple',
  }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'colored-background-div',
  props: {
    color: {
      type: String,
      required: true,
      validator: (val: string) => ['red', 'yellow', 'green', 'blue', 'purple'].includes(val)
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;

  font-size: $lengths-3;
  text-align: center;

  display: grid;
  place-content: center;

  padding: $lengths-1;
}

.red {
  background-color: $colors-red;
  color: $colors-white;
}

.yellow {
  background-color: $colors-yellow;
  color: $colors-black;
}

.green {
  background-color: $colors-green;
  color: $colors-black;
}

.blue {
  background-color: $colors-blue;
  color: $colors-white;
}

.purple {
  background-color: $colors-purple;
  color: $colors-white;
}
</style>
