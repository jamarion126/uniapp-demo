import { useUserStore } from "@/store/user";
import { useSystemStore } from "@/store/system";
import { key } from "@/utils/config";

export default function () {
  console.log("init");
  login();
  system();
}

/**
 * 登录
 */
function login() {
  const userStore = useUserStore();
}

/**
 * 系统
 */
function system() {
  const systemStore = useSystemStore();

  uni.getSystemInfo({
    success: (res) => {
      systemStore.$patch((state) => {
        state.systemInfo = res;
        state.theme = res.theme;
        // #ifndef H5
        state.bottomSafetyHeight = (res.screenHeight - res.safeArea.bottom) / 2;
        // #endif
        state.statusBarHeight = res.statusBarHeight;
      });
    },
  });

  uni.getLocation({
    type: "gcj02",
    success: (location) => {
      uni.request({
        url: "https://apis.map.qq.com/ws/geocoder/v1/?location=location", //腾讯官方逆解析接口，可直接复制
        data: {
          location: location.latitude + "," + location.longitude,
          key: key.qqmap, //自己申请的Key
        },
        method: "GET",
        success: (res: any) => {
          systemStore.$patch((state) => {
            state.location = { ...location, ...res.data.result };
          });
        },
        fail: (res) => {
          console.log(res.errMsg, "解析失败返回的错误信息");
        },
      });
    },
  });

  // 监听主题
  uni.onThemeChange((e) => {
    systemStore.$patch((state) => {
      state.theme = e.theme;
    });
  });

  // #ifndef H5
  // 监听键盘高度
  uni.onKeyboardHeightChange((e) => {
    systemStore.$patch((state) => {
      state.keyboardHeight = e.height;
    });
  });
  // #endif
}
