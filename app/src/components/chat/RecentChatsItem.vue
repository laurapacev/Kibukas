<template>
  <router-link :to="generateChatUrl()" class="list-group-item recent-chat recent-read" aria-current="true">
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
  </router-link>

</template>

<script>
import router from '@/routes';

export default {
    components: { router },
    props: {
      name: { required: true },
      uid: { required: true }
    },
    data() {
      return {};
    },
    methods: {
      generateChatUrl() {
        return `/?uid=${this.uid}`
      },
      getTimeAgo() {
          return "3 days";
      }
    },
    
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
