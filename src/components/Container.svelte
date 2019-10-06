<style>
  @-webkit-keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  #curtain-left {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    position: absolute;
    pointer-events: none;
    user-drag: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    top: 0;
    left: 0;
    z-index: 100;
    -moz-animation-name: fadeLeft;
    -moz-animation-iteration-count: 1;
    -moz-animation-timing-function: ease-out;
    -moz-animation-duration: 2s;
    -webkit-animation-name: fadeLeft;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: ease-out;
    -webkit-animation-duration: 2s;
    animation-name: fadeLeft;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
    animation-duration: 2s;
  }
  #curtain-left:hover {
    transform: scale(1.1);
    transition: 0.05s;
  }

  @-moz-keyframes fadeRight {
    0% {
      -moz-transform: translateX(200px);
    }
    100% {
      -moz-transform: translateX(0);
    }
  }
  @-webkit-keyframes fadeRight {
    0% {
      -webkit-transform: translateX(200px);
    }
    100% {
      -webkit-transform: translateX(0);
    }
  }
  @keyframes fadeRight {
    0% {
      transform: translateX(200px);
    }
    100% {
      transform: translateX(0);
    }
  }

  #curtain-right {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    position: absolute;
    pointer-events: none;
    user-drag: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    top: 0;
    right: 0;
    position: absolute;
    z-index: 100;
    -moz-animation-name: fadeRight;
    -moz-animation-iteration-count: 1;
    -moz-animation-timing-function: ease-out;
    -moz-animation-duration: 2s;
    -webkit-animation-name: fadeRight;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: ease-out;
    -webkit-animation-duration: 2s;
    animation-name: fadeRight;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
    animation-duration: 2s;
  }
  @-moz-keyframes fadeLeft {
    0% {
      -moz-transform: translateX(-200px);
    }
    100% {
      -moz-transform: translateX(0);
    }
  }
  @-webkit-keyframes fadeLeft {
    0% {
      -webkit-transform: translateX(-200px);
    }
    100% {
      -webkit-transform: translateX(0);
    }
  }
  @keyframes fadeLeft {
    0% {
      transform: translateX(-200px);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
