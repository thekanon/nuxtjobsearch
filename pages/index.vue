<template>
  <div class="container">
    <h1 class="title">타이틀</h1>
    <div class="search">
      <Input />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import Input from "~/components/atoms/Input.vue";
export default {
  name: "IndexPage",
  components: {
    Input: Input,
  },
  setup() {
    const searchText = ref("");

    const search = () => {
      console.log(searchText.value); // 검색 로직 구현
    };

    return {
      searchText,
      search,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background-color: #333;
  color: #f8f8f8;
}

.title {
  margin-bottom: 1rem;
}

.search input {
  margin-right: 1rem;
}
</style>
