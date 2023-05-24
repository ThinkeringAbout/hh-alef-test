<template>
  <button class="primary-btn">{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonMixin from "../../mixins/ButtonMixin.vue";

export default defineComponent({
  name: "FlatButton",
  mixins: [ButtonMixin],
});
</script>

<style scoped>
.primary-btn {
  @apply outline-none bg-[#01A7FD] border-2 px-6 border-[#01A7FD] rounded-full text-white py-2 hover:bg-[#0F79AF] hover:border-[#0F79AF] transition-all;
}
</style>
