<template>
  <div>
    <div class="about">
      <div class="about-text">
        <p>
          hi, i'm micha, the founder of paradise studio. i am a creative UX/UI
          designer and frontend web developer.
        </p>
        <p>
          i also enjoy collecting and selling vintage and secondhand clothing on
          <a
            class="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.depop.com/paradisestudio/"
            >Depop</a
          >
          and curate 'Paradise Radio' on Leipzig's local station
          <a
            class="link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.radioblau.de/en/redaktion/paradise-radio/"
            >Radio Blau</a
          >.
        </p>
        <p>
          to learn more about my projects get in touch via the contact form.
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
  font-size: 20px;
  text-align: left;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 55%;
}

a {
  text-decoration: none;
  color: black;
}

@media only screen and (max-width: 850px) {
  .about-text {
    width: 100%;
    margin: 0;
  }
}
</style>
