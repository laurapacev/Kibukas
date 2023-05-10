<template>
  <div v-if="recipientUid">

    <div class="chat-box chat-scrollbar overflow-auto">

      <div v-for="message in messages">
        <SentMessage v-if="message.status == 'sent'" :docId="message.id">{{ message.message }}</SentMessage>
        <RecievedMessage v-else :docId="message.id">{{ message.message }}</RecievedMessage>
      </div>

    </div>

    <ChatInput @message="sendMessage"></ChatInput>

  </div>
  <div v-else class="no-chat-container">
    <h5 class="no-chat-notice">Select or create new chat</h5>
  </div>
</template>

<script>
import SentMessage from './SentMessage.vue'
import RecievedMessage from './RecievedMessage'
import ChatInput from './ChatInput.vue'

import { Firebase } from '../../mixins/Firebase'

import { collection, query, where, onSnapshot } from "firebase/firestore";

export default {
  components: { SentMessage, RecievedMessage, ChatInput },
  mixins: [ Firebase ],
  props: {
    recipientUid: { default: null }
  },
  watch: { 
    // When user changes with who to chat, recipientUid is is changed
    // so we load chats  
    recipientUid: async function(new_recipient_uid, old_recipient_uid) 
    {
      this.subscribeNewMessage(new_recipient_uid)
    }
  },
  data() {
    return {
      user_uid: this.$store.getters.getUser.uid,
      messages: []
    }
  },
  methods: {
    async getUserMessagesArray() {
      const user_uid = this.$store.getters.getUser.uid
      let messages;

      let sent_msgs = await this.getSentMessages(user_uid, this.recipientUid)
      let recieved_msgs = await this.getRecievedMessages(user_uid, this.recipientUid)

      // Merge sent and recieved messages into one array
      messages = sent_msgs.concat(recieved_msgs)

      // Sort messages by timestamp (newest messages at the top)
      messages.sort((a,b) => b.timestamp - a.timestamp); // b - a for reverse sort


      return messages
    },
    mergeArray(to, from)
    {
      from.forEach((item) => to.push(item))
      return to
    },
    // Get user sent messages
    async getSentMessages(user_uid, recipient_uid)
    {
      let sentArr = await this.getDocumentsTwoWhere('messages', 'from', '==', user_uid, 'to', '==', recipient_uid)
      if(sentArr == false ) return []

      sentArr.map(obj => { obj.status = 'sent'})  // adds status, that message was sent

      return sentArr
    },
    // Get user recieved messages
    async getRecievedMessages(user_uid, sender_uid)
    {
      let recievedArr = await this.getDocumentsTwoWhere('messages', 'to', '==', user_uid, 'from', '==', sender_uid)
      if(recievedArr == false ) return []

      recievedArr.map(obj => { obj.status = 'recieved' }) // adds status, that message was recieved

      return recievedArr
    },
    async sendMessage(text)
    {
      if(!text) return

      this.setDocument('messages', {
        from: this.$store.getters.getUser.uid,
        to: this.recipientUid,
        message: text,
        timestamp: new Date().getTime()
      })
    },
    subscribeNewMessage(recipient_uid)
    {
      const q = query(collection(this.getDb(), "messages"), where("from", "==", this.user_uid), where('to', '==', recipient_uid));
      const unsubscribe = onSnapshot(q, async (querySnapshot) => {
        this.messages = await this.getUserMessagesArray()
      });
    }
  }
}
</script>

<style>
.chat-box {
  height: calc(100vh - 130px);
  padding: 20px;
}

.dm-container {
  width: 100%;
  overflow: hidden;
}

.dm-message {
  border-radius: 6px;
  padding: 10px 16px;
  font-size: 15px;
  max-width: 85%;
}

.no-chat-container {
  position: relative;
  height: 100%;
}

.no-chat-notice {
  text-align: center;
  top: 50%;
  position: absolute;
  left: 50%;
}
</style>
