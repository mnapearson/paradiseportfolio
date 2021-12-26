<template>
  <div class="footer">
    <cookie-law theme="royal"></cookie-law>
    <div class="footer-left">
      <router-link to="/impressum" class="link"> impressum</router-link>
      <router-link to="/datenschutz" class="link">datenschutz</router-link>
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
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
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
