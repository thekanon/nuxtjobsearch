<template>
  <div>
    Some default layout shared across all pages
    <slot />
  </div>
</template>
<script setup>
import login from "~/middleware/login";
import { useRoute } from "vue-router";
import { computed } from "vue";
addRouteMiddleware(login);
</script>
