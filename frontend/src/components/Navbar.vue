<template>
  <header :class="{'headroom--unpinned': scrolled}" v-on:scroll="handleScroll" class="headroom header">
    <nav class="container">
      <router-link to="/" class="title">Luca Bergman</router-link>
      <button-vue v-if="!showModal" class="modalButton" :onClick="() => showModal = true" v-bind:color="'red'">Menu</button-vue>
    </nav>
  </header>
  <modal-vue v-if="showModal" @close="showModal = false">
    <a @click="() => showModal = false" href="#lucabergman">Luca Bergman</a>
    <a @click="() => showModal = false" href="#skills">Skills</a>
    <a @click="() => showModal = false" href="#projects">Projects</a>
    <a @click="() => showModal = false" href="#contact">Contact</a>
  </modal-vue>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonVue from './Button.vue'
import ModalVue from './Modal.vue'

export default defineComponent({
  data () {
    return {
      limitPosition: 200,
      scrolled: false,
      lastPosition: 0,
      showModal: false
    }
  },
  components: {
    'modal-vue': ModalVue,
    'button-vue': ButtonVue
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
.container {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;

  grid-auto-flow: row;
  justify-content: stretch;
  justify-items: start;
  align-items: center;
  grid-template-areas:
    "title modalButton";

  max-height: $lengths-10;
}

.modalButton {
  justify-self: end;
  grid-area: modalButton;
}

.title, .title:visited {
  grid-area: title;

  font-size: $lengths-5;
  text-decoration: none;
  color: $colors-blue;

  overflow: hidden;
  text-overflow: ellipsis;
  max-height: $lengths-9;
  line-height: $lengths-9;
}

.header {
  width: 100%;
  height: $lengths-11;

  position: fixed;
  top: 0;

  z-index: 10;
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
