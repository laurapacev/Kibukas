<template>

  <div class="dm-container">
    <div class="dm-message dm-sent mb-2" data-bs-toggle="tooltip" data-bs-placement="left" :data-bs-title="getMessageDate()">
      <slot></slot>
    </div>
  </div>

</template>

<script>
export default {
  props: { 
    docId: { required: true },
    timestamp: { required: false } 
  },
  data() {
    return {
      
    }
  },
  methods: {
    getMessageDate()
    {
      return new Date(this.timestamp).toLocaleString('LT-lt') 
    }
  },
  created()
  {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  }
}
</script>

<style>

.dm-sent {
  background-color: RGBA(13,110,253,1) !important;
  float: right;
}

</style>
