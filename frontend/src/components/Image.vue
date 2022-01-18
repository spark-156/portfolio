<template>
  <div class="image" v-bind:style="{ 'background-image': 'url(' + this.src + ')' }"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Image',
  props: {
    src: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.image {
  overflow: hidden;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
}
</style>
