<template>
  <div id="app">
    <Nav></Nav>
    <router-view class="main" />
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&family=Sarpanch&display=swap");

body {
  font-family: "Poppins", sans-serif;
  cursor: url("/cursor.cur"), auto;
  background-image: url("./images/radial.png");
  /* background: rgb(238, 174, 202);
  background: linear-gradient(
    360deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(242, 245, 249, 1) 100% */
  /* ); */
  height: 100vh;
}

.link {
  cursor: url("/cursor.cur"), auto;
}
</style>
