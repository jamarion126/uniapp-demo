<script setup lang="ts">
import { useRequest } from "alova";
import { list } from "@/api/methods/favourite";

const { data, loading, error } = useRequest(list(), {
  initialData: {
    data: [],
  },
});
</script>

<template>
  <page-config-provider>
    <view class="p-4">
      <page-loading :loading="loading" :error="error" />
      <view class="grid grid-cols-2 gap-4">
        <view
          class="space-y-4 rounded-xl bg-content p-4"
          v-for="item in data.data"
          :key="item.id"
        >
          <view class="relative h-24 rounded-xl">
            <view
              class="absolute left-0 top-0 z-10 grid h-6 w-6 place-content-center rounded-full bg-main"
            >
              <text
                :class="[item.like ? 'icon-heart-fill' : 'icon-heart']"
                class="iconfont text-red-400 transition active:scale-125"
              />
            </view>
            <image
              class="h-full w-full rounded-xl"
              :src="item.image"
              mode="aspectFill"
            />
          </view>
          <view>
            <view class="text-xs font-medium text-primary"
              >{{ item.title }}
            </view>
            <view class="line-clamp-1 font-medium">{{ item.name }}</view>
          </view>
          <view class="flex items-center justify-between">
            <view class="font-medium">${{ item.price }}</view>
            <view class="flex items-center space-x-0.5">
              <view
                class="h-4 w-4 rounded-full border-2 border-solid border-main bg-teal-300"
              ></view>
              <view
                class="h-4 w-4 rounded-full border-2 border-solid border-main bg-purple-700"
              ></view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </page-config-provider>
</template>

<style scoped lang="scss"></style>
