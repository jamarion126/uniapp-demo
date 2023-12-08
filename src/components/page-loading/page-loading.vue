<script setup lang="ts">
import { ref, watch } from "vue";

interface Props {
  loading: boolean;
  error: any;
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  error: false,
});
</script>

<template>
  <view
    class="flex items-center justify-center space-y-3 rounded-xl bg-content p-4"
    v-if="loading || error"
  >
    <view v-if="loading">
      <view class="h-40 text-center transition">
        <image
          src="../../assets/images/loading.png"
          mode="heightFix"
          class="h-full"
        />
      </view>
      <view class="text-center text-sm text-color-3">加载中...</view>
    </view>

    <view v-if="error">
      <view class="h-40 text-center transition">
        <image
          src="../../assets/images/error.png"
          mode="heightFix"
          class="h-full"
        />
      </view>
      <view class="text-center text-sm text-red-500">加载失败，请重试</view>
    </view>
  </view>
</template>

<style scoped lang="scss"></style>
