<template>
  <button class="add-btn"><img src="../../assets/plus.svg">{{ text }}</button>
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
.add-btn {
  @apply flex items-stretch gap-2 outline-none border-2 px-6 border-[#01A7FD] rounded-full py-2 text-[#01A7FD] hover:bg-[#6E41E20A] transition-all;
}
</style>
