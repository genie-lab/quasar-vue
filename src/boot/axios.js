import { boot } from "quasar/wrappers";
import axios from "axios";
import Config from "../../config";
import { Notify } from "quasar";
import { LoadingBar } from "quasar";
import { Cookies } from "quasar";
const isDev = process.env.NODE_ENV == "development";
const config = isDev ? Config.development : Config.production;
const api = axios.create({ baseURL: config.API_SERVER, withCredentials: true });

// // 요청 인터셉터 추가
// api.interceptors.request.use(intercepterReq("api", isDev));
// // 요청 인터셉터 함수
// function intercepterReq(name, isDev = false) {
//   return function (config) {
//     try {
//       // // 요청을 보내기 전에 수행할 일
//       // // ...
//       config.timeout = 60 * 1000;
//       if (typeof window == "object" && Cookies.has("token")) {
//         config.headers.Authorization = "Bearer " + Cookies.get("token"); // 서버에서 res.cookie로 넣어준 것 get
//       }
//       if (isDev) {
//         console.log("AJAX intercepterReq", name, config);
//       }
//       return config;
//     } catch (error) {
//       return Promise.reject(error);
//     }
//   };
// }

function intercepterRes(name, isDev = false) {
  return function (response) {
    let { data, status } = response;

    if (isDev) {
      console.log("AJAX", name, status, data);
    }

    try {
      if (status && status !== 200) {
        let message = `${name} AJAX Error : ${status}`;
        try {
          Notify.create({ type: "negative", message: message });
          LoadingBar.increment(50);
          LoadingBar.setDefaults({
            color: "purple",
            size: "5px",
            position: "bottom",
          });
        } catch (error) {}
        throw new Error(`${name} AJAX Error : ${status}`);
      }

      try {
        if (data.status != 200) {
          LoadingBar.increment(50);
          LoadingBar.setDefaults({
            color: "green",
            size: "5px",
            position: "bottom",
          });
          console.log("data.message", data.message);
          Notify.create({
            type: "negative",
            color: "purple",
            message: data.message,
          }); // error 메시지포함
        } else {
          LoadingBar.increment(50);
          LoadingBar.setDefaults({
            color: "blue",
            size: "5px",
            position: "top",
          });
        }
        return data;
      } catch (error) {
        if (isDev) {
          console.error(error);
        }
      }
    } catch (error) {
      if (isDev) {
        console.error(error);
      }
      return false;
    }
  };
}

api.interceptors.response.use(intercepterRes("api", isDev));

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api, axios };
