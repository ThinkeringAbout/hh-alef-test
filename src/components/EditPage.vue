<template>
  <form id="form" @submit.prevent.stop="handleSaveClick">
    <Form header="Персональные данные" :is-form-large="true" />
    <Form header="Дети (макс. 5)" :is-form-large="false" />
    <PrimaryButton type="submit" class="mt-4" text="Сохранить" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Form from "./Form.vue";
import PrimaryButton from "./ui/PrimaryButton.vue";
import useDataStore from "../store/UserDataStore";

export default defineComponent({
  setup() {
    const store = useDataStore();
    return { store };
  },
  name: "EditPage",
  components: {
    Form,
    PrimaryButton,
  },
  methods: {
    handleSaveClick() {
      this.store.saveDataToLocalStorage();
      this.$notify({
        text: "Данные успешно сохранены",
        type: "success",
      });
    },
  },
});
</script>
