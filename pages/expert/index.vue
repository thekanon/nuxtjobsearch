<template>
  <div id="app">
    <AppHeader />
    <div class="app-body">
      <AppSidebar :items="items" @link-clicked="handleLinkClicked" />
      <div v-if="selectedComponent">
        <component :is="selectedComponent" />
      </div>
      <div v-else>
        <h2>Content</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AppHeader from "@/components/template/AppHeader.vue";
import AppSidebar from "@/components/template/AppSidebar.vue";
import Dashboard from "@/pages/expert/dashboard.vue";

const items = ref([
  { text: "대시보드", link: "/expert/dashboard" },
  { text: "임직원 관리", link: "/tmp/Page" },
  { text: "이용내역", link: "/tmp/Page" },
  { text: "계약정보", link: "/tmp/Page" },
  { text: "보고서(Phase2)", link: "/tmp/Page" },
  { text: "쿼카 입양처", link: "/tmp/Page" },
  { text: "쿼카굴", link: "/tmp/login/a" },
]);

const selectedComponent = ref(null);

function handleLinkClicked(link) {
  debugger;

  if (link === "/expert/dashboard") {
    selectedComponent.value = Dashboard;
  } else {
    selectedComponent.value = null;
    // 다른 링크에 대한 처리 추가
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.app-body {
  display: flex;
  flex-grow: 1;
  width: 100%;
}
</style>
