<template>
  <!-- <header>app.vue</header>
  <NextHead /> -->
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
import Layout from "~/layouts/defaultLayout.vue";

const NextHead = defineAsyncComponent(() =>
  import("~/layouts/defaultLayout.vue")
);
</script>
