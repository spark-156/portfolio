<template>
  <image-vue :src="'/portfoliofoto.jpg'" />
  <colored-background-div-vue id="lucabergman" :color="'blue'">
    My name is Luca Bergman
    <br />
    I am a passionate full stack developer
  </colored-background-div-vue>

  <list-of-skills-vue></list-of-skills-vue>

  <list-of-projects-vue></list-of-projects-vue>

  <contact-details></contact-details>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImageVue from '@/components/Image.vue'
import ColoredBackgroundDiv from '@/components/ColoredBackgroundDiv.vue'
import ListOfSkillsVue from '@/components/ListOfSkills.vue'
import ListOfProjectsVue from '@/components/ListOfProjects.vue'
import ContactDetailsVue from '@/components/ContactDetails.vue'

export default defineComponent({
  name: 'Home',
  components: {
    'image-vue': ImageVue,
    'colored-background-div-vue': ColoredBackgroundDiv,
    'list-of-projects-vue': ListOfProjectsVue,
    'list-of-skills-vue': ListOfSkillsVue,
    'contact-details': ContactDetailsVue
  }
})
</script>
