import { boot } from "quasar/wrappers";
import { useUserStore } from "src/stores/user";
import { Notify } from "quasar";

export default boot(({ router, store }) => {
  router.beforeEach((to, from, next) => {
    // Now you need to add your authentication logic here, like calling an API endpoint
    const userStore = useUserStore();
    // console.log(userStore.$state.member);
    // console.log(userStore.isLoggedIn);
    // console.log(router.currentRoute);
    // console.log(to);
    //login 여부따라 로그인페이지 리다이렉트
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (!userStore.isLoggedIn) {
        console.log("userStore.isLoggedIn", userStore.isLoggedIn);
        alert("로그인이 필요한 페이지입니다");
        console.log("to>>>>>>>>>>>>>>>>>>>>>>>>>", to.fullPath);
        router.push({
          path: "login",
          redirect: router.options.history.state.current,
        });
        next();
        return;
      }
      // this.router.options.history.state.current;
    }
    next();
    return;
  });

  // router.scrollBehavior = (to, from, savedPosition) => {
  //   // 원하는 위치로 돌아가기
  //   console.log("to, from, savedPosition", to, from, savedPosition);
  // };
});
