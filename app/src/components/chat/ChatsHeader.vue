<template>
  <div class="row justify-content-between chats-header">
    <div class="col-4">
      <h4>Chats</h4>
    </div>
    <div class="col-4 text-end">
      <a class="chats-header-link" href="#" @click="openModal()"><i class="fa-solid fa-user-plus chats-header-icon"></i></a>
      <a class="chats-header-link" href="#"><i class="fa-solid fa-pen-to-square chats-header-icon"></i></a>
    </div>

    <AddFriendModal v-show="showAddFriend" @close="closeModal()"></AddFriendModal>

  </div>
</template>

<script>
import AddFriendModal from '../modal/AddFriendModal.vue';

export default {
  components: { AddFriendModal },
  data() {
    return {
      showAddFriend: false
    }
  },
  methods: {
    openModal()
    {
      this.showAddFriend = true
    },
    closeModal()
    {
      this.showAddFriend = false
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

.chats-header-link {
  text-decoration: none;
  color: #fff;
}

.chats-header-icon {
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  margin-left: 10px;
}
</style>
