<script setup lang="ts">
import { nextTick, onMounted, reactive, ref, watch } from "vue";

const data1 = ref([]);

setTimeout(() => {
  data1.value = [
    { title: "标签1", name: "home" },
    { title: "标签2", name: "category" },
    { title: "标签3", name: "find" },
    { title: "标签4", name: "cart" },
    { title: "标签5", name: "my" },
  ];
}, 300);

const data = ref(["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"]);
const current = ref(0);

const change = (e) => {
  console.log(e);
};
</script>

<template>
  <page-config-provider>
    <view class="p-4">
      <tabs
        name="title"
        line-rounded="0"
        line-background="var(--primary-color)"
        :data="data1"
        v-model:value="current"
        lineWidth="1.5rem"
        scroll
        active-color="var(--primary-color)"
        @change="change"
      />
    </view>
  </page-config-provider>
</template>

<style scoped lang="scss"></style>
