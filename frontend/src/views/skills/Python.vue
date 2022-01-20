<template>
  <image-vue :src="'/skills/python.png'" />
  <colored-background-div-vue :color="'yellow'">
    <h3>
      Python
    </h3>
    <div>
      The very first programming language I properly learned was Python. I learned this as a part of my first course at university where we had to implement mathematically tough functions such as finding all prime numbers up until integer X.
    </div>
    <br />
    <div>
      I have some experience with Flask and FastApi and have used both of them as backends for school projects. I am currently also using FastApi as a small auth backend in my <link-vue :href="'https://github.com/spark-156/Your-Monthly-Playlist'">Your Monthly Playlist</link-vue> app which connects to the Spotify api.
    </div>
  </colored-background-div-vue>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColoredBackgroundDivVue from '@/components/ColoredBackgroundDiv.vue'
import ImageVue from '@/components/Image.vue'
import LinkVue from '@/components/Link.vue'

export default defineComponent({
  name: 'Python',
  components: {
    'colored-background-div-vue': ColoredBackgroundDivVue,
    'image-vue': ImageVue
  }
})
</script>
