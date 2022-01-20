<template>
  <image-vue :src="'/skills/react.png'" />
  <colored-background-div-vue :color="'blue'">
    React
    <br />
    <br />
    After getting myself familiar with default JavaScript DOM manipulation I turned my eye to my very first framework. I didn’t have to look much further than the list of the most popular JS front end frameworks. In the end I learned React by following a course on CodeCademy of which I now have a certificate.
    <br />
    <br />
    I have worked with React on many projects in school and have learned that I like working with typescript React the most. As it allows for faster less buggy development.
  </colored-background-div-vue>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColoredBackgroundDivVue from '@/components/ColoredBackgroundDiv.vue'
import ImageVue from '@/components/Image.vue'

export default defineComponent({
  name: 'SkillReact',
  components: {
    'colored-background-div-vue': ColoredBackgroundDivVue,
    'image-vue': ImageVue
  }
})
</script>
