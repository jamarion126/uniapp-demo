<script setup lang="ts">
const arr = [
  {
    avatar:
        "https://sns-avatar-qc.xhscdn.com/avatar/60d607b483f7d396e34e3d80.jpg",
    has: true,
  },
  {
    avatar:
        "https://sns-avatar-qc.xhscdn.com/avatar/5f45fa0ea4cd6e00011d10a3.jpg",
  },
  {
    avatar:
        "https://sns-avatar-qc.xhscdn.com/avatar/6564cf43080dad7068b0be7f.jpg",
  },
  {
    avatar:
        "https://sns-avatar-qc.xhscdn.com/avatar/641a8358f8ce1d14173236c8.jpg",
  },
  {
    avatar:
        "https://sns-avatar-qc.xhscdn.com/avatar/63e26f456dfa3a795a86850f.jpg",
  },
  {
    avatar:
        "https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2ktim4egiu00049f5l460k38igqdnrtg?imageView2/2/w/120/format/jpg",
  },
  {
    avatar:
        "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30ojo9c6c30004a37sbtnrqrli00v2ng?imageView2/2/w/120/format/jpg",
  },
  {
    avatar:
        "https://sns-avatar-qc.xhscdn.com/avatar/641a8358f8ce1d14173236c8.jpg",
  },
  {
    avatar:
        "https://sns-avatar-qc.xhscdn.com/avatar/621de1a30491b31f2a951a56.jpg",
  },
];
</script>

<template>
  <page-config-provider>
    <nav-bar :back="false" title="Notification" a="1"/>
    <view class="p-4 space-y-4">
      <view>
        <scroll-view scroll-x enable-flex>
          <view class="space-x-6 whitespace-nowrap">
            <view
                class="inline-block h-12 w-12 rounded-full bg-content align-top"
            >
              <view class="grid h-full w-full place-content-center">
                <text
                    class="iconfont icon-add !text-2xl font-medium text-primary"
                />
              </view>
            </view>
            <view
                :class="{ 'border-2 border-solid border-primary': item.has }"
                class="rounded-full box-border inline-block h-12 w-12 p-0.5 align-top"
                v-for="(item,index) in arr"
                :key="index"
            >
              <image
                  mode="aspectFill"
                  class="h-full w-full rounded-full"
                  :src="item.avatar"
              />
            </view>
          </view>
        </scroll-view>
      </view>
      <view class="text-color-3">Today</view>
      <view class="space-y-2">
        <view  v-for="(item,index) in arr" :key="index" class="p-4 bg-content rounded-xl flex items-center space-x-4">
          <view class="w-10 h-10">
            <image :src="item.avatar" mode="aspectFill" class="w-full h-full rounded-full"/>
          </view>
          <view>
            <view class="font-medium">Partrick Followed you</view>
            <view class="text-color-3">Just Now</view>
          </view>
        </view>
      </view>
      <view class="text-color-3">October 24, 2022</view>
      <view class="space-y-2">
        <view v-for="item in 3" :key="item" class="p-4 bg-content rounded-xl">11</view>
      </view>
    </view>
  </page-config-provider>
</template>

<style scoped lang="scss"></style>
