<template>
  <image-vue :src="'/secondaryfoto.jpeg'" />
  <colored-background-div-vue :color="'yellow'">
    <slot>
      Some of my hobby projects you can check out:
    </slot>
    <br />
    <br />
    <link-vue href="/projects/yourmonthlyplaylist">Your Monthly Playlist</link-vue>
    <link-vue href="/projects/hboi">HBO-I</link-vue>
    <link-vue href="/projects/portfolio">Portfolio</link-vue>
    <link-vue href="/projects/cv">CV</link-vue>
  </colored-background-div-vue>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColoredBackgroundDivVue from './ColoredBackgroundDiv.vue'
import ImageVue from './Image.vue'
import LinkVue from './Link.vue'

export default defineComponent({
  name: 'ListOfProjects',
  components: {
    'image-vue': ImageVue,
    'colored-background-div-vue': ColoredBackgroundDivVue,
    'link-vue': LinkVue
  }
})
</script>
