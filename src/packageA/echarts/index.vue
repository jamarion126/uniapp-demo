<script setup lang="ts">
// #ifdef MP
const echarts = require("../static/echarts.min");
// #endif

// #ifndef MP
import * as echarts from "echarts/dist/echarts.esm";
// #endif

import LimeEchart from "@/packageA/components/lime-echart/lime-echart.vue";

import { getCurrentInstance, onMounted, ref } from "vue";

const { proxy } = getCurrentInstance();

const option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
};

const chart = ref();

onMounted(() => {
  chart.value.init(echarts, (chart) => {
    chart.setOption(option);
  });
});

const share = ()=>{
  uni.share()
}

</script>

<template>
  <page-config-provider>
    <view style="height: 750rpx">
      <!--<lime-echart ref="chart"/>-->
      <lime-echart ref="chart"/>
    </view>
    <view class="p-4">
      <nut-button open-type="share" type="primary" block>分享</nut-button>
    </view>
    <view class="p-4">
      <nut-button type="primary" block @click="share">分享</nut-button>
    </view>
  </page-config-provider>
</template>

<style scoped lang="scss"></style>
