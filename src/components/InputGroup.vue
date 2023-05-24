<template>
  <div class="input_group" :class="{ 'input_group-row': !large }">
    <Input
      :value="value.name"
      placeholder="Имя"
      @input="handleInput"
      id="name"
      :large="large"
      type="text"
    />
    <Input
      :value="value.age"
      placeholder="Возраст"
      @input="handleInput"
      id="age"
      :large="large"
      type="number"
    />
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Input from "./ui/Input.vue";

export default defineComponent({
  name: "InputGroup",
  props: ["large", "id", "value"],
  emits: ["input"],
  components: {
    Input,
  },
  data() {
    return {
      name: "",
      age: "",
    };
  },
  methods: {
    handleInput(type: "name" | "age", value: string) {
      this.$emit("input", type, value, this.id);
    },
  },
});
</script>

<style scoped>
.input_group {
  @apply flex flex-col gap-2.5;
}

.input_group-row {
  @apply flex-row;
}
</style>
