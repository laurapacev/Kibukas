<template>

  <div class="dm-container">
    <div class="dm-message dm-sent mb-2">
      <slot></slot>
    </div>
  </div>

</template>

<script>
export default {
  props: { 
    docId: { required: true } 
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style>

.dm-sent {
  background-color: RGBA(13,110,253,1) !important;
  float: right;
}

</style>
