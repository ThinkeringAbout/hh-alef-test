<template>
  <button class="flat-btn">{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FlatButton",
  props: ["text"],
  emits: ["input"],
  methods: {},
});
</script>

<style scoped>
.flat-btn {
  @apply outline-none border-none px-4 rounded text-[#01A7FD] hover:bg-[#ECEBF1] transition-all;
}
</style>
