<template>

  <header1  v-if="header=='h1'" :title="title"></header1>
  <header2  v-if="header=='h2'" :title="title"></header2>
  <header3  v-if="header=='h3'" :title="title"></header3>
  <header4  v-if="header=='h4'" :title="title"></header4>
  <header5  v-if="header=='h5'" :title="title"></header5>
  <header6  v-if="header=='h6'" :title="title"></header6>
  <paragraph :article="article"></paragraph>

</template>

<script>
  export default {
    name: "harticle",
    components: {
      'header1': fetchBlock('header1'),
      'header2': fetchBlock('header2'),
      'header3': fetchBlock('header3'),
      'header4': fetchBlock('header4'),
      'header5': fetchBlock('header5'),
      'header6': fetchBlock('header6'),
      'paragraph': fetchBlock('paragraph')
    },
    props: {
      header: {
        type: String,
        default: "h2"
      },
      title: {
        type: String,
        default: "Message Header"
      },
      article: {
        type: String,
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
