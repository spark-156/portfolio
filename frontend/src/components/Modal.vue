<template>
    <div class="modal-mask">
      <div class="content">
        <slot></slot>
      </div>

      <button-vue :onClick="() => $emit('close')" :color="'purple'">Close</button-vue>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonVue from './Button.vue'

export default defineComponent({
  name: 'Modal',
  components: {
    'button-vue': ButtonVue
  }
})
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $colors-white;

  display: grid;
  place-items: center;

}

.content {
  display: grid;
  place-items: center;
  grid-auto-rows: 1fr;
  gap: $lengths-1;
}
</style>
