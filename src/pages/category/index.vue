<script setup lang="ts">
import { ref } from "vue";

const current = ref(1);
</script>

<template>
  <page-config-provider>
    <view class="space-y-4 p-4">
      <view class="flex space-x-4">
        <view
          class="flex h-[3.25rem] flex-1 items-center rounded-xl bg-content px-8 transition active:scale-95"
        >
          <text class="iconfont icon-search !text-xl text-color-3" />
          <text class="ml-4 text-sm text-color-3">Search</text>
        </view>
        <view
          class="grid h-[3.25rem] w-[3.25rem] place-content-center rounded-xl bg-primary transition active:scale-95"
        >
          <text class="iconfont icon-adjust !text-2xl text-content" />
        </view>
      </view>
      <view class="text-xl font-bold">Categories</view>
      <view>
        <scroll-view scroll-x>
          <view class="space-x-4 whitespace-nowrap">
            <view
              class="inline-flex h-14 w-14 rounded-full bg-content align-top"
              :class="{
                'start box-border p-2': index === current,
              }"
              v-for="(item, index) in 8"
              :key="index"
              @click="current = index"
            >
              <view class="flex items-center" v-if="index === current">
                <view
                  class="grid h-10 w-10 place-content-center rounded-full bg-content"
                >
                  1
                </view>
                <view class="px-2 text-white">Sneakers</view>
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </page-config-provider>
</template>

<style scoped lang="scss">
.start {
  animation: start 1s forwards;
}

@keyframes start {
  100% {
    @apply w-36 bg-primary;
  }
}
</style>
