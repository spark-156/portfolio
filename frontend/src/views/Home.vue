<template>
  <page-container>
    <div>I am a picture</div>
    <div class="home">
      hi i am home
    </div><div>I am a picture2</div>
    <div class="home">
      hi i am home2
    </div>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContainerVue from '@/components/PageContainer.vue'

export default defineComponent({
  name: 'Home',
  components: {
    'page-container': PageContainerVue
  }
})
</script>
