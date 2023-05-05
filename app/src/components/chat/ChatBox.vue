<template>
  <div>

    <div class="chat-box chat-scrollbar overflow-auto">

      <SentMessage>
        Suspendisse at velit quis tellus pellentesque imperdiet in sit amet purus. Aenean auctor quam sit amet mi dictum, in eleifend magna consectetur. Praesent iaculis placerat mauris, nec vestibulum augue placerat at. Fusce in pretium tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi varius felis non arcu congue, sollicitudin consequat neque interdum. Vestibulum mollis ultrices nulla, vitae mollis sem gravida vel. 
      </SentMessage>

      <RecievedMessage>
        Suspendisse at velit quis tellus pellentesque imperdiet in sit amet purus. Aenean auctor quam sit amet mi dictum, in eleifend magna consectetur. Praesent iaculis placerat mauris, nec vestibulum augue placerat at. Fusce in pretium tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi varius felis non arcu congue, sollicitudin consequat neque interdum. Vestibulum mollis ultrices nulla, vitae mollis sem gravida vel. 
      </RecievedMessage>

      <SentMessage>
        Suspendisse at velit quis tellus pellentesque imperdiet in sit amet purus. Aenean auctor quam sit amet mi dictum, in eleifend magna consectetur. Praesent iaculis placerat mauris, nec vestibulum augue placerat at. Fusce in pretium tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi varius felis non arcu congue, sollicitudin consequat neque interdum. Vestibulum mollis ultrices nulla, vitae mollis sem gravida vel. 
      </SentMessage>

      <RecievedMessage>
        Suspendisse at velit quis tellus pellentesque imperdiet in sit amet purus. Aenean auctor quam sit amet mi dictum, in eleifend magna consectetur. Praesent iaculis placerat mauris, nec vestibulum augue placerat at. Fusce in pretium tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi varius felis non arcu congue, sollicitudin consequat neque interdum. Vestibulum mollis ultrices nulla, vitae mollis sem gravida vel. 
      </RecievedMessage>

      <SentMessage>
        Suspendisse at velit quis tellus pellentesque imperdiet in sit amet purus. Aenean auctor quam sit amet mi dictum, in eleifend magna consectetur. Praesent iaculis placerat mauris, nec vestibulum augue placerat at. Fusce in pretium tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi varius felis non arcu congue, sollicitudin consequat neque interdum. Vestibulum mollis ultrices nulla, vitae mollis sem gravida vel. 
      </SentMessage>

      <RecievedMessage>
        Suspendisse at velit quis tellus pellentesque imperdiet in sit amet purus. Aenean auctor quam sit amet mi dictum, in eleifend magna consectetur. Praesent iaculis placerat mauris, nec vestibulum augue placerat at. Fusce in pretium tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi varius felis non arcu congue, sollicitudin consequat neque interdum. Vestibulum mollis ultrices nulla, vitae mollis sem gravida vel. 
      </RecievedMessage>

    </div>

    <ChatInput @message="addMessage"></ChatInput>

  </div>
</template>

<script>
import SentMessage from './SentMessage.vue'
import RecievedMessage from './RecievedMessage'
import ChatInput from './ChatInput.vue'

export default {
  components: { SentMessage, RecievedMessage, ChatInput },
  data() {
    return {
      
    }
  },
  methods: {
    addMessage(text)
    {
      console.log(text)
    }
  }
}
</script>

<style>
.chat-box {
  height: calc(100vh - 130px);
  padding: 20px;
}

.dm-container {
  width: 100%;
  overflow: hidden;
}

.dm-message {
  border-radius: 6px;
  padding: 10px 10px 10px 16px;
  font-size: 15px;
  max-width: 85%;
}
</style>
