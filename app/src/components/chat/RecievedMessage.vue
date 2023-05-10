<template>

  <div class="dm-container">
    <div class="dropdown-container-left" data-bs-toggle="dropdown">
      <div class="dm-message dm-recieved mb-2" data-bs-toggle="tooltip" data-bs-placement="right" :data-bs-title="getMessageDate()">
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
.dropdown-container-left {
    overflow: auto;
    display: inline-block;
    float: left;
}

.dm-recieved {
  background-color: #e9e9ea !important;
  color: black;
  float: left;
}
</style>
