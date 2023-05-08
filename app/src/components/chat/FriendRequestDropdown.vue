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
          <a href="#" class="link link-primary">Accept</a>
          <a href="#" class="link link-danger">Deny</a>
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
      return await this.getDocumentsWhere('friendRequests', 'to', '==', user_uid)
    },
    async addEmailToFriendRequests() {
      for(let i=0; i < this.friendRequests.length; i++)
      {
        this.friendRequests[i].email = (await this.getDocumentsWhere('users', 'uid', '==', this.friendRequests[i].from)).pop().email
      }
      this.fetched = true
    },
    test(r) {
      console.log(r)
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
}
</style>
