<script setup lang="ts">
import System from "@/common/system";
import { onMounted, ref } from "vue";

interface Props {
  isTabBar?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isTabBar: false,
});

onMounted(() => {
  getHeight();
});

const height = ref<number>(0);

function getHeight() {
  System.getRect(".fixed-bottom", (res: { height: any }) => {
    console.log("=>(fixed-bottom.vue:21) res", res);
    height.value = res.height;
  });
}

defineExpose({
  change: getHeight,
});
</script>

<template>
  <view class="fixed bottom-0 w-full">
    <view class="fixed-bottom">
      <slot />
      <template v-if="!isTabBar">
        <safe-area />
      </template>
    </view>
    <!-- #ifdef H5 -->
    <template v-if="isTabBar">
      <view class="is-tabBar" />
    </template>
    <!-- #endif -->
  </view>
  <view :style="{ height: height + 'px' }" />
</template>

<style scoped lang="scss">
.is-tabBar {
  height: var(--window-bottom);
}
</style>
