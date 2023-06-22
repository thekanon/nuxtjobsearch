<template>
  <!-- <header>app.vue</header> -->
  <!-- <NextHead /> -->
  <div id="app">
    <AppHeader />
    <div class="app-body">
      <AppSidebar
        :userInfo="userInfo"
        :items="items"
        @link-clicked="handleLinkClicked"
      />
      <div>
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
<script setup>
import AppHeader from "@/components/template/AppHeader.vue";
import AppSidebar from "@/components/template/AppSidebar.vue";

const items = ref([
  { text: "대시보드", link: "/expert/dashboard" },
  { text: "임직원 관리", link: "/tmp/임직원관리" },
  { text: "이용내역", link: "/tmp/이용내역" },
  { text: "계약정보", link: "/tmp/계약정보" },
  { text: "보고서(Phase2)", link: "/tmp/보고서" },
  { text: "쿼카 입양처", link: "/tmp/%EC%9E%85%EC%96%91%EC%B2%98" },
  { text: "쿼카 서식지", link: "/tmp/login/a" },
]);
const userInfo = ref({
  name: "김로니",
  company: "아토머스 코리아",
  email: "kimRoni@atomerce.com",
});
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
