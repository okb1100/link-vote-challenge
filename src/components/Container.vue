<template>
  <div class="container">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: "Container"
}
</script>

<style>

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  overflow: scroll;
}
</style>