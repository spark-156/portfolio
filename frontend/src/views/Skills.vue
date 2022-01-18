<template>
  <list-of-skills-vue></list-of-skills-vue>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ListOfSkills from '@/components/ListOfSkills.vue'

export default defineComponent({
  name: 'Skills',
  components: {
    'list-of-skills-vue': ListOfSkills
  }
})
</script>
