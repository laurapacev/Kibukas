<template>
  <div>

    <div class="dm-message dm-my mb-2">
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

.dm-my {
  background-color: RGBA(13,110,253,1) !important;
  float: right;
}

</style>
