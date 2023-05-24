<template>
  <div>
    <h1 class="h1">Персональные данные</h1>
    <h2
      v-if="info.userData.name && info.userData.age"
      class="font-montserrat text-[16px] leading-6 font-bold"
    >
      {{ info.userData.name }}, {{ info.userData.age }}
      {{ getTransformAge(info.userData.age) }}
    </h2>
    <h2 v-else class="italic text-[12px] text-slate-400">
        Информация отсутствует
    </h2>
    <h1 class="h1 mt-[60px]">Дети</h1>
    <template v-if="info.childrenData.length">
        <div
          v-for="child in info.childrenData"
          class="font-montserrat mb-4 bg-[#F1F1F1] rounded-md w-fit text-[16px] leading-6 font-bold px-4 py-2.5"
        >
          <div v-if="child.name && child.age">
            {{ child.name }}, {{ child.age }} {{ getTransformAge(child.age) }}
          </div>
        </div>
    </template>
    <h2 v-else class="italic text-[12px] text-slate-400">
        Информация отсутствует
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useDataStore from "../store/UserDataStore";
import ageTransform from "../helpers/ageTransform";
import UserData from "../types/UserDataType";

export default defineComponent({
  setup() {
    const store = useDataStore();
    return { store };
  },
  name: "HomePage",
  data() {
    return {
      info: {
        userData: {
          name: "",
          age: "",
        } as UserData,
        childrenData: [] as UserData[],
      },
    };
  },
  methods: {
    getTransformAge(age: string) {
      return ageTransform(parseInt(age));
    },
  },
  mounted() {
    if (localStorage.getItem("UserData")) {
      this.info = JSON.parse(localStorage.getItem("UserData") as string);
    }
  },
});
</script>
