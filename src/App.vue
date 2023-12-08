<script setup lang="ts">
import { onHide, onLaunch, onShow } from "@dcloudio/uni-app";
import init from "@/utils/init";

onLaunch(() => {
  console.log("App Launch");
  init();
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="scss">
@import "styles/index";
</style>
