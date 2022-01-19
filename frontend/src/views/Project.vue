<template>
  <image-vue v-if="currentProject" :src="currentProject.imageHref" />
  <colored-background-div-vue v-if="currentProject" :color="currentProject.color">
    {{ currentProject.name }}
    <br />
    <br />
    {{ currentProject.markdownContent }}
  </colored-background-div-vue>
  <not-found-vue v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NotFound from '@/views/NotFound.vue'
import { projects } from '@/assets/projectsandskills'
import ImageVue from '@/components/Image.vue'
import ColoredBackgroundDivVue from '@/components/ColoredBackgroundDiv.vue'

export default defineComponent({
  name: 'Project',
  data () {
    return {
      projects: projects
    }
  },
  computed: {
    currentProject: function () {
      let currentId: string
      if (typeof this.$route.params.id !== 'string') {
        currentId = this.$route.params.id[0]
      } else {
        currentId = this.$route.params.id
      }
      return projects.filter(project => project.id === currentId)[0]
    }
  },
  components: {
    'not-found-vue': NotFound,
    'image-vue': ImageVue,
    'colored-background-div-vue': ColoredBackgroundDivVue
  }
})
</script>
