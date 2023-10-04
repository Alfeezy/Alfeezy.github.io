<script>
  import couch from './assets/Couch.svg'
  import keyboard from './assets/Keyboard.svg'
  import lamp from './assets/Lamp.svg'
  import screen from './assets/Screen.svg'
  import speakerL from './assets/SpeakerL.svg'
  import speakerR from './assets/SpeakerR.svg'
  import table from './assets/Table.svg'
  import platform from './assets/Platform.svg'
  import largePillar from './assets/LargePillar.svg'
  import smallPillar from './assets/SmallPillar.svg'
  import car from './assets/Car.svg'
  import bridge from './assets/Bridge.svg'

</script>

<main>
  <div id="cover"></div>
  <div id="main-wrapper">
    <!-- Bridge and Car -->
    <div href="" class="item-bg" style="transform: translate(-700px, -400px);"> 
      <img src={bridge} class="bridge" alt="bridge" />
    </div>

    <div href="" class="item-bg" style="transform: translate(-330px, 350px);"> 
      <img src={car} class="car" alt="car" />
    </div>
    
    <!-- Platform Stuff -->
    <div style="scale: 100%">
      <div href="" target="_blank" class="item" style="transform: translate(-265px, -130px);"> 
        <img src={platform} class="platform-svg platform" alt="platform" />
      </div>
      <div href="" target="_blank" class="item" style="transform: translate(-400px, -200px);"> 
        <img src={largePillar} class="platform-svg large-pillar" alt="small pillar" />
      </div>
      <div href="" target="_blank" class="item" style="transform: translate(400px, -200px);"> 
        <img src={smallPillar} class=" platform-svg small-pillar" alt="small pillar" />
      </div>

      <a class="item-group" href="https://www.instagram.com/beenfabo/" target="_blank">
        <div href="" target="_blank" class="item" style="transform: translate(-140px, -20px);"> 
          <img src={couch} class="item-svg couch" alt="couch" />
        </div>
        <div class="item" style="transform: translate(-200px, -130px);"> 
          <img src={lamp} class="item-svg lamp" alt="lamp" />
        </div>
      </a>

      <a class="item-group" href="https://www.youtube.com/channel/UCVUKGnUaezaRcRwJXP887SQ" target="_blank">
        <div class="item" style="transform: translate(110px, -175px);">
          <img src={screen} class="item-svg screen" alt="screen" />
        </div>
      </a>

      <a class="item-group" href="https://www.linktr.ee/beenfabo" target="_blank">
        <div class="item" style="transform: translate(50px, -95px);"> 
          <img src={table} class="item-svg table" alt="table" />
        </div>
        <div class="item" style="transform: translate(87px, -74px);"> 
          <img src={keyboard} class="item-svg keyboard" alt="keyboard" />
        </div>
      </a>

      <a class="item-group" href="https://distrokid.com/hyperfollow/fb7/kobe-yr" target="_blank">
        <div class="item" style="transform: translate(65px, -160px);"> 
          <img src={speakerL} class="item-svg speaker" alt="speaker-l" />
        </div>
        <div class="item" style="transform: translate(165px, -100px);"> 
          <img src={speakerR} class="item-svg speaker" alt="speaker-r" />
        </div>
      </a>
    </div>
  </div>
</main>
<style>

  #cover {
    position: absolute;
    height: 100vh;
    top: 0;
    left: 0;
    width: 100vw;
    color: black;
    opacity: 100%;
  }

  .secret-holder{
    position: absolute;
    font-size: min(2vw, 2vh);
    font-weight: 400;
    transition: all 1s ease-out;
    user-select: none;
    -webkit-user-select: none;
    color: white;
    transform-origin: center;
  }

  .date-text {
    position: absolute;
    font-size: 14px;
    left: calc(49vw);
    font-weight: 400;
    color: white;
    opacity: 0;
    animation: fadein 6s ease-in-out 5s alternate infinite;
    user-select: none;
    -webkit-user-select: none;
    transition: all 1.5s ease-out;
    filter: drop-shadow(0 0 40px black);
  }

  .symbol {
    position: absolute;
    transition: all 100ms ease;
    cursor: default;
    user-select: none; 
    -webkit-user-select: none;
    transform-origin: center center;
    animation: fadein 6s ease-in-out;
  }

  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgb(22, 22, 22);
    opacity: 100%;
  }

  .alone-wrapper {
    position: absolute;
    transform: translate(-50%, -50%);
    height: 100vh;
    width: 100vw;
    font-family: 'Futura';
    font-size: min(3vw, 3vh);
    font-weight: 400;
    color: white;
  }

  #word-content {
    position: absolute;
    display: none;
  }

  .bridge {
    height: 1300px;
    animation: bridge-scroll;
    animation-direction: normal;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 1s;
    opacity: 0.3;
  }

  .car {
    height: 34px;
    animation: car-swerve;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(.75, 0, .25, 1);
    animation-iteration-count: infinite;
    animation-duration: 8s;
  }

  .couch {
    height: 150px;
    animation-delay: 5s !important;
  }

  .lamp {
    height: 160px;
    animation-delay: 5.5s !important;
  }

  .table {
    height: 125px;
    animation-delay: 8.4s !important;
  }

  .keyboard {
    height: 28px;
    animation-delay: 8.4s !important;
  }

  .screen {
    height: 95px;
    animation-delay: 3s !important;
  }

  .speaker {
    height: 50px;
    animation-delay: 3.5s !important;
  }

  .platform {
    height: 400px;
    filter: drop-shadow(0px 0px 60px black);
  }

  .large-pillar {
    width: 100px;
    animation-delay: 0.2s !important;
  }

  .small-pillar {
    width: 100px;
    animation-delay: 1.5s !important;
  }

  .item {
    position: absolute;
    will-change: filter;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }

  .item-bg {
    position: absolute;
    will-change: filter;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }

  .item-svg {
    animation: hover;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(.45, 0, .55, 1);
    animation-duration: 3s;
    animation-iteration-count: infinite;
    transition: all 500ms ease;
  }

  .platform-svg {
    animation: hover-2;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    transition: all 500ms ease;
  }

  @keyframes bridge-scroll {
    0% {
      transform: translate(0px, 0px);
    }
    100% {
      transform: translate(-41.6px, 24.03px);
    }
  }

  @keyframes fadein {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  @keyframes fadeout {
    0% {
      opacity: 100%;
    }
    100% {
      opacity: 0%;
    }
  }

  @keyframes car-swerve {
    0% {
      transform: translate(0px, 0px);
    }
    100% {
      transform: translate(30px, 17px);
    }
  }

  @keyframes hover {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-20px);
    }
  }

  @keyframes hover2 {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(1px);
    }
  }

  .item-group:hover .item-svg, .active{
    filter: drop-shadow(0 0 1em #bd0000ef);
    scale: 120%;
  }

</style>
