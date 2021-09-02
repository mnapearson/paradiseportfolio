<template>
  <div class="footer">
    <div class="footer-left">
      <p class="link">impressum</p>
      <p class="link">datenschutz</p>
    </div>
    <div class="footer-right">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/paradisestudiolej/"
      >
        <span
          class="iconify link"
          data-icon="bx:bxl-instagram-alt"
          data-flip="horizontal"
        ></span></a
      ><a
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
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.link {
  margin: 0.2;
}

.footer-left {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
}

.footer-right {
  display: flex;
  position: fixed;
  align-items: center;
  bottom: 0;
  right: 0;
}

.iconify {
  font-size: 24px;
  margin: 0;
}

a {
  text-decoration: none;
}
</style>
