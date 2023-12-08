import { getCurrentInstance, nextTick } from "vue";

const System = {
  /**
   * 获取单个节点尺寸信息
   * @param domName 节点名称
   * @param callback 函数回调
   * @param isPage 是不是页面
   */
  getRect(domName: string, callback: Function, isPage?: boolean) {
    nextTick(() => {
      if (isPage) {
        uni
          .createSelectorQuery()
          .select(domName)
          .boundingClientRect((result) => {
            callback(result);
          })
          .exec();
      } else {
        uni
          .createSelectorQuery()
          .in(getCurrentInstance())
          .select(domName)
          .boundingClientRect((result) => {
            callback(result);
          })
          .exec();
      }
    });
  },
};

export default System;
