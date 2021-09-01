<template>
  <div>
    <div class="about">
      <div class="about-text">
        <p>
          michaela pearson is the founder of paradise studio. she is a creative
          UX/UI designer and frontend web developer.
        </p>

        <p>
          to learn more about michaela and paradise studio, explore the recent
          projects and get in touch via the contact form.
        </p>
      </div>
      <router-link class="link" to="/projects">explore</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about-text {
  font-size: 24px;
  text-align: left;
  margin: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 60%;
}
. @media only screen and (max-width: 850px) {
  .about-text {
    font-size: 22px;
    width: 100%;
    margin: 0;
  }
}
</style>
