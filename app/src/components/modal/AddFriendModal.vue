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
      async addFriend()
      {
        if(!this.friendEmail) {
          this.showAlert(true, "Field is empty", 'danger')
          return
        }

        const user_uid = this.$store.getters.getUser.uid
        const addFriend_uid = await this.getUidByEmail(this.friendEmail)

        if(!addFriend_uid) {
          this.showAlert(true, "User not found", 'danger')
          return
        }

        if(await this.isUserInFriendsList(user_uid, addFriend_uid)) {
          this.showAlert(true, "User is already in friend list", 'danger')
          return
        }

        if(await this.isRequestSent(user_uid, addFriend_uid)) {
          this.showAlert(true, "Friend request is already sent", 'danger')
          return
        }

        this.setDocument("friendRequests", {
          from: user_uid,
          to: addFriend_uid
        })

        this.showAlert(true, "Friend request sent!", 'success')
      },
      async getUidByEmail(email)
      {
        const user = await this.getDocumentsWhere('users', 'email', '==', email)
        
        if(user !== false) return user.pop().uid
        return false
      },
      async isUserInFriendsList(user_uid, fiend_uid)
      {
        const user = await this.getDocumentsTwoWhere('friends', 'uid', '==', user_uid, 'friendUid', '==', fiend_uid)

        if(user !== false) return user.pop().uid
        return false
      },
      async isRequestSent(user_uid, fiend_uid)
      {
        const request = await this.getDocumentsTwoWhere('friendRequests', 'from', '==', user_uid, 'to', '==', fiend_uid)
        
        if(request !== false) return true
        return false
      }
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
  