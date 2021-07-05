<template>
  <div class="card-container" :class="{pointer: pointer}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    pointer: Boolean,
  }
};
</script>

<style>
.card-container {
  padding: 10px;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  width: 90%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  transition: box-shadow 200ms;
  position: relative;
}

.pointer{
  cursor: pointer;
}

@media screen and (min-width: 992px) {
  .card-container {
    width: 50%;
  }
}
.card-container:hover {
  box-shadow: 0px 0px 10px#c2c2c2;
}
</style>