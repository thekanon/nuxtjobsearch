<template>
  <div id="app">
    <AppHeader />
    <div class="app-body">
      <AppSidebar />
      <AppContent />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import AppHeader from "@/components/template/AppHeader.vue";
import AppSidebar from "@/components/template/AppSidebar.vue";
import AppContent from "@/components/template/AppContent.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppSidebar,
    AppContent,
  },
};
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
