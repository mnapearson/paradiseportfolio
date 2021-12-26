<template>
  <div>
    <div class="nav-links">
      <router-link class="link" to="/"
        ><div class="link logo">
          <span
            class="iconify"
            data-icon="codicon:smiley"
            data-flip="horizontal"
          ></span>
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
  margin: 1rem;
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

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0;
}

.iconify {
  margin-right: 0.5rem;
}
</style>
