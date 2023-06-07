export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.loginUser === "로니") {
    alert("로니도 쿼카입니다.");
    return navigateTo("/login/쿼카");
  }

  // if (to.path !== "/") {
  //   return navigateTo("/");
  // }
});
