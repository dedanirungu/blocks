<template>
  <h5 v-if="url == ''">{{ title }}</h5>
  <h5 v-if="url != ''">
    <router-link :to="url"> {{ title }}</router-link>
  </h5>
</template>
<script>
export default {
  name: "header5",
  props: {
    title: {
      type: String,
      default: "Heading H5",
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
