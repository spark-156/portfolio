<template>
  <image-vue :src="'landscape.jpeg'" />
  <colored-background-div-vue id="skills" :color="'purple'">
    <slot>
      Fluent in:
    </slot>
    <br />
    <br />
    <div><link-vue href="/skills/docker">Docker</link-vue></div>
    <div><link-vue href="/skills/linux">Linux</link-vue></div>
    <div><link-vue href="/skills/python">Python</link-vue></div>
    <div><link-vue href="/skills/javascript">Javascript</link-vue></div>
    <div><link-vue href="/skills/typescript">Typescript</link-vue></div>
    <div><link-vue href="/skills/react">React TS</link-vue></div>
    <div><link-vue href="/skills/vue">Vue TS</link-vue></div>
  </colored-background-div-vue>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColoredBackgroundDivVue from './ColoredBackgroundDiv.vue'
import ImageVue from './Image.vue'
import LinkVue from './Link.vue'

export default defineComponent({
  name: 'ListOfSkills',
  components: {
    'image-vue': ImageVue,
    'colored-background-div-vue': ColoredBackgroundDivVue,
    'link-vue': LinkVue
  }
})
</script>
