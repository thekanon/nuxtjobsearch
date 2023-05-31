<template>
  <div>
    <div>레이아웃</div>
    <slot />
  </div>
</template>
<script setup>
import login from "~/middleware/login";
addRouteMiddleware(login);
</script>
