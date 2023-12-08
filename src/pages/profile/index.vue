<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/user";

const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);

function chooseFile() {
  uni.chooseImage({
    count: 1,
    success: (res) => {
      console.log(res);
      const path = res.tempFilePaths[0];
      userStore.$patch((state) => {
        state.userInfo.avatar = path;
      });
      uni.showToast({ title: "修改头像成功", icon: "success" });
    },
  });
}
</script>

<template>
  <page-config-provider>
    <view class="box-border h-screen bg-content">
      <!--ifdef  MP-WEIXIN-->
      <safe-area type="top" />
      <!--endif-->
      <view class="space-y-8 px-4 py-12">
        <view class="grid place-content-center">
          <view
            @click="chooseFile"
            class="relative h-20 w-20 rounded-full bg-main shadow-xl transition active:scale-95"
          >
            <image
              class="h-full w-full rounded-full"
              mode="aspectFill"
              :src="userInfo.avatar"
            />
            <view
              class="absolute bottom-0 right-0 grid h-5 w-5 place-content-center rounded-full border-2 border-solid border-content bg-primary"
            >
              <text class="iconfont icon-edit !text-xs text-content" />
            </view>
          </view>
        </view>
        <view class="space-y-4">
          <view class="font-medium text-color-3">Your Name</view>
          <view class="rounded-xl bg-main p-4">
            <input placeholder="MAHMODUL hASAN" v-model="userInfo.name" />
          </view>
          <view class="font-medium text-color-3">Email Address</view>
          <view class="rounded-xl bg-main p-4">
            <input
              placeholder="xxxxxxxxxx@gmail.com"
              v-model="userInfo.email"
            />
          </view>
        </view>
        <view class="space-y-4">
          <view class="font-medium text-color-3">Password</view>
          <view class="rounded-xl bg-main p-4">
            <input placeholder="xyz@gmail.com" />
          </view>
          <view class="flex justify-end text-xs text-color-3">
            Recovery Password
          </view>
        </view>
        <view>
          <nut-button type="primary" block size="large">Save Now</nut-button>
        </view>
      </view>
    </view>
  </page-config-provider>
</template>

<style scoped lang="scss"></style>
