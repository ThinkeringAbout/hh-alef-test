<template>
  <div class="relative w-full">
    <input
      class="input peer"
      :class="{ sm_input: !large }"
      :placeholder="placeholder"
      :type="type"
      :name="id"
      :id="id"
      @input="handleInput"
      :value="value"
      required
      :min="type === 'number' ? 0 : undefined"
      :max="type === 'number' ? 120 : undefined"
    />
    <label :for="id" class="input__placeholder">{{ placeholder }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Input",
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    large: {
      type: Boolean,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  emits: ["input"],
  methods: {
    handleInput(event: Event) {
      if (event) {
        this.$emit("input", this.id, (event.target as HTMLInputElement).value);
      }
    },
  },
});
</script>

<style scoped>
.input {
  @apply w-full border-2 rounded h-14 border-[#F1F1F1] outline-none hover:shadow-input-shadow transition-all duration-300 px-4 pt-4 text-sm appearance-none text-[#111111] placeholder-transparent;
}

.input__placeholder {
  @apply pointer-events-none absolute transition-all left-4 text-[#8d8d8d] peer-placeholder-shown:top-1/3 top-1 text-[13px] peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-[13px];
}

.sm_input {
  @apply w-full;
}
</style>
