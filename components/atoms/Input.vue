<template>
  <input />
</template>
<script>
export default {
  name: "Input",
  props: {
    searchText: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      title: "Input",
    };
  },
};
</script>
<style scoped>
input {
  padding: 1em;
  font-size: 1em;
  background-color: #333;
  color: #f8f8f8;
  border: 1px solid gray;
}
</style>
