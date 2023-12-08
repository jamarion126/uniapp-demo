import { createAlova } from "alova";
import AdapterUniapp from "@alova/adapter-uniapp";

const request = createAlova({
  baseURL:
    "https://www.fastmock.site/mock/8f417b2474cfa98900828bcf53ba29a4/shoes",
  ...AdapterUniapp(),
  responded: {
    onSuccess: async (response, method) => {
      if(response.statusCode !== 200) throw new Error(method.baseURL + method.url + ' 状态码为 ' + response.statusCode)
      if(response.data.code !== 200) throw new Error(method.baseURL + method.url + ' 后端给的状态码为 ' + response.data.code)
      return response.data;
    },
  },
});

export default request;
