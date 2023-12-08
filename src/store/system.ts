import { defineStore } from "pinia";

export const useSystemStore = defineStore("system", {
  state: () => {
    return {
      theme: "light",
      keyboardHeight: 0, // 当前键盘高度
      statusBarHeight: 0, // 状态栏高度
      bottomSafetyHeight: 0, // 底部安全区域
      systemInfo: {}, // 设备信息
      customThemes: {
        primaryColor: "var(--bg-primary)",
        primaryColorEnd: "var(--bg-primary-1)",

        // button
        buttonBorderRadius: "0.75rem",
        buttonDefaultBgColor: "var(--bg-main)",
        buttonBorderWidth: 0,
        buttonLargeHeight: "3rem",
      },
      location: {},
    };
  },
  actions: {},
  persist: {
    enabled: true,
  },
});
