import { defineStore } from "pinia";
import type { UserInfo } from "@/types/user";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: "",
      userInfo: {} as UserInfo,
    };
  },
  actions: {},
  persist: {
    enabled: true,
  },
});
