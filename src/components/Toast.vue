<template>
  <div class="toast-container" :class="{ visible: visible }">
    <div class="toast-body" :class="type">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: Boolean,
    type: String,
    content: String
  },
};
</script>

<style>
.toast-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: 10%;
  visibility: hidden;
}

.toast-body {
  position: absolute;
  padding: 10px;
  min-width: 20%;
  border-radius: 5px;
  z-index: 1;
  opacity: 0;
  transition: opacity 300ms;
}

.toast-container.visible {
  visibility: visible;
}

.toast-container.visible .toast-body {
  opacity: 1;
}

.toast-body.success {
  background-color: rgb(51, 161, 51);
  color: white;
}

.toast-body.error {
  background-color: #d44242;
  color: white;
}
</style>