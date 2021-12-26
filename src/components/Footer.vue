<template>
  <div class="footer">
    <cookie-law theme="royal"></cookie-law>
    <div class="footer-left">
      <router-link to="/impressum" class="link"> impressum</router-link>
      <router-link to="/datenschutz" class="link">datenschutz</router-link>
    </div>
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
    <div class="footer-right">
      <a
        class="link"
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:hallo@paradisestudio.de"
      >
        hallo@paradisestudio.de</a
      >
    </div>
  </div>
</template>

<script>
import CookieLaw from "vue-cookie-law";

export default {
  name: "Footer",
  components: { CookieLaw },
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.link {
  margin: 0 0.5rem;
}

.footer-left {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
}

.footer-middle {
  display: flex;
  position: fixed;
  bottom: 0;
}

.footer-right {
  display: flex;
  position: fixed;
  align-items: center;
  bottom: 0;
  right: 0;
}

.iconify {
  font-size: 20px;
  margin: 0 1rem;
}

a {
  text-decoration: none;
}
</style>
