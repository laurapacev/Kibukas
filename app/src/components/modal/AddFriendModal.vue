<template>

  <div class="modal fade show modal-overlay" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false" style="color: black; display: inline">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add friend</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
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
import { auth, getAuth, getUserByEmail } from "firebase/auth";

// Mixins
import { Firebase } from '../../mixins/Firebase'

export default {
  mixins: [ Firebase ],
  data() {
    return {
      friendEmail: null
    }
  },
  methods: {
    addFriend()
    {
      /*
      getAuth()
        .getUserByEmail(this.friendEmail)
        .then((userRecord) => {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
        })
        .catch((error) => {
          console.log('Error fetching user data:', error);
        });
        */
       
      console.log(getAuth())
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
