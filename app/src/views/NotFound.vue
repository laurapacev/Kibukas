<template>
  <div class="not-found">
    <h1 class = "pag">Page not found</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
<style>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.pag{
  color: red;
}
</style>