<template>
  <a href="#" @click="changeRecipient()" onclick="return false;" class="list-group-item recent-chat recent-read">
    <div class="row">

      <div class="col-md-auto">
        <i class="fa-solid fa-circle-user recent-profile"></i>
      </div>

      <div class="col">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ name }}</h5>
          <!-- <span class="badge bg-primary rounded-pill">14</span >-->
          <small>{{ getTimeAgo() }}</small>
        </div>
        <div class="d-flex w-100 justify-content-between">
          <p class="mb-1 recent-message"><slot></slot></p>
        </div>
      </div>

    </div>
  </a>

</template>

<script>
export default {
  props: {
    name: { required: true },
    uid: { required: true }
  },
  data() {
    return {
      
    }
  },
  methods: {
    getTimeAgo() {
      return '3 days'
    },
    changeRecipient()
    {
      this.$emit('recipientUid', this.uid)
    }
  }
}
</script>

<style>
.list-group-item {
  border: none;
}

.recent-chat {
  background-color: transparent;
}

.recent-chat:hover {
  color: #c8bcff;
}

.recent-read {
  color: #bcbcbc;
  border-left: rgba(255, 255, 255, 0) solid 5px;
}
.recent-unread {
  color: #fff;
  border-left: rgb(63, 55, 100) solid 5px;
}

.recent-profile {
  line-height: 55px;
  font-size: 36px;
}

.recent-message {
  filter: brightness(85%);
  opacity: 0.5;
}
</style>
