<template>
  <luca-bergman-vue></luca-bergman-vue>

  <list-of-skills-vue></list-of-skills-vue>

  <list-of-projects-vue></list-of-projects-vue>

  <contact-details></contact-details>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListOfSkillsVue from '@/components/ListOfSkills.vue'
import ListOfProjectsVue from '@/components/ListOfProjects.vue'
import ContactDetailsVue from '@/components/ContactDetails.vue'
import LucaBergmanVue from '@/components/LucaBergman.vue'

export default defineComponent({
  name: 'Home',
  components: {
    'luca-bergman-vue': LucaBergmanVue,
    'list-of-projects-vue': ListOfProjectsVue,
    'list-of-skills-vue': ListOfSkillsVue,
    'contact-details': ContactDetailsVue
  }
})
</script>
