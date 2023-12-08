<script setup lang="ts">
import PageConfigProvider from "@/components/page-config-provider/page-config-provider.vue";
import { useRequest } from "alova";
import { list } from "@/api/methods/favourite";
import { useRouter } from "uni-mini-router";
import { onPageScroll } from "@dcloudio/uni-app";
import { ref } from "vue";

let router = useRouter();

const { data, loading, error } = useRequest(list(), {
  initialData: {
    data: [],
  },
});

const toSearch = () => {
  router.push({
    path: "/pages/search/index",
  });
};
const toCart = () => {
  router.pushTab({
    path: "/pages/cart/index",
  });
};
const toDetail = (item: any) => {
  router.push({
    path: "/pages/detail/index",
    params: item,
  });
};

const scrollTop = ref(0);

onPageScroll((e) => {
  scrollTop.value = e.scrollTop;
});
</script>

<template>
  <page-config-provider>
    <nav-bar :back="false" title="Index"/>
    <view class="space-y-8 p-4">
      <view class="flex space-x-4">
        <view
          @click="toSearch"
          class="flex h-[3.25rem] flex-1 items-center rounded-xl bg-content px-8 transition active:scale-95"
        >
          <text class="iconfont icon-search !text-xl text-color-3" />
          <text class="ml-4 text-sm text-color-3">Search</text>
        </view>
        <view
          @click="toCart"
          class="grid h-[3.25rem] w-[3.25rem] place-content-center rounded-xl bg-primary transition active:scale-95"
        >
          <text class="iconfont icon-adjust !text-2xl text-content" />
        </view>
      </view>
      <view class="space-y-4">
        <view class="flex items-center justify-between">
          <view class="font-medium">Popular Shoes</view>
          <view class="text-xs font-medium text-primary">See all</view>
        </view>
        <view>
          <page-loading :loading="loading" :error="error" />
        </view>
        <view class="grid grid-cols-2 gap-4">
          <view
            v-for="item in data.data"
            :key="item.id"
            @click="toDetail(item)"
            class="space-y-2 rounded-xl bg-content p-4"
          >
            <view class="relative h-32 rounded-xl">
              <view class="absolute left-0 top-0 z-10">
                <text
                  :class="[item.like ? 'icon-heart-fill' : 'icon-heart']"
                  class="iconfont !text-lg text-red-400 transition active:scale-125"
                />
              </view>
              <image
                class="h-full w-full rounded-xl"
                :src="item.image"
                mode="aspectFill"
              />
            </view>
            <view class="flex h-10 items-center justify-between space-x-2">
              <view class="text-sm font-medium text-color-2">
                {{ item.name }}
              </view>
              <view class="text-xs text-color-3">5.0</view>
            </view>
            <view class="flex items-center justify-between">
              <view class="text-sm font-medium text-color-2">
                <view class="text-xs text-color-3">Adidas</view>
                <view class="text-sm">${{ item.price }}</view>
              </view>
              <view
                class="grid h-8 w-8 place-content-center rounded-full bg-primary transition active:scale-95"
              >
                <text class="iconfont icon-add !text-lg text-white" />
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </page-config-provider>
</template>
