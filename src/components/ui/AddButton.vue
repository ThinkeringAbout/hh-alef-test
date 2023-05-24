<template>
  <button class="add-btn"><img src="../../assets/plus.svg" />{{ text }}</button>
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
.add-btn {
  @apply flex items-stretch gap-2 outline-none border-2 px-6 border-[#01A7FD] rounded-full py-2 text-[#01A7FD] hover:bg-[#6E41E20A] transition-all;
}
</style>
