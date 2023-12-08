<script setup lang="ts">
import { useRequest } from "alova";
import { list } from "@/api/methods/favourite";
import { ref } from "vue";
import { useSystemStore } from "@/store/system";
import { storeToRefs } from "pinia";

const systemStore = useSystemStore();
const { location } = storeToRefs(systemStore);

const { data } = useRequest(list(), {
  initialData: {
    data: [],
  },
});

const showRound = ref(false);
</script>

<template>
  <page-config-provider>
    <view class="p-4">
      <view class="space-y-4 rounded-xl bg-content p-4">
        <view>Contact Information</view>
        <view class="flex items-center justify-between space-x-4">
          <view class="grid h-10 w-10 place-content-center rounded-xl bg-main">
            <text class="iconfont icon-email !text-xl" />
          </view>
          <view class="flex-1 space-y-1">
            <view class="font-medium">mahmodul@gmail.com</view>
            <view class="text-xs text-color-3">Email</view>
          </view>
          <text class="iconfont icon-edit !text-xl text-color-3" />
        </view>
        <view class="flex items-center justify-between space-x-4">
          <view class="grid h-10 w-10 place-content-center rounded-xl bg-main">
            <text class="iconfont icon-telephone !text-xl" />
          </view>
          <view class="flex-1 space-y-1">
            <view class="font-medium">+880-17 -277-666</view>
            <view class="text-xs text-color-3">Phone</view>
          </view>
          <text class="iconfont icon-edit !text-xl text-color-3" />
        </view>
        <view>Address</view>
        <view class="text-xs text-color-3">1082 Charack Road,Usa</view>
        <view>Payment Method</view>
        <view class="flex items-center justify-between space-x-4">
          <view class="grid h-10 w-10 place-content-center rounded-xl bg-main">
            <text class="iconfont icon-telephone !text-xl" />
          </view>
          <view class="flex-1 space-y-1">
            <view class="font-medium">DbL Card</view>
            <view class="text-xs text-color-3">*** *** 0696 4629</view>
          </view>
          <text class="iconfont icon-edit !text-xl text-color-3" />
        </view>
        <view class="translate-y-0 overflow-hidden rounded-xl">
          <map
            class="w-full rounded-xl"
            :longitude="location.longitude"
            :latitude="location.latitude"
          />
        </view>
      </view>
    </view>
    <fixed-bottom>
      <view class="bg-content px-4">
        <view class="space-y-4 py-4">
          <view class="flex items-center justify-between">
            <text class="text-color-3">Subtotal</text>
            <text class="font-medium">$753.95</text>
          </view>
          <view class="flex items-center justify-between">
            <text class="text-color-3">Delivery</text>
            <text class="font-medium">$60.20</text>
          </view>
        </view>
        <view
          class="space-y-4 border-0 border-t-4 border-dashed border-color-5 py-4"
        >
          <view class="flex items-center justify-between">
            <text>Total Cost</text>
            <text class="font-medium text-primary">$814.15</text>
          </view>
          <view>
            <nut-button
              type="primary"
              @click="showRound = true"
              block
              size="large"
            >
              Checkout
            </nut-button>
          </view>
        </view>
      </view>
    </fixed-bottom>
    <nut-popup v-model:visible="showRound" :close-on-click-overlay="false">
      <view
        class="box-border w-[88vw] space-y-8 rounded-2xl bg-content px-16 py-12"
      >
        <view class="grid place-content-center">
          <view
            class="box-border flex h-32 w-32 items-center justify-center rounded-full bg-sky-100"
          >
            <image
              src="https://i.postimg.cc/R09cF3ZS/61ce9b390e7fa37ea26c43a6.png"
              class="h-2/3 w-2/3"
              mode="aspectFill"
            />
          </view>
        </view>
        <view class="text-center text-xl"> Your Payment Is Successful </view>
        <view>
          <nut-button
            @click="showRound = false"
            type="primary"
            block
            size="large"
          >
            Back To Shopping
          </nut-button>
        </view>
      </view>
    </nut-popup>
  </page-config-provider>
</template>

<style scoped lang="scss"></style>
