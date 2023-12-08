<script setup lang="ts">
import { ref } from "vue";

const readMore = ref(false);

function toCart() {
  uni.navigateTo({
    url: "/pages/cart/index",
  });
}
</script>

<template>
  <page-config-provider>
    <view class="space-y-6 p-4">
      <view class="space-y-1">
        <view class="text-3xl font-medium text-color-2">
          Nike Air Max 270 Essential
        </view>
        <view class="text-xl text-color-3">Mens Shoes</view>
        <view class="text-2xl font-bold">$179.39</view>
      </view>
      <view class="-rotate-[16deg]">
        <image
          class="w-full"
          mode="aspectFit"
          src="https://i.postimg.cc/YCn2b6FJ/10001.png"
        />
      </view>
      <view class="grid grid-cols-5 gap-4">
        <view class="aspect-square rounded-xl bg-content">
          <image
            class="h-full w-full -rotate-[16deg]"
            mode="aspectFill"
            src="https://i.postimg.cc/MpXdjwm1/10001.png"
          />
        </view>
        <view class="aspect-square rounded-xl bg-content">
          <image
            class="h-full w-full -rotate-[16deg]"
            mode="aspectFill"
            src="https://i.postimg.cc/6q3G1W30/10001.png"
          />
        </view>
        <view class="aspect-square rounded-xl bg-content">
          <image
            class="h-full w-full -rotate-[16deg]"
            mode="aspectFill"
            src="https://i.postimg.cc/7PWCZyhF/10001.png"
          />
        </view>
        <view class="aspect-square rounded-xl bg-content">
          <image
            class="h-full w-full -rotate-[16deg]"
            mode="aspectFill"
            src="https://i.postimg.cc/8CZpXhr2/10001.png"
          />
        </view>
        <view class="aspect-square rounded-xl bg-content">
          <image
            class="h-full w-full -rotate-[16deg]"
            mode="aspectFill"
            src="https://i.postimg.cc/YCn2b6FJ/10001.png"
          />
        </view>
      </view>
      <view class="space-y-2">
        <view class="line-clamp-3 text-color-3">
          Your competition is still exciting, but you are by no means immersed
          in the glory of the past. Confident and confident, never satisfied.
          Skilled in technology, but always striving to become an outstanding
          player, day after day. The Nike Air Zoom G.T. Cut 2 GTE EP
          Men's/Women's Basketball Shoes are designed to pay tribute to those
          hardworking players who dream of using clever quick stops to pull back
          and break through the defense of defenders, waiting for opportunities
          to take backdoor layups after sliding the baseline, or completing
          sharp directional dribbling passes after confusing opponents with
          quick stops and directional breakthroughs. Durable rubber outsole
          provides strong grip.
        </view>
        <view
          class="flex justify-end font-medium text-primary"
          @click="readMore = true"
        >
          Read More
        </view>
      </view>
      <view class="flex space-x-6">
        <view
          class="grid aspect-auto h-12 w-12 place-content-center rounded-full bg-[#ebebec] transition active:scale-95"
        >
          <text class="iconfont icon-heart !text-2xl" />
        </view>
        <view class="flex-1">
          <nut-button type="primary" size="large" @click="toCart">
            <template #icon>
              <text class="iconfont icon-gouwudai !text-xl" />
            </template>
            Add to Cart
          </nut-button>
        </view>
      </view>
    </view>

    <nut-popup v-model:visible="readMore" position="bottom">
      <view class="rounded-t-xl bg-content text-color-3">
        <view class="p-4 text-center text-xl font-medium text-color-2">
          Nike Air Max 270 Essential
        </view>
        <view class="px-4 pb-4">
          Your competition is still exciting, but you are by no means immersed
          in the glory of the past. Confident and confident, never satisfied.
          Skilled in technology, but always striving to become an outstanding
          player, day after day. The Nike Air Zoom G.T. Cut 2 GTE EP
          Men's/Women's Basketball Shoes are designed to pay tribute to those
          hardworking players who dream of using clever quick stops to pull back
          and break through the defense of defenders, waiting for opportunities
          to take backdoor layups after sliding the baseline, or completing
          sharp directional dribbling passes after confusing opponents with
          quick stops and directional breakthroughs. Durable rubber outsole
          provides strong grip.
        </view>
        <safe-area type="bottom" />
      </view>
    </nut-popup>
  </page-config-provider>
</template>

<style scoped lang="scss"></style>
