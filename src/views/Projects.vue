<template>
  <div>
    <div class="projects-gallery">
      <carousel :per-page="1" :mouse-drag="true" :loop="true">
        <slide class="slide">
          <div class="project">
            <a href="https://hbmusic.netlify.app/#/">
              <img src="../images/henrik.png" alt=""
            /></a>
            <div class="project-description">
              <p>vue.js, email.js, html5, css, javascript</p>
            </div>
          </div> </slide
        ><slide class="slide">
          <div class="project">
            <a href="https://projketkoerpertherapie.netlify.app/#/">
              <img src="../images/mohsen.png" alt=""
            /></a>
            <div class="project-description">
              <p>vue.js, email.js, html5, css, javascript</p>
            </div>
          </div> </slide
        ><slide class="slide"
          ><div class="project">
            <a href="http://ispyleipzig.de">
              <img src="../images/ispy.png" alt=""
            /></a>
            <div class="project-description">
              <p>vue.js, firebase, html5, css, javascript</p>
            </div>
          </div></slide
        ><slide class="slide"
          ><div class="project">
            <a href="https://wellroundedhoodlum.netlify.app/">
              <img src="../images/wrh.png" alt=""
            /></a>
            <div class="project-description">
              <p>javascript, html5, css</p>
            </div>
          </div></slide
        ><slide class="slide"
          ><div class="project">
            <a href="https://hallocity.org">
              <img src="../images/hallocity.png" alt=""
            /></a>
            <div class="project-description">
              <p>technical project manager</p>
            </div>
          </div></slide
        ><slide class="slide"
          ><div class="project">
            <a href="https://devhausleipzig.de/">
              <img src="../images/devhaus.png" alt=""
            /></a>
            <div class="project-description">
              <p>react.js, html5, sass, javascript</p>
            </div>
          </div></slide
        ><slide class="slide"
          ><div class="project">
            <a href="https://celestial-weather.netlify.app/">
              <img src="../images/celestial.png" alt=""
            /></a>
            <div class="project-description">
              <p>javscript, html5, css, restAPI</p>
            </div>
          </div></slide
        ><slide class="slide"
          ><div class="project">
            <a href="https://zencal-b5217.web.app/calendar">
              <img src="../images/zencal.png" alt=""
            /></a>
            <div class="project-description">
              <p>vue.js, firebase, html5, css, javascript</p>
            </div>
          </div>
        </slide></carousel
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
};
</script>

<style scoped>
.home-image {
  position: fixed;
  bottom: -1%;
  right: 0;
}

.home-image img {
  height: 200px;
  width: auto;
}

.link {
  text-decoration: none;
  color: black;
  font-size: 125px;
}

.nav-links {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  line-height: 6rem;
}

.bottom {
  position: fixed;
  bottom: 0;
}

.project {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.project img {
  width: 650px;
  border: 1px solid black;
}
@media only screen and (max-width: 850px) {
  .project img {
    width: 350px;
    border: 1px solid black;
  }

  .link {
    font-size: 60px;
  }

  .nav-links {
    line-height: 3rem;
    margin: 0;
  }
  .home-image img {
    height: 90px;
  }
}
</style>
