<template>
  <div class="row justify-content-between chats-header">
    <div class="col-4">
      <h4>Chats</h4>
    </div>
    <div class="col-4 text-end">
      <!-- <a class="chat-header-link" href="" onclick="return false;"><i class="fa-solid fa-pen-to-square new-message-icon"></i></a> -->
      <a class="chat-header-link" href="" onclick="return false;" @click="changeModalOpenState()"><i class="fa-solid fa-user-plus new-message-icon"></i></a>
      <FriendRequestDropdown></FriendRequestDropdown>
    </div>

    <AddFriendModal v-if="showModal" @close="changeModalOpenState()"></AddFriendModal>
  </div>
</template>

<script>
import AddFriendModal from '../modal/AddFriendModal.vue';
import FriendRequestDropdown from './FriendRequestDropdown.vue';
import { Firebase } from '@/mixins/Firebase';

export default {
  components: { AddFriendModal, FriendRequestDropdown },
  mixins: [ Firebase ],
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    changeModalOpenState() {
      this.showModal  = !this.showModal
    }
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

.chat-header-link {
  text-decoration: none;
  color: #fff;
  margin-left: 15px;
}

.new-message-icon {
  text-decoration: none;
  color: #fff;
  /* font-weight: normal; */
  font-size: 20px;
}

.new-message-icon:hover {
  filter: contrast(60%);
}
</style>
