<template>
  <div
    :style="{
      height: props.height,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  height: {
    type: String,
    default: "0px",
    required: true,
  },
});
</script>
