<template>
  <image-vue :src="'/portfoliofoto.jpg'" />
  <colored-background-div-vue id="lucabergman" :color="'blue'">
    My name is Luca Bergman
    <br />
    I am a passionate full stack developer
  </colored-background-div-vue>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColoredBackgroundDivVue from './ColoredBackgroundDiv.vue'
import ImageVue from './Image.vue'

export default defineComponent({
  name: 'LucaBergman',
  components: {
    'colored-background-div-vue': ColoredBackgroundDivVue,
    'image-vue': ImageVue
  }
})
</script>
