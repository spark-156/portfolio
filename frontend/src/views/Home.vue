<template>
  <image-vue :src="'/portfoliofoto.jpg'" />
  <colored-background-div-vue :color="'blue'">
    My name is Luca Bergman
    <br />
    I am a pasionate full stack developer
  </colored-background-div-vue>

  <image-vue :src="'https://www.bostonmagazine.com/wp-content/uploads/sites/2/2021/08/rubber-duck-stock-t.jpg'" />
  <colored-background-div-vue :color="'purple'">
    Fluent in
    <a href="/docker">Docker</a>
    <a href="/linux">Linux</a>
    <a href="/python">Python</a>
    <a href="/javascript">Javascript</a>
    &amp;
    <a href="/typescript">Typescript</a>
  </colored-background-div-vue>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImageVue from '@/components/Image.vue'
import ColoredBackgroundDiv from '@/components/ColoredBackgroundDiv.vue'

export default defineComponent({
  name: 'Home',
  components: {
    'image-vue': ImageVue,
    'colored-background-div-vue': ColoredBackgroundDiv
  }
})
</script>
