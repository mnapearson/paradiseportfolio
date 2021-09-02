<template>
  <div class="image">
    <img src="../images/shop.png" alt="" />
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.depop.com/paradisestudio/"
    >
      <p class="link">check out the shop</p></a
    >
    <p>
      next pop-up market
      <a
        class="link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/events/226213609421853"
        >05.09 @Heiter Bis Wolkig
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Shop",
};
</script>

<style scoped>
.image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  width: 80vw;
}
</style>
