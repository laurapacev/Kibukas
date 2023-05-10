<template>

  <div class="chat-box-input-container">
    <input type="text" class="form-control chat-box-input" v-model="text" placeholder="Type text here..." v-on:keyup.enter="sendMessage()">
    <i class="fa-solid fa-paper-plane dm-send-icon" @click="sendMessage()"></i>
  </div>

</template>

<script>
export default {
  data() {
    return {
      text: null
    }
  },
  methods: {
    sendMessage()
    {
      if(this.text == null) return

      this.$emit('message', this.text)
      this.text = null
    }
  }
}
</script>

<style>
.chat-box-input-container {
  position: relative;
}

.chat-box-input {
  border: #3a364a 1px solid;
  background-color: #242231 !important;
  color: #bfbfbf !important;
  border-radius: 6px !important;
  margin-top: 10px;
}

.dm-send-icon {
  font-size: 19px;
  color: #ececec;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
}

.dm-send-icon:hover {
  cursor: pointer;
}
</style>
