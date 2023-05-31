export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to, from);
  // if (to.params.id === "1") {
  //   return abortNavigation();
  // }
  // if (to.path !== "/") {
  //   return navigateTo("/");
  // }
});
