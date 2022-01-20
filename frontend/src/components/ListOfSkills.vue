<template>
  <image-vue :src="'/home/landscape.jpeg'" />
  <colored-background-div-vue id="skills" :color="'purple'">
    <slot>
      Fluent in:
    </slot>
    <br />
    <br />
    <div><router-link to="/skills/docker">Docker</router-link></div>
    <div><router-link to="/skills/linux">Linux</router-link></div>
    <div><router-link to="/skills/python">Python</router-link></div>
    <div><router-link to="/skills/javascript">Javascript</router-link></div>
    <div><router-link to="/skills/typescript">Typescript</router-link></div>
    <div><router-link to="/skills/react">React</router-link></div>
    <div><router-link to="/skills/vue">Vue</router-link></div>
  </colored-background-div-vue>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColoredBackgroundDivVue from './ColoredBackgroundDiv.vue'
import ImageVue from './Image.vue'

export default defineComponent({
  name: 'ListOfSkills',
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
