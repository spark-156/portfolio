<template>
  <image-vue :src="'/berlin.jpeg'" />
  <colored-background-div-vue id="projects" :color="'yellow'">
    <slot>
      Some of my hobby projects you can check out:
    </slot>
    <br />
    <br />
    <div><link-vue href="/projects/yourmonthlyplaylist">Your Monthly Playlist</link-vue></div>
    <div><link-vue href="/projects/hboi">HBO-I</link-vue></div>
    <div><link-vue href="/projects/portfolio">Portfolio</link-vue></div>
    <div><link-vue href="/projects/cv">CV</link-vue></div>

    <div v-for="(project) in projects" :key="project.id">
      <link-vue :href="`/projects/${project.id}`">
        {{ project.name }}
      </link-vue>
    </div>
  </colored-background-div-vue>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColoredBackgroundDivVue from './ColoredBackgroundDiv.vue'
import ImageVue from './Image.vue'
import LinkVue from './Link.vue'
import { projects } from '@/assets/projectsandskills'

export default defineComponent({
  name: 'ListOfProjects',
  components: {
    'image-vue': ImageVue,
    'colored-background-div-vue': ColoredBackgroundDivVue,
    'link-vue': LinkVue
  },
  data () {
    return {
      projects: projects
    }
  }
})
</script>
