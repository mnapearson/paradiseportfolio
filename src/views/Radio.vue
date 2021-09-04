<template>
  <div class="radio">
    <iframe
      src="https://open.spotify.com/embed/playlist/5OvCUt2B9Ve4it67Ja0ckq?theme=0"
      width="80%"
      height="200px"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
    <iframe
      src="https://open.spotify.com/embed/playlist/4Zgo2Hih9nHSRpnJpKGCzQ"
      width="80%"
      height="200px"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
    <iframe
      src="https://open.spotify.com/embed/playlist/6d93n3fJGk5s2GagiM9ZuK"
      width="80%"
      height="200px"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Radio",
};
</script>

<style scoped>
.radio {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

iframe {
  margin: 1rem;
}
</style>
