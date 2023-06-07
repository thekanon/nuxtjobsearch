<template>
  <header>
    app.vue
    <nav>
      <ul>
        라우팅
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
      </ul>
      <ul>
        상태관리 + 네비게이션 가드
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
        <li>
          <NuxtLink to="/login/로니">로니 접속</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/%EC%9E%85%EC%96%91%EC%B2%98">쿼카 입양처</NuxtLink>
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
import { useCounterStore } from "@/stores/counter";
const router = useRouter();

const search = ref("쿼카로니니");

addRouteMiddleware(login);
router.beforeEach((to, from, next) => {
  const counter = useCounterStore();
  console.log(to, from);
  if (to.params.loginUser) {
    if (to.params.loginUser.indexOf("쿼카")) {
      console.log(counter.count);
      counter.clearCount();
      alert("인간은 쿼카굴에 못들어갑니다. 쿼카가 모두 도망갔습니다.");
      return abortNavigation("/");
    } else {
      alert("쿼카의 서식지입니다.");
      // return navigateTo(to.path);
    }
  }
  next();
});
</script>
