<template>
  <colored-background-div-vue :color="'red'">
    <slot>
      Get in touch!
    </slot>
  </colored-background-div-vue>
  <colored-background-div-vue id="contact" :color="'blue'">
    <div><link-vue href="https://cv.lucabergman.com/">CV</link-vue></div>
    <div><link-vue href="mailto:luca.bergman@student.hu.nl">luca.bergman@student.hu.nl</link-vue></div>
    <div><link-vue href="https://www.linkedin.com/in/luca-bergman-30b28b203/">Linked-in</link-vue></div>
    <div><link-vue href="https://github.com/spark-156">Github</link-vue></div>
    <div><link-vue href="https://www.instagram.com/lucaisawesome_/">Instagram</link-vue></div>
  </colored-background-div-vue>
</template>

<script lang="ts">
import ColoredBackgroundDivVue from './ColoredBackgroundDiv.vue'
import LinkVue from './Link.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactDetails',
  components: {
    'colored-background-div-vue': ColoredBackgroundDivVue,
    'link-vue': LinkVue
  }
})
</script>
