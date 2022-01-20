<template>
  <image-vue :src="'/skills/docker.png'" />
  <colored-background-div-vue :color="'blue'">
    <h3>
      Docker
    </h3>
    <div>
      Docker was first introduced to me with a school project. It allowed us to run a complete production ready version of our app on our laptops which immensely sped up our software development efforts. That project also introduced me to the wonders of hosting projects within docker (see my vps setup on <link-vue :href="'https://github.com/spark-156/virtual-private-server'">Github</link-vue>). Being able to host an image anywhere and everywhere without having to worry about dependencies is a huge benefit.
    </div>
    <br />
    <div>
      I have since started developing and hosting all my projects within docker. Even going as far as to dip my toes in to docker swarm with a portainer UI on top of it. You can see it all on my
    </div>
  </colored-background-div-vue>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColoredBackgroundDivVue from '@/components/ColoredBackgroundDiv.vue'
import ImageVue from '@/components/Image.vue'
import LinkVue from '@/components/Link.vue'

export default defineComponent({
  name: 'Docker',
  components: {
    'colored-background-div-vue': ColoredBackgroundDivVue,
    'image-vue': ImageVue,
    'link-vue': LinkVue
  }
})
</script>
