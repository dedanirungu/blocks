<template>
  <h4 v-if="url == ''">{{ title }}</h4>
  <h4 v-if="url != ''">
    <router-link :to="url"> {{ title }}</router-link>
  </h4>
</template>
<script>
export default {
  name: "header4",
  props: {
    title: {
      type: String,
      default: "Heading H4",
    },
    url: {
      type: [String, Object],
      default: "",
    },
  },
  data() {
    return {
      sample: "nested!",
    };
  },
};
</script>

<style scoped>
.example {
  color: red;
}
</style>
