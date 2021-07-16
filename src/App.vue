<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Shrikhand&display=swap");
* {
  font-family: "Shrikhand", cursive;
  cursor: url("/cursor.cur"), auto;
}

.rainbow {
  -webkit-animation: rainbow 4s infinite;
  -ms-animation: rainbow 4s infinite;
  -o-animation: rainbow 4s infinite;
  animation: rainbow 4s infinite;
}
@-webkit-keyframes rainbow {
  0% {
    color: #ff0000;
  }
  10% {
    color: #ff8000;
  }
  20% {
    color: #ffff00;
  }
  30% {
    color: #80ff00;
  }
  40% {
    color: #00ff00;
  }
  50% {
    color: #00ff80;
  }
  60% {
    color: #00ffff;
  }
  70% {
    color: #0080ff;
  }
  80% {
    color: #0000ff;
  }
  90% {
    color: #8000ff;
  }
  100% {
    color: #ff0080;
  }
}
@-ms-keyframes rainbow {
  0% {
    color: #ff0000;
  }
  10% {
    color: #ff8000;
  }
  20% {
    color: #ffff00;
  }
  30% {
    color: #80ff00;
  }
  40% {
    color: #00ff00;
  }
  50% {
    color: #00ff80;
  }
  60% {
    color: #00ffff;
  }
  70% {
    color: #0080ff;
  }
  80% {
    color: #0000ff;
  }
  90% {
    color: #8000ff;
  }
  100% {
    color: #ff0080;
  }
}
@-o-keyframes rainbow {
  0% {
    color: #ff0000;
  }
  10% {
    color: #ff8000;
  }
  20% {
    color: #ffff00;
  }
  30% {
    color: #80ff00;
  }
  40% {
    color: #00ff00;
  }
  50% {
    color: #00ff80;
  }
  60% {
    color: #00ffff;
  }
  70% {
    color: #0080ff;
  }
  80% {
    color: #0000ff;
  }
  90% {
    color: #8000ff;
  }
  100% {
    color: #ff0080;
  }
}
@keyframes rainbow {
  0% {
    color: #ff0000;
  }
  10% {
    color: #ff8000;
  }
  20% {
    color: #ffff00;
  }
  30% {
    color: #80ff00;
  }
  40% {
    color: #00ff00;
  }
  50% {
    color: #00ff80;
  }
  60% {
    color: #00ffff;
  }
  70% {
    color: #0080ff;
  }
  80% {
    color: #0000ff;
  }
  90% {
    color: #8000ff;
  }
  100% {
    color: #ff0080;
  }
}
</style>
