<template>
  <image-vue :src="'/portfoliofoto.jpg'" />
  <div class="home">
    hi i am home
  </div><div>I am a picture2</div>
  <div class="home">
    hi i am home2
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImageVue from '@/components/Image.vue'

export default defineComponent({
  name: 'Home',
  components: {
    'image-vue': ImageVue
  }
})
</script>
