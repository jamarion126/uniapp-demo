<script setup lang="ts">
import { ref } from "vue";

const searchValue = ref<string>();

const clearSearch = () => {
  console.log(1);
  searchValue.value = "";
};

const toBack = () => {
  console.log(11);
};
</script>

<template>
  <page-config-provider>
    <nav-bar title="Search"/>
    <view class="space-y-4 p-4">
      <view class="flex h-[3.25rem] items-center rounded-xl bg-content px-4">
        <text class="iconfont icon-search !text-xl text-color-3" />
        <view class="flex-1 px-4 text-sm">
          <input placeholder="Search Your Shoes" v-model="searchValue" />
        </view>
        <text
          @click="clearSearch"
          :class="{ 'invisible opacity-0': !searchValue }"
          class="iconfont icon-close-circle text-color-3 transition"
        />
      </view>
      <view class="text-lg font-medium">Shoes</view>
      <view v-for="item in 6" :key="item" class="flex items-center">
        <text class="iconfont icon-time-circle !text-lg text-color-3" />
        <text class="ml-4 text-sm font-medium">New Shoes</text>
      </view>
    </view>
  </page-config-provider>
</template>

<style scoped lang="scss"></style>
