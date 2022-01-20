<template>
  <image-vue :src="'/skills/linux.png'" />
  <colored-background-div-vue :color="'blue'">
    <h3>
      Linux
    </h3>
    <div>
      The second I started to dip my toes in to coding I also started to dip my toes in to Linux. Going as far as to install Ubuntu as my main OS for development and even building my own home server to host things such as <link-vue :href="'https://nextcloud.com/'">Nextcloud</link-vue>, <link-vue :href="'https://www.bookstackapp.com/'">Bookstack</link-vue> and more.
    </div>
    <br />
    <div>
      I also have a Ubuntu LTS vps on Digital Ocean where I host all my personal projects within docker with a simple docker-compose file. You can check out that project here: <link-vue :href="'https://github.com/spark-156/virtual-private-server'">Virtual Private Server</link-vue>. I have found that I have become extremely familiar with Linux and have no problem finding my way through most problems one may encounter as I have managed to encounter most of them running Pop_OS as my daily driver for over a year now.
    </div>
  </colored-background-div-vue>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColoredBackgroundDivVue from '@/components/ColoredBackgroundDiv.vue'
import ImageVue from '@/components/Image.vue'
import LinkVue from '@/components/Link.vue'

export default defineComponent({
  name: 'SkillLinux',
  components: {
    'colored-background-div-vue': ColoredBackgroundDivVue,
    'image-vue': ImageVue,
    'link-vue': LinkVue
  }
})
</script>
