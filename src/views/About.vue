<template>
  <div>
    <div class="nav-links">
      <router-link class="link rainbow" to="/">About</router-link>
    </div>
    <div class="about-text">
      <p>
        michaela pearson is the founder of paradise studio. she is a creative
        web designer and frontend web developer.
      </p>

      <p>
        she holds a degree in sociology and has a deep a passion for speciality
        coffee and vintage clothing.
      </p>
      <p>
        to learn more about michaela and paradise studio, explore the projects
        and feel free to get in touch via the contact form.
      </p>
    </div>
    <div class="nav-links bottom">
      <router-link class="link rainbow" to="/projects">Projects</router-link>
      <router-link class="link rainbow" to="/contact">Contact</router-link>
    </div>

    <div class="home-image"><img src="../images/logo.png" alt="" /></div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.home-image {
  position: fixed;
  bottom: -1%;
  right: 0;
}

.home-image img {
  height: 400px;
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

.about-text {
  font-size: 28px;
  text-align: center;
  margin: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;
}

@media only screen and (max-width: 850px) {
  .about-text {
    font-size: 22px;
    width: 100%;
    margin: 0;
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
