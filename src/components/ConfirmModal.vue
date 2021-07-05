<template>
  <div class="modal-container" :class="{ visible: visible }" @click="cancelClicked">
    <div class="modal-body" @click.stop="() => null">
      <div class="modal-title">
        {{ title }}
      </div>
      <div class="modal-content">
        <slot></slot>
      </div>
      <div class="modal-buttons">
        <button @click="okClicked">OK</button>
        <button @click="cancelClicked">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    visible: Boolean
  },
  methods: {
      okClicked(){
          this.$emit('confirmed')
      },
      cancelClicked(){
          this.$emit('canceled')
      }
  }
};
</script>

<style>
.modal-container {
  position: fixed;
  visibility: hidden;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 300ms;
  z-index: 2;
}

.modal-container.visible {
  visibility: visible;
  opacity: 1;
}

.modal-body{
    min-width: 300px;
    background: white;
    border-radius: 5px;
}

.modal-title{
    background: #222;
    color: white;
    border-radius: 5px 5px 0 0;
    padding: 10px;
}

.modal-content{
    padding: 20px;
}

.modal-buttons{
    padding: 10px
}

.modal-buttons button{
    background: #222;
    color: white;
    border-radius: 10px;
    border: none;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
}

</style>