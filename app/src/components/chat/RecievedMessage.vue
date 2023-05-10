<template>

  <div class="dm-container">
    <div class="dm-message dm-recieved mb-2">
      <slot></slot>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style>
.dm-recieved {
  background-color: #e9e9ea !important;
  color: black;
  float: left;
}
</style>
