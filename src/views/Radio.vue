<template>
  <div class="radio">
    <iframe
      src="https://open.spotify.com/embed/playlist/5OvCUt2B9Ve4it67Ja0ckq?theme=0"
      width="50%"
      height="80"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
    <iframe
      src="https://open.spotify.com/embed/playlist/4Zgo2Hih9nHSRpnJpKGCzQ?theme=0"
      width="50%"
      height="80"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
    <iframe
      src="https://open.spotify.com/embed/playlist/6d93n3fJGk5s2GagiM9ZuK?theme=0"
      width="50%"
      height="80"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
    <iframe
      src="https://open.spotify.com/embed/playlist/59ARbmu0viRP9tG2TG3RYY?theme=0"
      width="50%"
      height="80"
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
  overflow: hidden;
}

iframe {
  margin: 1rem;
}
</style>
