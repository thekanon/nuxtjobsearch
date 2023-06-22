<template>
  <div class="header">
    <ImageWrapper
      src="/img/mindcafe-logo.png"
      alt="마인드카페 로고"
      height="36px"
      margin="18px 0px 17px 40px"
    />
  </div>
</template>

<script>
import ImageWrapper from "~/components/atoms/ImageWrapper.vue";
export default {
  name: "AppHeader",
  components: {
    ImageWrapper,
  },
};
</script>

<style>
.header {
  width: 100%;
  background-color: #1976d2;
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
