<template>
    <ul class="list-group chat-scrollbar recent-chats-container overflow-auto">
      
      <div v-for="(recent, key) in chats">
        <RecentChatsItem :userData="recent" :latestMsg="getLatestRecievedMsg(recent.uid)" @recipientUid="(uid) => $emit('recipientUid', uid)" @removeFriend="(friend_uid) => removeFriend(friend_uid, key)"></RecentChatsItem>
      </div>

    </ul>
</template>

<script>
import router from '@/routes'

// Componets
import RecentChatsItem from './RecentChatsItem'
import { Firebase } from '../../mixins/Firebase'

export default {
  components: { RecentChatsItem },
  mixins: [ Firebase ],
  data() {
    return {
      user_uid: this.$store.getters.getUser.uid,
      chats: []
    }
  },
  methods: {
    async removeFriend(friend_uid, arrayKey) {
      const friendEntry1 = await this.getDocumentsWhere('friends', 'friendUid', '==', friend_uid)
      const friendEntry2 = await this.getDocumentsWhere('friends', 'friendUid', '==', this.user_uid)

      await this.deleteDocument('friends', friendEntry1[0].id)
      await this.deleteDocument('friends', friendEntry2[0].id)

      this.chats.splice(arrayKey, 1)
      location.reload(false)
    },
    async getUserFriends() {
      const user_uid = this.$store.getters.getUser.uid
      let array = []

      const friendsUidArray = await this.getDocumentsWhere("friends", "uid", "==", user_uid)

      friendsUidArray.forEach(async (friend) => {
        const friendData = await this.getDocumentById('users', friend.friendUid)
        //console.log(friendData)
        array.push(friendData)
      })

      if(array.length = 0) return []

      return array
    },
    async getLatestRecievedMsg(sender_user_uid)
    {
      let messages = await this.getDocumentsTwoWhere('messages', 'to', '==', this.user_uid, 'from', '==', sender_user_uid)
      if(messages == false) return []

      // Sorting
      messages.sort((a, b) => a.timestamp - b.timestamp)
      //console.log(messages.pop())

      return messages.pop()
    }
  },
  async created() {
    this.chats = await this.getUserFriends()
   
    /*
    users.forEach(element => {
      const user_obj = { 
        uid: element.uid,
        name: element.email
      }

      this.chats.push(user_obj)
    });
    */
  }
}
</script>

<style>
.recent-chats-container {
  height: calc(100vh - 150px);
}
</style>
