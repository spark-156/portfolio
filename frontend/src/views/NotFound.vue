<template>
  <colored-background-div-vue :color="'red'">
    404 Not Found
  </colored-background-div-vue>
  <colored-background-div-vue :color="'purple'">
    It seems that the page that you were looking for does not exist. Click here:
    <br />
    <br />
    <div>
      <button-vue :color="'yellow'" v-bind:onClick="() => $router.back()">To go back</button-vue>
    </div>
  </colored-background-div-vue>
</template>

<script lang="ts">
import ButtonVue from '@/components/Button.vue'
import ColoredBackgroundDivVue from '@/components/ColoredBackgroundDiv.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    'colored-background-div-vue': ColoredBackgroundDivVue,
    'button-vue': ButtonVue
  }
})
</script>
