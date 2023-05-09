<template>

  <div style="display: inline">
    <a class="chat-header-link position-relative" href="" onclick="return false;" data-bs-toggle="dropdown">
        <i class="fa-solid fa-bell new-message-icon"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {{ friendRequests.length }}
        <span class="visually-hidden">unread messages</span>
      </span>
    </a>
    <ul class="dropdown-menu" v-if="this.fetched == true">
      <li v-for="request in friendRequests">
        <div class="request-li">
          <label>{{ request.email }}</label>
          <a href="#" class="link link-primary" @click="acceptRequest(request.id, request.from, request.to)">Accept</a>
          <a href="#" class="link link-danger" @click="denyRequest(request.id)">Deny</a>
        </div>
      </li>

      <li v-if="friendRequests.length === 0"><label class="dropdown-item">No requests</label></li>
    </ul>
  </div>

</template>

<script>
import { Firebase } from '@/mixins/Firebase'

export default {
  mixins: [ Firebase ],
  data() {
    return {
      friendRequests: [],
      userEmail: null,
      fetched: false
    }
  },
  methods: {
    async getFriendRequestArray()
    {
      const user_uid = this.$store.getters.getUser.uid
      const requests = await this.getDocumentsWhere('friendRequests', 'to', '==', user_uid)

      if(requests !== false) return requests

      return []
    },
    async addEmailToFriendRequests() {
      for(let i=0; i < this.friendRequests.length; i++)
      {
        this.friendRequests[i].email = (await this.getDocumentsWhere('users', 'uid', '==', this.friendRequests[i].from)).pop().email
      }
      this.fetched = true
    },
    async denyRequest(doc_id)
    {
      this.deleteFriendRequest(doc_id)
    },
    async acceptRequest(doc_id, fromUid, toUid)
    {
      const user_uid = this.$store.getters.getUser.uid

      // Add friend to user friends list
      await this.setDocument('friends', {
        uid: fromUid,
        friendUid: toUid
      })

      // Add user to another persons friend list
      await this.setDocument('friends', {
        uid: toUid,
        friendUid: fromUid
      })

      this.deleteFriendRequest(doc_id)
    },
    async deleteFriendRequest(doc_id) 
    {
      await this.deleteDocument('friendRequests', doc_id)
      this.removeNotificationFromArray(doc_id)
    },
    removeNotificationFromArray(doc_id)
    {
      for(let i=0; i < this.friendRequests.length; i++)
      {
        if(this.friendRequests[i].id == doc_id) {
          this.friendRequests.splice(i, 1)
          break
        }
      }
    }
  },
  async created()
  {
    this.friendRequests = await this.getFriendRequestArray()
    await this.addEmailToFriendRequests()
  }
}
</script>

<style>
.link {
  text-decoration: none;
  margin-left: 5px;
}

.link:hover {
  text-decoration: underline;
}

.request-li {
  padding: 0 10px;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
