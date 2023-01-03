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

  const frameRate = 30;
  const alpha = 0.90; // velocity decay rate
  const beta = 0.005; // acceleration scale
  let list = [];
  let circlepos = [];
  let mousepos = {x: 0, y: 0};
  let frame = 0;

  function loop(){
    for (let i = 0; i < list.length; i++){
      list[i].update(i);
      list[i].draw();
    }
    frame++;

    if (!(frame % 20)){
      frame = 0;
      circlepos.unshift(circlepos.pop());
    }
  };

  function calcAngleDegrees(x, y) {
    return Math.atan2(y, x) * 180 / Math.PI;
  }

  function _loop(){
    loop();
    setTimeout(function(){
      _loop();
    }, 1000/frameRate);
  }

  class Symbol {
    constructor(x, y, elem){
      this.elem = elem;
      this.x = x;
      this.y = y;
      this.vx = 1;
      this.vy = 1;
    }

    update(i){
      this.vx += (mousepos.x - circlepos[i].x - this.x) * beta;
      this.vy += (mousepos.y - circlepos[i].y - this.y) * beta;

      this.vx = this.vx * alpha;
      this.vy = this.vy * alpha;

      this.x += this.vx;
      this.y += this.vy;
    }

    draw(){
      this.elem.style.transform = `translate(${this.x - 20}px, ${this.y - 35}px) rotate(${calcAngleDegrees(mousepos.x - this.x, mousepos.y - this.y) - 90}deg)`;
    }
  }

  document.addEventListener("DOMContentLoaded", function(e) {
    mousepos = {x: document.body.clientWidth/2, y: document.body.clientHeight/2};
    const text = document.getElementById('word-content').textContent;
    const className = document.getElementById('word-content').classList; 
    const radius = Math.min(document.body.clientWidth/4, document.body.clientHeight/4) // px
    for (let i = 0; i < text.length; i++){

      // add symbol to dom and list
      let c = document.createElement('div');
      c.classList.value = document.getElementById('word-content').classList.value;
      c.appendChild(document.createTextNode(text[i]));
      document.getElementById('symbol-wrapper').append(c);
      list.push(new Symbol(document.body.clientWidth/2, document.body.clientHeight/2, c));

      // create circle coords
      circlepos.push({x: Math.cos((i * 2 * Math.PI)/Math.max(1, text.length))*radius, y: Math.sin((i * 2 * Math.PI)/Math.max(1, text.length))*radius});

    }
    _loop();

  });

  document.onmousemove = function(e){
    mousepos = {x: e.clientX, y: e.clientY};
  };

</script>
<main>
  <div id="main-wrapper">

    <!-- Bridge and Car -->
    <div href="" class="item-bg" style="transform: translate(-700px, -300px);"> 
      <img src={bridge} class="bridge" alt="bridge" />
    </div>

    <div href="" class="item-bg" style="transform: translate(-456px, 300px);"> 
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

    <div class="overlay"></div>
    <div class="date-text">
      Feb. 14
    </div>
    <div class="scalar">
      <div class="alone-wrapper">
        <span id="word-content" class="symbol">
          ALONE...ALONE...
        </span>
        <div id="symbol-wrapper"></div>
      </div>
    </div>
  </div>
</main>

<style>

  .date-text {
    position: absolute;
    font-size: min(2vw, 2vh);
    left: calc(50vw - 35px);
    font-weight: 400;
    color: white;
    opacity: 0;
    animation: fadein 6s ease-in-out 5s alternate infinite;
    user-select: none;
  }

  .symbol {
    position: absolute;
    transition: all 100ms ease;
    cursor: default;
    user-select: none; 
    transform-origin: center center;
    animation: fadein 6s ease-in-out;
  }

  .overlay {
    position: absolute;
    transform: translate(-50%, -50%);
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
    height: 1000px;
    animation: bridge-scroll;
    animation-direction: normal;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }

  .car {
    height: 28px;
    animation: car-swerve;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(.75, 0, .25, 1);
    animation-iteration-count: infinite;
    animation-duration: 15s;
  }

  .couch {
    height: 150px;
    animation-delay: 5s;
  }

  .lamp {
    height: 160px;
    animation-delay: 5.5s;
  }

  .table {
    height: 125px;
    animation-delay: 8.4s;
  }

  .keyboard {
    height: 28px;
    animation-delay: 8.4s;
  }

  .screen {
    height: 95px;
    animation-delay: 3s;
  }

  .speaker {
    height: 50px;
    animation-delay: 3.5s;
  }

  .platform {
    height: 400px;
  }

  .large-pillar {
    width: 100px;
    animation-delay: 0.2s;
  }

  .small-pillar {
    width: 100px;
    animation-delay: 1.5s;
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

    -webkit-animation: hover;
    -webkit-animation-direction: alternate;
    -webkit-animation-timing-function: cubic-bezier(.45, 0, .55, 1);
    -webkit-animation-duration: 3s;
    -webkit-animation-iteration-count: infinite;
    -webkit-transition: all 500ms ease;

    -moz-animation: hover;
    -moz-animation-direction: alternate;
    -moz-animation-timing-function: cubic-bezier(.45, 0, .55, 1);
    -moz-animation-duration: 3s;
    -moz-animation-iteration-count: infinite;
    -moz-transition: all 500ms ease;
  }

  .platform-svg {
    animation: hover-2;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    transition: all 500ms ease;

    -webkit-animation: hover;
    -webkit-animation-direction: alternate;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-duration: 5s;
    -webkit-animation-iteration-count: infinite;
    -webkit-transition: all 500ms ease;

    -moz-animation: hover;
    -moz-animation-direction: alternate;
    -moz-animation-timing-function: ease-in-out;
    -moz-animation-duration: 5s;
    -moz-animation-iteration-count: infinite;
    -moz-transition: all 500ms ease;
  }

  @keyframes bridge-scroll {
    0% {
      transform: translate(0px, 0px);
    }
    100% {
      transform: translate(-32px, 18.48px);
    }
  }

  @keyframes fadein {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%
    }
  }

  @keyframes car-swerve {
    0% {
      transform: translate(0px, 0px);
    }
    100% {
      transform: translate(25px, 14.5px);
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

  .item-group:hover .item-svg{
    filter: drop-shadow(0 0 1em #bd0000ef);
    scale: 120%;
  }

</style>
