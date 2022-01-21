<template>
  <image-vue :src="'/projects/hboi.png'" />
  <colored-background-div-vue :color="'red'">
    <h3>
      HBO-I
    </h3>
    <div>
      <link-vue :href="'https://hboi.lucabergman.com/'">HBO-I Domeinbeschrijving</link-vue> is a project where I wanted to make a very hard to navigate and complex pdf document way easier to use. The pdf is used by all HBO-ICT studies in the Netherlands as a guide to create a curriculum for the students.
    </div>
    <br />
    <div>
      We at Open-ICT have to be very familiar with that document as we create our own curriculum so to make it easier and more accessible for mobile users, I created this project. It allows a user to easily browse and filter the 100 different skills of the pdf and makes looking them up for our study a lot easier. You can view the source code <link-vue :href="'https://github.com/spark-156/hboi-domeinbeschrijving'">here</link-vue>
    </div>
  </colored-background-div-vue>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColoredBackgroundDivVue from '@/components/ColoredBackgroundDiv.vue'
import ImageVue from '@/components/Image.vue'
import LinkVue from '@/components/Link.vue'

export default defineComponent({
  name: 'React',
  components: {
    'colored-background-div-vue': ColoredBackgroundDivVue,
    'image-vue': ImageVue,
    'link-vue': LinkVue
  }
})
</script>
