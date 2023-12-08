<script setup lang="ts">
import { computed, nextTick, onMounted, reactive, ref, watch } from "vue";

interface Props {
  data: Array<string>; // 数组数据
  value: number; // 默认选中第几个
  scroll?: boolean; // 滚动模式
  name?: string;

  gap?: string; // 间距
  duration?: number; // 滑块移动一次所需的时间，单位秒

  lineToTab?: string; // 下划线距离标签的距离
  lineWidth?: string; // 滑块宽度
  lineHeight?: string; // 滑块高度
  lineBackground?: string; // 滑块的背景颜色
  lineRounded?: string; // 滑块的圆角

  fontSize?: string; // tab文字大小

  activeBold?: boolean; // 选中是否加粗
  activeScale?: number; // 选中放大的比例
  activeColor?: string; // 选中的颜色
}

const props = withDefaults(defineProps<Props>(), {
  value: 0,
  scroll: false,
  name: "name",
  gap: "1rem",
  duration: 0.3,
  lineToTab: "0.5rem",
  lineHeight: "0.15rem",
  lineBackground: "$uni-color-primary",
  lineRounded: "0.5rem",
  fontSize: "0.85rem",
  activeBold: false,
  activeScale: 1,
  activeColor: "$uni-color-primary",
});

const $emits = defineEmits(["update:value", "change"]);

// 下划线需要增加的样式
const lineStyle = reactive({
  transitionDuration: `${props.duration}s`,
  left: "",
  width: "",
  height: props.lineHeight,
  background: props.lineBackground,
  borderRadius: props.lineRounded,
});

// tabsItem的样式
const tabsItemStyle = (index: number) => {
  let style = {
    marginBottom: props.lineToTab,
    flex: 0,
    fontSize: props.fontSize,
  };

  const active = {
    fontWeight: props.activeBold ? 700 : 500,
    scale: props.activeScale,
    color: props.activeColor,
  };

  if (props.value === index) style = { ...style, ...active };

  if (!props.scroll) style.flex = 1;

  return style;
};

const onChangeTab = (index: number) => {
  $emits("change", {
    index,
    data: props.data[index],
  });
  $emits("update:value", index);
};

watch(
  () => props.value,
  () => {
    setTabList();
  },
);

watch(
  () => props.data,
  (value, oldValue, onCleanup) => {
    if (value.length) {
      nextTick().then(() => {
        initTabsDom();
        setTabList();
      });
    }
  },
  {
    deep: true,
  },
);

onMounted(() => {
  init();
});

const init = () => {
  initTabsDom();
  setTabList();
};

const scrollLeft = ref(0);

const setTabList = () => {
  nextTick().then(() => {
    const el = tabItemDomArr.value[props.value];
    if (!el) return;
    // 设置下划线
    const lineWidth = el.width / 2;
    const lineLeft = lineWidth - tabListDom.value.left + el.left;
    lineStyle.width = props.lineWidth || `${lineWidth}px`;
    lineStyle.left = `${lineLeft}px`;
    // 设置标签位置
    scrollLeft.value = lineLeft - tabListDom.value.width / 2;
  });
};

const tabItemDomArr = ref<Array<DOMRect>>([]);
const tabListDom = ref<DOMRect>({});

// 初始化 dom
const initTabsDom = () => {
  let query = uni.createSelectorQuery();

  // 获取所有tabs-item的位置信息
  props.data.forEach((item: string, index: number) => {
    query.select(`#tabs-item-${index}`).boundingClientRect();
  });
  query.exec((rectArr: Array<DOMRect>) => {
    tabItemDomArr.value = rectArr;
  });

  // 获取tabs-list信息
  query
    .select(".tabs-list")
    .boundingClientRect((rect: DOMRect) => {
      tabListDom.value = rect;
    })
    .exec();
};
</script>

<template>
  <view class="tabs">
    <scroll-view scroll-x :scroll-left="scrollLeft" scroll-with-animation>
      <view class="tabs-list" :style="{ gap: gap }">
        <view
          v-for="(item, index) in data"
          :key="index"
          :id="`tabs-item-${index}`"
          class="tabs-item"
          :class="{ 'tabs-item-select': index === value }"
          @click="onChangeTab(index)"
          :style="tabsItemStyle(index)"
        >
          {{ item[name] }}
        </view>
      </view>
      <view class="line" :style="lineStyle" />
    </scroll-view>
  </view>
</template>

<style scoped lang="scss">
.tabs {
  position: relative;

  .tabs-list {
    display: flex;
    white-space: nowrap;
  }

  .tabs-item {
    text-align: center;
    transition: all 0.2s;
  }

  .line {
    position: absolute;
    bottom: 0;
    transform: translateX(-50%);
  }
}
</style>
