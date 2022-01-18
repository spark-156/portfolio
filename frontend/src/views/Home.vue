<template>
  <image-vue :src="'/portfoliofoto.jpg'" />
  <colored-background-div-vue :color="'blue'">
    My name is Luca Bergman
    <br />
    And I am a pasionate full stack developer
  </colored-background-div-vue>

  <image-vue :src="'https://www.bostonmagazine.com/wp-content/uploads/sites/2/2021/08/rubber-duck-stock-t.jpg'" />
  <colored-background-div-vue :color="'purple'">
    Fluent in:
    <link-vue href="/skills/docker">Docker</link-vue>
    <link-vue href="/skills/linux">Linux</link-vue>
    <link-vue href="/skills/python">Python</link-vue>
    <link-vue href="/skills/javascript">Javascript</link-vue>
    &amp;
    <link-vue href="/skills/typescript">Typescript</link-vue>
  </colored-background-div-vue>
  <image-vue :src="'/secondaryfoto.jpeg'" />
  <colored-background-div-vue :color="'yellow'">
    Some of my hobby projects you can check out:
    <link-vue href="/projects/yourmonthlyplaylist">Your Monthly Playlist</link-vue>
    <link-vue href="/projects/hboi">HBO-I</link-vue>
    <link-vue href="/projects/portfolio">Portfolio</link-vue>
    <link-vue href="/projects/cv">CV</link-vue>
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
