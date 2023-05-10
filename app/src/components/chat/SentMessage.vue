<template>

  <div class="dm-container">
    
    <div class="dropdown-container-right" data-bs-toggle="dropdown">
      <div class="dm-message dm-sent mb-2" data-bs-toggle="tooltip" data-bs-placement="left" :data-bs-title="getMessageDate()">
        <slot></slot>
      </div>    
    </div>

    <MessageDropdown :doc-id="this.docId"></MessageDropdown>
  </div>

</template>

<script>
import MessageDropdown from './MessageDropdown.vue'

export default {
  components: { MessageDropdown },
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

.dropdown-container-right {
    overflow: auto;
    display: inline-block;
    float: right;
}

.dm-sent {
  background-color: RGBA(13,110,253,1) !important;
  float: right;
}

</style>
