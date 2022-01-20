<template>
  <image-vue :src="'/home/berlin.jpeg'" />
  <colored-background-div-vue id="projects" :color="'yellow'">
    <slot>
      Some of my hobby projects you can check out:
    </slot>
    <br />
    <br />
    <div><router-link to="/projects/yourmonthlyplaylist">Your Monthly Playlist</router-link></div>
    <div><router-link to="/projects/hboi">HBO-I</router-link></div>
    <div><router-link to="/projects/portfolio">Portfolio</router-link></div>
    <div><router-link to="/projects/cv">CV</router-link></div>
  </colored-background-div-vue>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColoredBackgroundDivVue from './ColoredBackgroundDiv.vue'
import ImageVue from './Image.vue'

export default defineComponent({
  name: 'ListOfProjects',
  components: {
    'image-vue': ImageVue,
    'colored-background-div-vue': ColoredBackgroundDivVue
  }
})
</script>

<style lang="scss" scoped>
a {
  color: inherit;
}
</style>
