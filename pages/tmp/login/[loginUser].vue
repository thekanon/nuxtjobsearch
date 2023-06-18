<template>
  <div>login success</div>
  <p>{{ $route.params }}</p>
  <button @click="addCount">add quokka</button>
  <button @click="addCount2">add quokka2</button>
  <button @click="addCount3">remove quokka3</button>
  <button @click="addDoubleQuokka">quokka * 2</button>
  <div class="quokkas">
    <div
      v-for="(item, index) in Array.from(
        { length: counter.count },
        (v, i) => i + 1
      )"
      :key="index"
    >
      <Quokka :name="name" :item="item" :index="index" />
    </div>
  </div>
</template>
<script setup>
import { useCounterStore } from "@/stores/counter";
import { useUniqueNameStore } from "@/stores/name";
import Quokka from "@/components/Quokka.vue";

const counter = useCounterStore();
const name = useUniqueNameStore();

const addCount = () => {
  counter.count++;
};
const addCount2 = () => {
  counter.$patch({ count: counter.count + 1 });
};
const addCount3 = () => {
  counter.clearCount();
};
const addDoubleQuokka = () => {
  counter.count = counter.doubleCount;
};
</script>
<style scoped>
.quokkas {
  display: flex;
  flex-direction: row;
  max-width: 100%;
  flex-wrap: wrap;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
}
.happy {
  color: red;
}
</style>
