<template>
  <nav-bar />
  <page-container>
    <router-view />
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'
import PageContainerVue from './components/PageContainer.vue'

export default defineComponent({
  components: {
    'nav-bar': Navbar,
    'page-container': PageContainerVue
  }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Karla&family=Playfair+Display&display=swap');

#app {
  font-family: Karla, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $colors-black;
}

body, html {
  padding: 0;
  margin: 0;
  background-color: $colors-white;
}

* {
  box-sizing: border-box;
}
</style>
