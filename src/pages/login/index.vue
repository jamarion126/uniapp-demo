<script setup lang="ts">
import { useForm } from "@alova/scene-vue";
import { login } from "@/api/methods/user";
import validator from "lron-validator";
import { useUserStore } from "@/store/user";
import { useRouter } from "uni-mini-router";

const router = useRouter();

const { form, loading, send, onSuccess, onError } = useForm(
  (form) => login(form),
  {
    initialForm: {
      email: "min126@qq.com",
      password: "123456",
    },
  },
);

onSuccess(({ data }: any) => {
  if (data.data.success) {
    useUserStore().$patch((state) => {
      state.userInfo = data.data.userInfo;
    });

    router.pushTab({ path: "/pages/index/index" });
  } else {
    uni.showToast({ title: "请输入正确的账号密码", icon: "error" });
  }
});

function submit() {
  validator(
    form.value,
    [
      {
        name: "email",
        rule: ["required", "isEmail"],
        msg: ["请输入邮箱", "请输入正确的邮箱格式"],
      },
      { name: "password", rule: ["required"], msg: ["请输入密码"] },
    ],
    (validate, msg) => {
      if (!validate) {
        uni.showToast({ title: msg, icon: "none" });
        return;
      }
      send();
    },
  );
}
</script>

<template>
  <page-config-provider>
    <view class="box-border h-screen bg-content">
      <!--ifdef  MP-WEIXIN-->
      <safe-area type="top" />
      <!--endif-->
      <view class="space-y-8 p-4">
        <view class="flex flex-col items-center space-y-4 pt-12">
          <view class="text-3xl font-bold">Hello Again!</view>
          <view class="w-3/4 text-center text-color-3">
            Fill your details or continue withSocial media
          </view>
        </view>
        <view class="space-y-4">
          <view class="font-medium">Email Address</view>
          <view class="rounded-xl bg-main p-4">
            <input placeholder="xyz@gmail.com" v-model="form.email" />
          </view>
        </view>
        <view class="space-y-4">
          <view class="font-medium">Password</view>
          <view class="rounded-xl bg-main p-4">
            <input placeholder="xyz@gmail.com" v-model="form.password" />
          </view>
          <view class="flex justify-end text-xs text-color-3">
            Recovery Password
          </view>
        </view>
        <view>
          <nut-button
            type="primary"
            block
            size="large"
            @click="submit"
            :loading="loading"
            >Sign In
          </nut-button>
        </view>
        <view>
          <nut-button block size="large"> Sign In with Google</nut-button>
        </view>
      </view>
    </view>
  </page-config-provider>
</template>

<style scoped lang="scss"></style>
