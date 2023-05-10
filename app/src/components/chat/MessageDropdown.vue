<template>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#" onclick="return false;" @click="deleteMessage()">Delete</a></li>
  </ul>

</template>

<script>
import { Firebase } from '@/mixins/Firebase'

export default {
  mixins: [ Firebase ],
  props: { 
    docId: { required: true }
  },
  data() {
    return {
      
    }
  },
  methods: {
    async deleteMessage()
    {
      await this.deleteDocument('messages', this.docId)
      this.$emit('delete', this.docId)
    }
  },
  created()
  {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  }
}
</script>

<style></style>
