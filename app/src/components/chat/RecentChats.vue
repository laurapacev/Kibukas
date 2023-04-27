<template>
    <ul class="list-group recent-chats-container overflow-auto">
      
      <div v-for="recent in array">
        <RecentChatsItem :name="recent">{{ recent }}</RecentChatsItem>
      </div>

    </ul>
</template>

<script>
// Componets
import RecentChatsItem from './RecentChatsItem'

export default {
  components: { RecentChatsItem },
  data() {
    return {
      array: ['Vartotojas', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
    }
  },
  methods: {
    
  }
}
</script>

<style>
.recent-chats-container {
  height: calc(100vh - 150px);
  scrollbar-color: #6e6691 #0000;
  scrollbar-width: thin;
}
</style>
