<template>
  <div class="quokka" @click="onClickQuokka">
    <div v-if="(item + '').indexOf('7') !== -1">
      <img src="/img/quokka2.png" alt="쿼카" />
    </div>
    <div v-else>
      <img src="/img/quokka.png" alt="쿼카" />
    </div>
    <p
      v-if="name.uniqueName.findIndex((e) => e[1] === index) !== -1"
      class="happy"
    >
      {{ name.uniqueName.find((e) => e[1] === index)[0] }}(입양됨)
    </p>
    <p class="lucky" v-else-if="(item + '').indexOf('7') !== -1">
      쿼카 {{ item }}(행운의 쿼카)
    </p>
    <p v-else>쿼카 {{ item }}</p>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: {
    required: true,
  },
  item: {
    type: Number,
  },
  index: {
    type: Number,
  },
});

const onClickQuokka = () => {
  console.log("quokka clicked");
};
</script>
<style scoped>
img {
  width: 100px;
}
.lucky {
  color: blue;
}
.happy {
  color: red;
}
</style>
