<script setup lang="ts">
import { useSystemStore } from "@/store/system";
import { storeToRefs } from "pinia";

interface Props {
  type?: "top" | "bottom";
}

const props = withDefaults(defineProps<Props>(), {
  type: "bottom",
});

const systemStore = useSystemStore();
const { bottomSafetyHeight, statusBarHeight } = storeToRefs(systemStore);
</script>

<template>
  <template v-if="type === 'bottom'">
    <view :style="{ height: bottomSafetyHeight + 'px' }" />
  </template>
  <template v-else-if="type === 'top'">
    <view :style="{ height: statusBarHeight + 'px' }" />
  </template>
</template>

<style scoped lang="scss"></style>
