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

      <div class="footer-middle">
        <a
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/m__i__c__h__a"
        >
          <span
            class="iconify link"
            data-icon="bi:twitter"
            data-flip="horizontal"
          ></span></a
        ><a
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/m___i___c___h___a___/"
        >
          <span
            class="iconify link"
            data-icon="bx:bxl-instagram-alt"
            data-flip="horizontal"
          ></span
        ></a>
        <a
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/micha-pearson-58643260/"
        >
          <span class="iconify link" data-icon="ci:linkedin"></span
        ></a>
      </div>
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
  font-size: 18px;
  text-align: left;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 70%;
}

a {
  text-decoration: none;
  color: black;
}

.footer-middle {
  margin-top: 1rem;
}
</style>
