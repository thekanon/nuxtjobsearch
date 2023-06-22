<template>
  <div class="image-wrapper" :style="wrapperStyle">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: "ImageWrapper",
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    padding: {
      type: String,
    },
    margin: {
      type: String,
    },
  },
  computed: {
    wrapperStyle() {
      return {
        width: this.width || "auto",
        height: this.height || "auto",
        padding: this.padding || "0",
        margin: this.margin || "0",
      };
    },
  },
};
</script>

<style scoped>
.image-wrapper {
  display: inline-block;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
