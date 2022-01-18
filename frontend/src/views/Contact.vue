<template>
  <colored-background-div-vue :color="'red'">
    Get in contact with me!
  </colored-background-div-vue>
  <colored-background-div-vue :color="'purple'">
    <link-vue href="https://cv.lucabergman.com/">CV</link-vue>
    <link-vue href="mailto:luca.bergman@student.hu.nl">luca.bergman@student.hu.nl</link-vue>
    <link-vue href="https://www.linkedin.com/in/luca-bergman-30b28b203/">Linked-in</link-vue>
    <link-vue href="https://github.com/spark-156">Github</link-vue>
    <link-vue href="https://www.instagram.com/lucaisawesome_/">Instagram</link-vue>
  </colored-background-div-vue>
</template>

<script lang="ts">
import ColoredBackgroundDivVue from '@/components/ColoredBackgroundDiv.vue'
import LinkVue from '@/components/Link.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    'colored-background-div-vue': ColoredBackgroundDivVue,
    'link-vue': LinkVue
  }
})
</script>
