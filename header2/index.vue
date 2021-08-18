<template>
  <h2 v-if="url == ''">{{ title }}</h2>
  <h2 v-if="url != ''">
    <router-link :to="url"> {{ title }}</router-link>
  </h2>
</template>

<script>
export default {
  name: "header2",
  props: {
    title: {
      type: String,
      default: "Heading H2",
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
