<template>
  <div class="row justify-content-between chats-header">
    <div class="col-4">
      <h4>Chats</h4>
    </div>
    <div class="col-4 text-end">
      <a class="new-message-link" href=""><i class="fa-solid fa-pen-to-square new-message-icon"></i></a>
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
.chats-header {
  padding: 20px 0px;
}

.chats-header h4 {
  font-weight: bold;
}

.new-message-link {
  text-decoration: none;
  color: #fff;
}

.new-message-icon {
  text-decoration: none;
  color: #fff;
  font-weight: normal;
  font-size: 20px;
}
</style>
