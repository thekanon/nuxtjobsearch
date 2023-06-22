<template lang="">
  <v-list dense class="sideUserInfo">
    <v-list-item>
      <v-list-item-title>
        <Text :text="userMessage" />
      </v-list-item-title>
    </v-list-item>
    <v-card-actions>
      <v-btn variant="outlined"> 계정관리 </v-btn>
      <v-btn variant="outlined"> 로그아웃 </v-btn>
    </v-card-actions>
  </v-list>
</template>
<script setup>
import { defineProps, computed } from "vue";
import Text from "~/components/atoms/Text.vue";

const props = defineProps({
  userInfo: {
    type: Object,
    default: () => {},
    required: true,
  },
});

const userMessage = computed(
  () => `안녕하세요, 
  ${props.userInfo.name}(${props.userInfo.company})님!
  환영합니다.`
);
</script>
<style>
.sideUserInfo {
  background-color: #eeeeee;
  color: #000000;
}
</style>
