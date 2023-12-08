module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // 颜色
        primary: "var(--bg-primary)",
        main: "var(--bg-main)",
        content: "var(--bg-content)",

        // 字体颜色
        "color-1": "var(--fg-1)",
        "color-2": "var(--fg-2)", // 副标题
        "color-3": "var(--fg-3)", // 说明
        "color-4": "var(--fg-4)", // 短分割
        "color-5": "var(--fg-5)", // 分割线
      },
    },
  },
  corePlugins: {
    // 不需要 preflight，因为这主要是给 h5 的，如果你要同时开发小程序和 h5 端，你应该使用环境变量来控制它
    preflight: false,
  },
};
