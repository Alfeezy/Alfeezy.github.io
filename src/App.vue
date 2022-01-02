<template>

  <div v-on:click="switchImage()" v-bind:class="{'background-black': !wide, 'background-red': wide}" id="app">
    <div class="overbound">
      <div id="left-col" class="float" v-bind:style="{width: percentWidth + 'vw', flexBasis: percentWidth + 'vw'}" v-bind:class="{'background-black': !wide, 'background-red': wide}">
        <div class="main">
            <image-holder
            v-bind:class="{'show': !wide, 'hide': wide}"
            v-bind:filename="images[0].filename" 
            v-bind:caption="images[0].caption">
          </image-holder>
          <image-holder
            v-bind:class="{'show': wide, 'hide': !wide}"
            v-bind:filename="images[1].filename" 
            v-bind:caption="images[1].caption">
          </image-holder>
        </div>
      </div>
      <div id="right-col" class="float background-red p-3" v-bind:style="{width: smallWidth + 'vw', flexBasis: smallWidth + 'vw'}" v-bind:class="{'hide right-transition-close': wide, 'show right-transition-open': !wide}">
        <p>
          SUSPECT <br>
          BEHAVIOR
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ImageHolder from './components/ImageHolder';


export default {
  name: 'app',
  components: {
    ImageHolder
  },
  data() {
    return {
      images: [
        {caption: "eyes1", filename: 'eyes1.png'},
        {caption: "eyes2", filename: 'eyes2.png'} 
      ],
      wide: true,
      percentWidth: 100,
      smallWidth: 0
    }
  },
  methods: {
    switchImage: function() {
      this.wide = !this.wide;
      if (this.wide){
        this.percentWidth = 100;
        this.smallWidth = 0;
      } else {
        this.percentWidth = 65;
        this.smallWidth = 20;
      }
    },
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@200&display=swap');

  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .float{
    float: left;
  }  

  #left-col {
    transition: width 600ms ease, background-color 300ms linear;
  }

  #right-col{
    font-family: 'Gothic A1', sans-serif;
    font-size: 54px;
    line-height: 100%;
    height: 100vh;
    color:white;
  }

  .right-transition-open {
    transition: width 600ms ease, opacity 800ms ease 700ms;
  }

  .right-transition-close {
    transition: width 600ms ease, opacity 200ms linear;
  }

  #app {
    height: 100vh;
    overflow: hidden;
    white-space: nowrap;
    transition: width 600ms ease, background-color 300ms linear;
  }

  .overbound {
    width: 150vw;
  }
    
  .show {
    opacity: 100% !important;
  }

  .hide {
    opacity: 0%;
  }

  .half {
    float: left;
  }

  .background-red{
    background-color: #8d392a;
  }

  .background-black{
    background-color: black;
  }
</style>
