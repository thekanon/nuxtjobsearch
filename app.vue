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
        <li>
          <NuxtLink to="/%EC%95%88%EB%9D%BC%EC%9A%B0%ED%8C%85"
            >라우팅테스트</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/login/인간"
            >쿼카만 통과 가능한 로그인에 인간접속</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/login/쿼카"
            >쿼카만 통과 가능한 로그인에 쿼카접속</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>

  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
import Layout from "~/layouts/defaultLayout.vue";
import { useRouter } from "vue-router";
import login from "~/middleware/login";
const router = useRouter();

addRouteMiddleware(login);
router.beforeEach((to, from, next) => {
  alert("before");
});
</script>
