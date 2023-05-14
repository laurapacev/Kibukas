<template>

    <div class="modal fade show modal-overlay" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false" style="color: black; display: inline">
      
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add friend</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$emit('close')"></button>
          </div>
          <div class="modal-body">
            <alert v-if="getAlertShow() == true" :type="getAlertType()">{{ getAlertMsg() }}</alert>
            <input type="text" v-model="friendEmail" class="form-control" aria-describedby="emailHelp" placeholder="Friend email address">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="$emit('close')">Close</button>
            <button type="button" class="btn btn-primary" @click="addFriend()">Add</button>
          </div>
        </div>
      </div>
    </div>
  
  </template>
  
  <script>
  import Alert from '../Alert.vue'
  // Mixins
  import { Firebase } from '../../mixins/Firebase'
  import { AlertMixin } from '../../mixins/AlertMixin'
  
  export default {
    components: { Alert },
    mixins: [ AlertMixin, Firebase ],
    data() {
      return {
        friendEmail: null
      }
    },
    methods: {
      async removeFriend()
      {
        if(!this.friendEmail) {
          this.showAlert(true, "Field is empty", 'danger')
          return
        }

        const user_uid = this.$store.getters.getUser.uid
        const removeFriend_uid = await this.getUidByEmail(this.friendEmail)

        if(!removeFriend_uid) {
          this.showAlert(true, "User not found", 'danger')
          return
        }
      },
      async getUidByEmail(email)
      {
        const user = await this.getDocumentsWhere('users', 'email', '==', email)
        
        if(user !== false) return user.pop().uid
        return false
      },
    }
  }
  </script>
  
  <style>
  .modal-overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #0000008c;
  }
  </style>
  