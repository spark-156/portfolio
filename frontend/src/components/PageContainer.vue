<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageContainer'
})
</script>

<style scoped lang="scss">
.container {
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: 50vh 100vh;
  place-items: center;

  @media (min-width: 800px){
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 100vh;
  }
}
</style>
