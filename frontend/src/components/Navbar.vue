<template>
  <header :class="{'headroom--unpinned': scrolled}" v-on:scroll="handleScroll" class="headroom header">
    <nav>
        <router-link to="/" class="title">Luca Bergman</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      limitPosition: 200,
      scrolled: false,
      lastPosition: 0
    }
  },

  methods: {
    handleScroll () {
      if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
        this.scrolled = true
        // move up!
      }

      if (this.lastPosition > window.scrollY) {
        this.scrolled = false
        // move down
      }

      this.lastPosition = window.scrollY
      // this.scrolled = window.scrollY > 250;
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
    // hide after 6 seconds
    // setTimeout(() => { this.scrolled = true }, 6000)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
})
</script>

<style scoped lang="scss">
.title, .title:visited {
  font-family: $fonts-title;
  font-size: $lengths-6;
  text-decoration: none;
  color: $colors-blue;
}

.header {
  width: 100%;
  height: $lengths-10;
  position: fixed;
  top: 0;
  z-index: 1;
  padding: $lengths-1;
  background-color: $colors-white;
}

.headroom {
    will-change: transform;
    transition: transform 200ms linear;
}
.headroom--pinned {
    transform: translateY(0%);
}
.headroom--unpinned {
    transform: translateY(-100%);
}

</style>
