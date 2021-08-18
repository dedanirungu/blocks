<template>
    <h1 v-if="url == ''">{{ title }}</h1>
    <h1 v-if="url != ''"> <router-link :to="url"> {{ title }}</router-link></h1>
</template>

<script>
  export default {
    name: "header1",
    props: {
      title: {
        type: String,
        default: 'Heading H1'
      },
      url: {
        type: [String, Object],
        default: ''
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
