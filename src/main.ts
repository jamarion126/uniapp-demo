import { createSSRApp } from "vue";
import App from "./App.vue";
import store from "@/store";
import router from "@/router";
import share from "@/utils/share";
export function createApp() {
  const app = createSSRApp(App);
  app.use(store).use(router).mixin(share)
  return {
    app,
  };
}
