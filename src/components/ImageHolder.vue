<template>
  <img :src="getImgUrl(filename)" class="main-image">
</template>

<script>
export default {
  name: "image-holder",
  props: {
   caption: String,
   filename: String,
  },
  methods: {
    getImgUrl(fn) {
      return require("@/assets/" + fn);
    },
  }
}

</script>

<style scoped>

  @keyframes breathe {
    0% {
      width: 50%;
      rotate: 1deg;
    }
    100% {
      width: 45%;
      rotate: -1deg;
    }
  }

  @keyframes rumble {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }

.main-image {
  position: absolute;
  transition: all 750ms ease;
  animation-name: breathe;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(.45, 0, .55, 1);
  animation-duration: 3s;
  animation-iteration-count: infinite;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

</style>