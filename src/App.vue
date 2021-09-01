<template>
  <div id="app">
    <Nav></Nav>
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&family=Sarpanch&display=swap");

body {
  font-family: "Poppins", sans-serif;
  cursor: url("/cursor.cur"), auto;
  background: rgb(238, 174, 202);
  background: linear-gradient(
    360deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(242, 245, 249, 1) 100%
  );
  height: 100vh;
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
