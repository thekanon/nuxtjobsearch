export default defineNuxtRouteMiddleware((to, from) => {
  alert("test");
  if (to.params.loginUser) {
    if (to.params.loginUser.indexOf("쿼카")) {
      alert("쿼카가 아닙니다.");
      return abortNavigation("/");
    } else {
      alert("쿼카는 환영입니다.");
      // return navigateTo(to.path);
    }
  }
  // if (to.path !== "/") {
  //   return navigateTo("/");
  // }
});
