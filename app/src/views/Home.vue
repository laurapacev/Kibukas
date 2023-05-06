<template>

  <div class="container">
    <div class="row">
      <div class="col-4 chat-list-column ">
        <ChatsHeader></ChatsHeader>
        <RecentChats @recipientUid="changeRecipient"></RecentChats>
      </div>
      <div class="col chat-column">
        <ChatBox :recipientUid="recipientUid"></ChatBox>
      </div>
    </div>
  </div>

</template>

<script>
// Componets
import ChatsHeader from '../components/chat/ChatsHeader.vue'
import RecentChats from '../components/chat/RecentChats'
import ChatBox from '../components/chat/ChatBox'

export default {
  components: { RecentChats, ChatsHeader, ChatBox },
  data () {
    return {
      recipientUid: null
    }
  },
  methods: {
    changeRecipient(uid)
    {
      this.recipientUid = uid
    }
  }
}
</script>

<style>
.chat-list-column {
  min-width: 320px;
}
.chat-column {
  background-color: linear-gradient(#ffffff, #1f1d2b) !important;
}
</style>
