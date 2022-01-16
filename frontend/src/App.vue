<template>
  <nav-bar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'

export default defineComponent({
  components: {
    'nav-bar': Navbar
  }
})
</script>

<style scoped>

</style>
