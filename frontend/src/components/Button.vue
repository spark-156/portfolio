<template>
  <button
    v-on:click="onClick"
    class="container" :class="{
      red: this.color === 'red',
      yellow: this.color === 'yellow',
      green: this.color === 'green',
      blue: this.color === 'blue',
      purple: this.color === 'purple',
    }"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    onClick: {
      type: Function,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
button {
  padding: $lengths-1 $lengths-2;
  border: none;
  font-size: $lengths-2;
  cursor: pointer;
  box-shadow: $lengths-half $lengths-half $colors-black;
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
