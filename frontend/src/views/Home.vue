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
    <link-vue href="/docker">Docker</link-vue>
    <link-vue href="/linux">Linux</link-vue>
    <link-vue href="/python">Python</link-vue>
    <link-vue href="/javascript">Javascript</link-vue>
    &amp;
    <link-vue href="/typescript">Typescript</link-vue>
  </colored-background-div-vue>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImageVue from '@/components/Image.vue'
import ColoredBackgroundDiv from '@/components/ColoredBackgroundDiv.vue'
import LinkVue from '@/components/Link.vue'

export default defineComponent({
  name: 'Home',
  components: {
    'image-vue': ImageVue,
    'colored-background-div-vue': ColoredBackgroundDiv,
    'link-vue': LinkVue
  }
})
</script>
