<template>
  <nav-bar />
  <router-view class="router-view" />
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Karla&family=Playfair+Display&display=swap');

:root {
  --ldb-colors-white: #fafafa;
  --ldb-colors-black: #1C1C1C;
  --ldb-colors-yellow: #FFCC00;
  --ldb-colors-blue: #0033FF;
  --ldb-colors-primary: var(--ldb-colors-yellow);
  --ldb-colors-secondary: var(--ldb-colors-blue);

  --ldb-fonts-title: 'Playfair Display';
  --ldb-fonts-default: Karla;

  --ldb-lengths-1: 8px;
  --ldb-lengths-2: 16px;
  --ldb-lengths-3: 24px;
  --ldb-lengths-4: 32px;
  --ldb-lengths-5: 40px;
  --ldb-lengths-6: 48px;
  --ldb-lengths-7: 56px;
  --ldb-lengths-8: 64px;
  --ldb-lengths-9: 72px;
  --ldb-lengths-10: 80px;
  --ldb-lengths-100: 800px;
}

#app {
  font-family: Karla, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--ldb-colors-black);

  height: 200vh;
}

body, html {
  padding: 0;
  margin: 0;
  background-color: var(--ldb-colors-white);
}

* {
  box-sizing: border-box;
}
</style>

<style scoped>
.router-view {
  margin-top: 50px;
}
</style>
