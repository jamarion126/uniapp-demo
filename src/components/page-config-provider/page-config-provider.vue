<script setup lang="ts">
import { useSystemStore } from "@/store/system";
import { storeToRefs } from "pinia";

const { theme, customThemes } = storeToRefs(useSystemStore());
</script>

<template>
  <nut-config-provider :theme="theme" :theme-vars="customThemes">
    <view class="page">
      <slot />
    </view>
  </nut-config-provider>
</template>

<style scoped lang="scss">
.page {
  @apply min-h-screen;
  background: linear-gradient(
    to bottom,
    var(--bg-primary-1),
    var(--bg-main)
  );
}
</style>
