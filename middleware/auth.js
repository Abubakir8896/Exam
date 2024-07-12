export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.server) return
  if (import.meta.client)
    if(localStorage.getItem('token'))
      return
    else
      return navigateTo('/auth/login')
})