<template>
  <div>
    <nav>
      <div>
        <router-link class="link" to="/">Paradise Studio</router-link>
      </div>
      <div>
        <router-link class="link" to="/about">About</router-link>
        <router-link class="link" to="/projects">Projects</router-link>
        <router-link class="link" to="/contact">Contact</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped></style>
