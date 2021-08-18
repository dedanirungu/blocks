<template>
  <h3 v-if="url == ''">{{ title }}</h3>
  <h3 v-if="url != ''">
    <router-link :to="url"> {{ title }}</router-link>
  </h3>
</template>

<script>
export default {
  name: "header3",
  props: {
    title: {
      type: String,
      default: "Heading H3",
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
