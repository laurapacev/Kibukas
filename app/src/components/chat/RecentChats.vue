<template>
    <ul class="list-group chat-scrollbar recent-chats-container overflow-auto">
      
      <div v-for="recent in chats">
        <RecentChatsItem :name="recent.name" :uid="recent.uid" @recipientUid="(uid) => $emit('recipientUid', uid)">text</RecentChatsItem>
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
      return await this.getDocumentsWhere("users", "uid", "!=", this.$store.getters.getUser.uid)
    }
  },
  async created() {
    let users = await this.getUserFriends()

    users.forEach(element => {
      const user_obj = { 
        uid: element.uid,
        name: element.email
      }

      this.chats.push(user_obj)
    });

    console.log(this.chats)
  }
}
</script>

<style>
.recent-chats-container {
  height: calc(100vh - 150px);
}
</style>
