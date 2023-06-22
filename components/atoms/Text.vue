<template>
  <div>
    <p v-for="(line, index) in lines" :key="index">{{ line }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
    required: true,
  },
});

const lines = computed(() => props.text.split("\n"));
</script>
