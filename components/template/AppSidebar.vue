<template>
  <div class="sidebar">
    <v-card class="sidebar rounded-0" flat>
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
      <v-list :lines="false" class="side-list">
        <v-list-item
          class="rounded-lg"
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          color="teal"
        >
          <Nuxt-link
            :to="item.link"
            style="text-decoration: none; color: inherit"
          >
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </Nuxt-link>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script setup>
import { ref, computed, defineEmits } from "vue";
import Text from "~/components/atoms/Text.vue";
import Blank from "~/components/atoms/Blank.vue";
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
    required: true,
  },
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
console.log(userMessage.value);
</script>

<style>
.sidebar {
  width: 220px;
  background-color: white;
  color: #ffffff;
}
.side-list {
  z-index: 1;
  margin-left: 10px;
  background-color: #ffffff;
}
.sideUserInfo {
  background-color: #eeeeee;
  color: #000000;
}
.sideUserInfo button {
  z-index: 1;
  color: #1976d2;
  background-color: #ffffff;
}
</style>
