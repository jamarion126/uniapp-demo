<template>
  <!-- 吸顶 -->
  <view class="sticky-box">
    <!-- 滑动区域 -->
    <scroll-view
      class="scroll-view_H"
      :scroll-x="true"
      scroll-with-animation
      :scroll-left="tabsScrollLeft"
      @scroll="scroll"
    >
      <view class="tab" id="tab_list">
        <view
          id="tab_item"
          style="padding: 0 24rpx"
          :class="{ active: listActive == index, tab__item: true }"
          v-for="(item, index) in listArr"
          :key="index"
          @click="clickSort(index)"
        >
          {{ item }}
        </view>
      </view>
      <!-- tabs下划线 -->
      <view
        class="tab__line"
        :style="{
          width: lineStyle.width,
          transform: lineStyle.transform,
          transitionDuration: lineStyle.transitionDuration,
        }"
      >
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      listArr: [
        "压箱好书",
        "最新上架",
        "名著",
        "历史",
        "童书",
        "生活",
        "心理学",
        "艺术",
        "推理",
        "外国文学",
      ],
      listActive: 0, // 当前选中项
      tabsScrollLeft: 0, // tabs当前偏移量
      scrollLeft: 0,
      lineStyle: {}, // 下划线位置--动态甲酸
      duration: 0.2, // 下划线动画时长
    };
  },
  watch: {
    listActive(newVal) {
      // 监听当前选中项
      this.setTabList();
    },
  },

  mounted() {
    this.setTabList();
  },
  methods: {
    clickSort(index) {
      this.listActive = index;
    },
    // scroll-view滑动事件
    scroll(e) {
      this.scrollLeft = e.detail.scrollLeft;
    },
    setTabList() {
      this.$nextTick(() => {
        this.setLine();
        this.scrollIntoView();
      });
    },
    // 计算tabs位置
    scrollIntoView() {
      // item滚动
      let lineLeft = 0;
      this.getElementData("#tab_list", (data) => {
        let list = data[0];
        console.log("=>(index.vue:92) list", list);
        this.getElementData(`#tab_item`, (data) => {
          console.log("=>(index.vue:93) data", data);
          let el = data[this.listActive];
          lineLeft =
            el.width / 2 +
            -list.left +
            el.left -
            list.width / 2 -
            this.scrollLeft;
          this.tabsScrollLeft = this.scrollLeft + lineLeft;
        });
      });
    },
    //  计算下划线位置
    setLine() {
      let lineWidth = 0,
        lineLeft = 0;
      this.getElementData(`#tab_item`, (data) => {
        console.log("=>(index.vue:108) data", data);
        let el = data[this.listActive];
        lineWidth = el.width / 2;
        // lineLeft = el.width * (this.currentIndex + 0.5)  // 此种只能针对每个item长度一致的
        lineLeft = el.width / 2 + -data[0].left + el.left;
        this.lineStyle = {
          width: `${lineWidth}px`,
          transform: `translateX(${lineLeft}px) translateX(-50%)`,
          transitionDuration: `${this.duration}s`,
        };
      });
    },

    getElementData(el, callback) {
      uni
        .createSelectorQuery()
        .in(this)
        .selectAll(el)
        .boundingClientRect()
        .exec((data) => {
          callback(data[0]);
        });
    },
  },
};
</script>

<style>
.sticky-box {
  display: flex;
  position: sticky;
  top: var(--window-top);
  z-index: 99;
  flex-direction: row;
  margin: 0px;
  border-top: 1px #f9f9f9 solid;
  border-bottom: 1px #f9f9f9 solid;
  background: #fff;
}

.tab {
  position: relative;
  display: flex;
  font-size: 28rpx;
  padding-bottom: 10rpx;
  white-space: nowrap;

  &__item {
    flex: 1;
    padding: 0 20rpx;
    text-align: center;
    height: 60rpx;
    line-height: 60rpx;
    color: #666;

    &.active {
      color: #09c2c9;
    }
  }
}

.tab__line {
  display: block;
  height: 6rpx;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  border-radius: 3rpx;
  position: relative;
  background: #2fc6cd;
}

.scroll-view_H {
  /* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
  white-space: nowrap;
  width: 100%;
}
</style>
