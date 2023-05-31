<template>
  <div>
    <h1>post slug.vue</h1>
    <p>slug: {{ slugString }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const slugString = computed(() => {
      return route.params.slug;
    });

    return {
      slugString,
    };
  },
};
</script>
