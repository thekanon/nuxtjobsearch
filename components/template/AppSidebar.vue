<template>
  <div class="sidebar">
    <v-card class="sidebar rounded-0" flat>
      <SideUserInfo :userInfo="userInfo" />
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
import SideUserInfo from "~/components/molecules/SideUserInfo.vue";
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
.sideUserInfo button {
  z-index: 1;
  color: #1976d2;
  background-color: #ffffff;
}
</style>
