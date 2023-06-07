<template>
  <div>
    <h1>쿼카 입양처</h1>
    <input type="text" v-model="name" /><button @click="getQuokka">
      쿼카 입양하기
    </button>
  </div>
  <div v-show="quokkaFlag">
    <button
      @click="
        () => {
          router.push('/login/쿼카');
        }
      "
    >
      서식지로 이동하기
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useUniqueNameStore } from "~/stores/name";

const uniqueName = useUniqueNameStore();
const router = useRouter();
const name = ref("쿼카로니");
const quokkaFlag = ref(false);
const getQuokka = () => {
  alert(`${name.value}가 입양되었습니다.`);
  uniqueName.getQuokka(name.value);
  quokkaFlag.value = true;
};
</script>
