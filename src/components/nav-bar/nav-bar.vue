<script setup lang="ts">
import { useSystemStore } from "@/store/system";
import { storeToRefs } from "pinia";
import { useRouter } from "uni-mini-router";
import { useSlots } from "vue";

const router = useRouter();
const slots = useSlots();
console.log("=>(nav-bar.vue:9) slots", slots);

interface Props {
  customBack?: boolean;
  back?: boolean;
  title?: string;
  background?: string;
}

const props = withDefaults(defineProps<Props>(), {
  customBack: false,
  back: true,
  title: "",
  background: "transparent",
});

const $emits = defineEmits(["onBack"]);

// #ifdef MP-WEIXIN
const systemStore = useSystemStore();
const { statusBarHeight } = storeToRefs(systemStore);
const menuInfo = uni.getMenuButtonBoundingClientRect();
console.log("=>(nav-bar.vue:31) menuInfo", menuInfo);
const height = (menuInfo.top - statusBarHeight.value) * 2 + menuInfo.height;
// #endif

const toBack = () => {
  if (props.customBack) $emits("onBack");
  else router.back();
};
</script>

<template>
  <view class="fixed top-0 z-10 w-full transition" :style="{ background }">
    <!-- #ifdef MP-WEIXIN -->
    <view :style="{ height: statusBarHeight + 'px' }"></view>
    <view class="relative" :style="{ height: height + 'px' }">
      <template v-if="slots.default">
        <view class="h-full" :style="{paddingRight: `calc(100vw - ${menuInfo.left}px)`}">
          <slot />
        </view>
      </template>
      <template v-else>
        <!--back-->
        <template v-if="back">
          <view
            class="absolute left-3 grid h-full transform place-content-center active:scale-95 active:opacity-70"
            :style="{ width: height + 'px' }"
            @click="toBack"
          >
            <text class="iconfont icon-toleft !text-xl" />
          </view>
        </template>
        <!--title-->
        <template v-if="title">
          <view
            class="absolute left-1/2 top-1/2 line-clamp-1 w-1/3 -translate-x-1/2 -translate-y-1/2 transform text-center text-lg font-medium"
          >
            {{ title }}
          </view>
        </template>
        <!--slot-->
      </template>
    </view>
    <!-- #endif -->
  </view>
  <view :style="{ height: statusBarHeight + height + 'px' }" />
</template>

<style scoped lang="scss"></style>
