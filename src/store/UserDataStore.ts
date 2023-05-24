import { defineStore } from "pinia";
import UserData from "../types/UserDataType";

const useDataStore = defineStore("userData", {
  state: () => ({
    userData: {
      name: "",
      age: "",
    },
    childrenData: [] as UserData[],
  }),
  getters: {
    userName: (state) => state.userData,
    getChildrenData: (state) => state.childrenData,
  },
  actions: {
    addChild() {
      this.$state.childrenData.push({ name: "", age: "" });
    },
    changeUserData(type: "name" | "age", value: string) {
      this.$state.userData[type] = value;
    },
    changeChildrenData(type: "name" | "age", value: string, id: number) {
      this.$state.childrenData[id][type] = value;
    },
    deleteChildrenData(id: number) {
      this.$state.childrenData.splice(id, 1);
    },
    saveDataToLocalStorage() {
      console.log(this.$state)
      localStorage.setItem('UserData', JSON.stringify(this.$state))
    },
    getDataFromLocalStorage() {
      if (localStorage.getItem('UserData')) {
        this.$state = JSON.parse(localStorage.getItem('UserData') as string)
      }
    }
  },
});

export default useDataStore;
