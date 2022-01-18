<template>
  <image-vue :src="'https://www.bostonmagazine.com/wp-content/uploads/sites/2/2021/08/rubber-duck-stock-t.jpg'" />
  <colored-background-div-vue :color="'purple'">
    <slot>
      Fluent in:
    </slot>
    <br />
    <br />
    <link-vue href="/skills/docker">Docker</link-vue>
    <link-vue href="/skills/linux">Linux</link-vue>
    <link-vue href="/skills/python">Python</link-vue>
    <link-vue href="/skills/javascript">Javascript</link-vue>
    <link-vue href="/skills/typescript">Typescript</link-vue>
    <link-vue href="/skills/react">React TS</link-vue>
    <link-vue href="/skills/vue">Vue TS</link-vue>
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
