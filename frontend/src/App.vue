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
@import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');

#app {
  font-family: Karla, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $colors-black;

  min-width: 300px;
  font-size: $lengths-3;

  margin-top: $lengths-11;
}

body, html {
  padding: 0;
  margin: 0;
  background-color: $colors-white;
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}
</style>
