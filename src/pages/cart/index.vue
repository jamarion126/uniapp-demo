<script setup lang="ts">
import { useRequest } from "alova";
import { list } from "@/api/methods/favourite";

const { data, loading, error } = useRequest(list(), {
  initialData: {
    data: [],
  },
});

function toOrder() {
  uni.navigateTo({
    url: "/pages/order/index",
  });
}
</script>

<template>
  <page-config-provider>
    <view class="space-y-4 p-4">
      <view class="font-medium">{{ data.data.length }} Item</view>
      <page-loading :loading="loading" :error="error" />
      <view
        v-for="item in data.data"
        :key="item.id"
        class="relative flex space-x-4 rounded-xl bg-content p-4"
      >
        <view class="h-20 w-20 rounded-xl bg-main">
          <image
            mode="aspectFill"
            :src="item.image"
            class="h-full w-full rounded-xl"
          />
        </view>
        <view class="flex flex-1 flex-col justify-between">
          <view class="flex justify-between font-medium">
            <text class="line-clamp-2">{{ item.name }}</text>
            <text class="iconfont icon-close ml-4 !leading-none" />
          </view>
          <view class="text-xs text-color-3">NIKE</view>
          <view class="text-sm font-medium">${{ item.price }}</view>
        </view>
        <view class="absolute bottom-4 right-4 flex items-center">
          <view class="iconfont icon-minus-circle !text-2xl text-primary" />
          <view class="px-2">1</view>
          <view class="iconfont icon-plus-circle-fill !text-2xl text-primary" />
        </view>
      </view>
    </view>
    <fixed-bottom is-tab-bar>
      <view class="rounded-t-xl bg-content px-4">
        <view class="divide-y-[1rpx] divide-solid divide-color-5">
          <view class="py flex items-center justify-between border-x-0 py-4">
            <text class="font-medium">Subtotal</text>
            <text class="font-bold">$753.95</text>
          </view>
          <view class="flex items-center justify-between border-x-0 py-4">
            <text class="font-medium">Delivery</text>
            <text class="font-bold">$60.20</text>
          </view>
          <view class="flex items-center justify-between border-x-0 py-4">
            <text class="font-medium">Delivery</text>
            <text class="font-bold">$60.20</text>
          </view>
        </view>
        <view class="py-4">
          <nut-button size="large" block type="primary"
            >Proceed To Checkout
          </nut-button>
        </view>
      </view>
    </fixed-bottom>
  </page-config-provider>
</template>

<style scoped lang="scss"></style>
