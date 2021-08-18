<template>
  <h6 v-if="url == ''">{{ title }}</h6>
  <h6 v-if="url != ''">
    <router-link :to="url"> {{ title }}</router-link>
  </h6>
</template>
<script>
export default {
  name: "header6",
  props: {
    title: {
      type: String,
      default: "Heading H6",
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
