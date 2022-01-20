<template>
  <image-vue :src="'/skills/react.png'" />
  <colored-background-div-vue :color="'blue'">
    <h3>
      React
    </h3>
    <div>
      After getting myself familiar with default JavaScript DOM manipulation I turned my eye to my very first framework. I didn’t have to look much further than the list of the most popular JS front end frameworks. In the end I learned React by following a course on CodeCademy of which I now have a certificate.
    </div>
    <br />
    <div>
      I have worked with React on many projects in school and have learned that I like working with typescript React the most. As it allows for faster less buggy development. My best react typescript project to date is: <link-vue :href="'https://github.com/spark-156/Your-Monthly-Playlist'">Your Monthly Playlist</link-vue>.
    </div>
  </colored-background-div-vue>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColoredBackgroundDivVue from '@/components/ColoredBackgroundDiv.vue'
import ImageVue from '@/components/Image.vue'
import LinkVue from '@/components/Link.vue'

export default defineComponent({
  name: 'React',
  components: {
    'colored-background-div-vue': ColoredBackgroundDivVue,
    'image-vue': ImageVue,
    'link-vue': LinkVue
  }
})
</script>
