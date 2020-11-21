<template>
  <div class="main-window">
    <div class="rotate">
      <image-holder v-for="image in images" v-bind:key="image.url" :url="image.url" :caption="image.caption" />
    </div>
  </div>
</template>

<script>
import ImageHolder from '@/components/ImageHolder.vue';

export default {
  name: "Landing",
  components: {
    ImageHolder,
  },
  data() {
    return {
      images: [
        {caption: "BASH", url: '@/assets/1.jpg'},
        {caption: "BASHxFABO", url: '@/assets/2.jpg'},
        {caption: "Stu Shit", url: '@/assets/3.jpg'},
        {caption: "Other caption", url: '@/assets/4.jpg'},
      ]
    }
  }
}
</script>

<style scoped>

  .main-window {
    width: 100%;
    min-height: 100vh;
    scroll-behavior: smooth;
  }

</style>