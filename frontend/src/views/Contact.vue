<template>
  <contact-details></contact-details>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContactDetailsVue from '@/components/ContactDetails.vue'

export default defineComponent({
  components: {
    'contact-details': ContactDetailsVue
  }
})
</script>
