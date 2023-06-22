<template>
  <div>
    <p>Current route name: {{ route.name }}</p>
    <p>Current route path: {{ route.path }}</p>
    <p>Current route query parameters: {{ route.query }}</p>
  </div>
  <div>
    <button
      @click="
        () => {
          router.back();
        }
      "
    >
      back
    </button>
    <button
      @click="
        () => {
          router.forward();
        }
      "
    >
      forward
    </button>
    <button
      @click="
        () => {
          router.go(-2);
        }
      "
    >
      go(-2)
    </button>
    <button
      @click="
        () => {
          router.replace('/pc/a');
        }
      "
    >
      replace('/pc/a')
    </button>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    return { route, router };
  },
};
</script>
