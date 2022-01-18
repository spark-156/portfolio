<template>
  <list-of-projects-vue></list-of-projects-vue>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListOfProjectsVue from '@/components/ListOfProjects.vue'

export default defineComponent({
  components: {
    'list-of-projects-vue': ListOfProjectsVue
  }
})
</script>
