import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { UnifiedViteWeappTailwindcssPlugin as uvwt } from "weapp-tailwindcss/vite";
import { plugins as postcssPlugins } from "./postcss.config.cjs";
import Components from "@uni-helper/vite-plugin-uni-components";
import { NutResolver } from "nutui-uniapp";

const isH5 = process.env.UNI_PLATFORM === "h5";
// uni-app v2
// uni-app v3
const isApp = process.env.UNI_PLATFORM === "app";
const WeappTailwindcssDisabled = isH5 || isApp;

const vitePlugins = [
  Components({
    resolvers: [NutResolver()],
  }),
  uvwt({
    disabled: WeappTailwindcssDisabled,
  }),
  uni(),
];

export default defineConfig({
  plugins: vitePlugins,
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "nutui-uniapp/styles/variables.scss";',
      },
    },
    postcss: {
      plugins: postcssPlugins,
    },
  },
});
