<template>
  <div class="alert" :class="getType()" role="alert">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: { default: 'warning' }
  },
  data() {
    return {
      types: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark'
      ]
    }
  },
  methods: {
    getType() {
      let type = this.type
      if(type == 'error') type = 'danger'

      let element = this.types.find(element => element == type)

      if(element)
        return 'alert-' + element

      return 'alert-primary'
    }
  },
  created() {
    console.log(this.getType())
  }
}
</script>

<style></style>
