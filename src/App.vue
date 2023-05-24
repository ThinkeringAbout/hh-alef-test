<template>
  <header class="header">
    <div class="base-flex">
      <img
        class="w-[175] mobile:flex hidden absolute h-8"
        src="./assets/Logo.png"
        alt=""
      />
      <div class="base-flex h-20 gap-6">
        <RouterLink class="header-text" to="/edit">Форма</RouterLink>
        <RouterLink class="header-text" to="/">Превью</RouterLink>
      </div>
    </div>
  </header>
  <main class="main min-h-calc">
    <router-view v-slot="{ Component }">
      <keep-alive include="EditPage">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <notifications position="bottom left" />
  </main>
  <footer class="footer">
    <p>all rights reserved</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useDataStore from "./store/UserDataStore";

export default defineComponent({
  setup() {
    const store = useDataStore();
    return { store };
  },
  mounted() {
    this.store.getDataFromLocalStorage();
  },
});
</script>

<style scoped>
.min-h-calc {
  min-height: calc(100vh - 80px - 76px - 42px);
  height: auto;
}
.header-text {
  @apply text-[#1111117A] text-sm font-montserrat leading-6;
}

.base-flex {
  @apply mx-auto flex items-center;
}

.header {
  @apply border-b-2 border-[#E8E8E8];
}

.main {
  @apply w-full px-4 mt-6 mobile:mx-auto md:w-1/2 flex-grow;
}

.footer {
  @apply mt-4 flex-shrink-0 w-full flex justify-center items-center h-[76px] bg-[#FAFAFA];
}
</style>
