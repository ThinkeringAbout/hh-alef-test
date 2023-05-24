<template>
  <div class="flex flex-col mt-6 gap-2.5">
    <div class="flex justify-between items-center">
      <h1 class="h1">
        {{ header }}
      </h1>
      <AddButton
        v-if="!isFormLarge && store.childrenData.length < 5"
        @click.prevent.stop="handleAddClick"
        text="Добавить ребенка"
        type="button"
      />
    </div>
    <template v-if="isFormLarge">
      <InputGroup @input="handleNameInput" :value="store.userName" :large="isFormLarge" />
    </template>
    <template v-else>
      <InputGroup
        v-for="(input, index) in store.getChildrenData"
        :id="index"
        @input="handleInput"
        :key="index"
        :large="isFormLarge"
        :value="input"
      >
        <FlatButton
          @click="handleDeleteClick(index)"
          v-if="!isFormLarge"
          type="button"
          text="Удалить"
        />
      </InputGroup>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputGroup from "./InputGroup.vue";
import FlatButton from "./ui/FlatButton.vue";
import AddButton from "./ui/AddButton.vue";
import useDataStore from "../store/UserDataStore";

export default defineComponent({
  setup() {
    const store = useDataStore();
    return { store };
  },
  name: "Form",
  props: ["header", "isFormLarge"],
  components: {
    InputGroup,
    FlatButton,
    AddButton,
  },
  methods: {
    handleNameInput(type: "name" | "age", value: string) {
      this.store.changeUserData(type, value)
    },
    handleDeleteClick(index: number) {
      this.store.deleteChildrenData(index)
    },
    handleInput(type: "name" | "age", value: string, id: number) {
      this.store.changeChildrenData(type, value, id)
    },
    handleAddClick() {
      if (this.store.getChildrenData.length < 5) {
        this.store.addChild();
      }
    },
  },
});
</script>
