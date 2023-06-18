<template>
  이 쿼카의 이름은 {{ name }}이고, 나이는 {{ age }}살입니다.
  <button @click="addAge">나이 먹기</button>
</template>
<script setup>
const addAge = () => {
  age.value++;
};
</script>
<style scoped></style>
