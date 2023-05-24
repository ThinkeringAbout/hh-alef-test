<template>
  <button class="primary-btn">{{ text }}</button>
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
.primary-btn {
  @apply outline-none bg-[#01A7FD] border-2 px-6 border-[#01A7FD] rounded-full text-white py-2 hover:bg-[#0F79AF] hover:border-[#0F79AF] transition-all;
}
</style>
