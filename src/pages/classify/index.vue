<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRequest } from "alova";
import { classifyList } from "@/api/methods/classify";
import System from "@/common/system";
import Methods from "@/common/methods";

const tab = ref(0);

const arr = [
  { title: "休闲", id: 1 },
  { title: "跑步", id: 2 },
  { title: "训练", id: 3 },
  { title: "篮球", id: 4 },
  { title: "足球", id: 5 },
];

const { data } = useRequest(classifyList("2"), {
  initialData: {
    data: [],
  },
});

const onChangeTab = Methods.throttle((index: number) => {
  tab.value = index;
}, 500);
</script>

<template>
  <page-config-provider>
    <view class="flex h-screen flex-col">
      <view
        class="grid grid-cols-5 border-0 border-b border-solid border-color-5"
      >
        <view
          v-for="(item, index) in arr"
          :key="item.id"
          class="flex items-center justify-center text-sm text-color-2"
          @click="onChangeTab(index)"
        >
          <view :class="{ 'tab-check': index === tab }" class="relative py-2">
            {{ item.title }}
          </view>
        </view>
      </view>
      <view class="flex-1 overflow-scroll">
        <swiper
          :current="tab"
          @change="(e: any) =>  (tab = e.detail.current)"
          class="h-full"
          easing-function="linear"
        >
          <swiper-item class="h-full" v-for="item in arr" :key="item.id">
            <scroll-view scroll-y class="h-full">
              <view class="grid grid-cols-2 gap-4 p-4">
                <view
                  class="space-y-2 rounded-xl bg-content p-4 transition active:scale-95"
                  v-for="(shoes, shoesIndex) in data.data[tab]"
                  :key="shoesIndex"
                >
                  <view class="relative h-24 rounded-xl">
                    <image
                      lazy-load
                      class="h-full w-full rounded-xl"
                      :src="shoes.image"
                      mode="aspectFill"
                    />
                  </view>
                  <view class="flex h-[4rem] flex-col justify-between">
                    <view class="line-clamp-2 text-sm">
                      {{ shoes.name }}
                    </view>
                    <view class="text-sm font-medium">${{ shoes.price }}</view>
                  </view>
                </view>
              </view>
            </scroll-view>
          </swiper-item>
        </swiper>
      </view>
    </view>
  </page-config-provider>
</template>

<style scoped lang="scss">
.tab-check {
  @apply scale-105 font-bold transition;

  &:before {
    @apply absolute bottom-0 h-0.5 w-full animate-bounce rounded bg-primary content-[""];
  }
}
</style>
