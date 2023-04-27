<template>
  <div>

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
  background-color: #dededf !important;
  color: black;
}
</style>
