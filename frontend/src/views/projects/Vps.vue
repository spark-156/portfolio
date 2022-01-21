<template>
  <image-vue :src="'/projects/vps.png'" />
  <colored-background-div-vue :color="'purple'">
    <h3>
      Virtual Private Server
    </h3>
    <div>
      I rent a vps on Digital Ocean. This vps is running Ubuntu LTS. I use this vps to host all my projects mentioned <link-vue :href="'/#projects'">here</link-vue>. I host them within docker and use github workflows to auto push new images to my docker hub. I then use watchtower to auto pull and update those very images. This allows me to have a very clean and easy development cycle where I can push to production multiple times a day. You can take a look at the source code <link-vue :href="'https://github.com/spark-156/virtual-private-server'">here</link-vue>
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
