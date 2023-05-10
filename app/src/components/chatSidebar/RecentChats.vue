<template>
    <ul class="list-group chat-scrollbar recent-chats-container overflow-auto">
      
      <div v-for="recent in chats">
        <RecentChatsItem :userData="recent" :latestMsg="recent" @recipientUid="(uid) => $emit('recipientUid', uid)">text</RecentChatsItem>
      </div>

    </ul>
</template>

<script>
// Componets
import RecentChatsItem from './RecentChatsItem'
import { Firebase } from '../../mixins/Firebase'

export default {
  components: { RecentChatsItem },
  mixins: [ Firebase ],
  data() {
    return {
      chats: []
    }
  },
  methods: {
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
