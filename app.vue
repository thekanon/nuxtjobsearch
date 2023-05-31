<template>
  <header>
    app.vue
    <nav>
      <ul>
        <li><NuxtLink to="/a">그냥 라우팅</NuxtLink></li>
        <li><NuxtLink to="/story">다이나믹 라우팅</NuxtLink></li>
        <li><NuxtLink to="/post-2/doo">중첩 라우팅</NuxtLink></li>
        <li><NuxtLink to="/post-aa/112312/312">slug 라우팅1</NuxtLink></li>
        <li><NuxtLink to="/pc/post/너무 우울해요">slug 라우팅2</NuxtLink></li>
        <li><NuxtLink to="/pc/post/doodoo/야근">slug 라우팅3</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <div>
    <Layout>
      <NuxtPage />
    </Layout>
  </div>
</template>
<script setup>
import Layout from "~/layouts/defaultLayout.vue";
</script>
