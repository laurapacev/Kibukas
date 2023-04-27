<template>
  <div class="chat-box chat-scrollbar overflow-auto">

    <div class="row">
      <div class="col-md-4"><RecievedMessage>a</RecievedMessage></div>
      <div class="col-md-4 offset-md-4"></div>
    </div>

    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4 offset-md-4 col-auto">
        <SentMessage>ajhgjhgjhgjghjghjghjghjg gjghjhgjghj hgjghjghj
          kjhkjhkh
          kjkjl

          jklkjljkljkljklkj
        </SentMessage>
      </div>
    </div>


  </div>
</template>

<script>
import SentMessage from './SentMessage.vue'
import RecievedMessage from './RecievedMessage'

export default {
  components: { SentMessage, RecievedMessage },
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style>
.dm-message {
  border-radius: 6px;
  padding: 6px;
  font-size: 15px;
  display: inline-block;
}
</style>
