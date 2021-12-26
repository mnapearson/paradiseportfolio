<template>
  <div>
    <div class="nav-links">
      <router-link class="link" to="/"
        ><div class="link logo">
          <p>Paradise Studio</p>
        </div>
      </router-link>
      <div class="nav-right">
        <router-link class="link" to="/projects">Projects '21</router-link>
        <!-- <router-link class="link" to="/shop">Shop</router-link>
        <router-link class="link" to="/Radio">Radio</router-link> -->
        <router-link class="link" to="/contact">Contact</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100&family=Sarpanch&display=swap");

.link {
  margin: 0.3rem;
  text-decoration: none;
  font-family: "Sarpanch", sans-serif;
  color: black;
}

.link:hover {
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
</style>
