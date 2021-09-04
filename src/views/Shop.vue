<template>
  <div class="image">
    <a
      class="link"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.depop.com/paradisestudio/"
    >
      <img src="../images/shop.png" alt="" />

      <p class="link">check out the shop</p></a
    >
    <div class="pop-up-dates">
      <p>upcoming markets</p>
      <div class="markets">
        <a
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/events/226213609421853"
          >05.09 @Heiter Bis Wolkig
        </a>
        <a
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.cafeocka.de/"
          >19.09 @Ocka Cafe
        </a>
      </div>
    </div>
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

.link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.link:hover {
  text-decoration: underline;
}

.pop-up-dates {
  display: flex;
}

img {
  width: 80vw;
}
</style>
