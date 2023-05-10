<template>
  <a v-if="fetched == true" href="#" @click="changeRecipient()" onclick="return false;" class="list-group-item recent-chat recent-read">
    <div class="row">

      <div class="col-md-auto">
        <i class="fa-solid fa-circle-user recent-profile"></i>
      </div>

      <div class="col">
        <div class="d-flex w-100 justify-content-between">

          <h5 class="mb-1">{{ userData.email }}</h5>

          <!-- <span class="badge bg-primary rounded-pill">14</span >-->
          <small>{{ getTimeAgo(msg.timestamp) }}</small>

        </div>
        <div class="d-flex w-100 justify-content-between">
          <p class="mb-1 recent-message">

            {{ msg.message }}

          </p>
        </div>
      </div>

    </div>
  </a>

</template>

<script>
export default {
  props: {
    userData: { required: true },
    latestMsg: { required: true }
  },
  data() {
    return {
      fetched: false,
      msg: []
    }
  },
  methods: {
    getTimeAgo(timestamp) {
      const dateNow = new Date()
      const dateMsg = new Date(timestamp)

      const dateDiff = Math.abs(dateNow - dateMsg)
      const diffDays = Math.floor(dateDiff / (1000 * 60 * 60 * 24)); 
      const diffHours = Math.floor(dateDiff / (1000 * 60 * 60)); 
      const diffMins = Math.floor(dateDiff / (1000 * 60));
      const diffSeconds = Math.floor(dateDiff / (1000));

      if(diffDays != 0) return `${diffDays} days`
      if(diffHours != 0) return `${diffHours} h`
      if(diffMins != 0) return `${diffMins} min`
      if(diffSeconds != 0) return `${diffSeconds} s`

      return ''
    },
    changeRecipient()
    {
      this.$emit('recipientUid', this.userData.uid)
    }
  },
  async created()
  {
    this.msg = await this.latestMsg
    if(this.msg.timestamp && this.msg.timestamp > 0) this.fetched = true
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
