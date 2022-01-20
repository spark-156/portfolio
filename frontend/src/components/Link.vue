<template>
  <a
    :href="href"
    target="_blank"
    referrerpolicy="no-referrer"
  >
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Link',
  props: {
    href: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
a {
  color: inherit;
}
</style>
