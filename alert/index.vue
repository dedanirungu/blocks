<template>
    <div class='alert alert-{{ color }}' role='alert'>
        {{ message }}
    </div>
</template>
<script>
  export default {
    name: "alert",
    props: {
      message: {
        type: String,
        default: 'A simple primary alert—check it out!'
      },color: {
        type: String,
        default: 'success'
      },
    },
    data () {
      return {
        sample: 'nested!'
      }
    }
  }
</script>

<style scoped>
  .example {
    color: red;
  }
</style>
