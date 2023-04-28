<template>

  <div class="modal fade show modal-overlay" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false" style="color: black; display: inline">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add friend</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <input type="text" v-model="text" class="form-control" aria-describedby="emailHelp" placeholder="Friend email address">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="$emit('close')">Close</button>
          <button type="button" class="btn btn-primary">Add</button>
        </div>
      </div>
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
.modal-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #0000008c;
}
</style>
