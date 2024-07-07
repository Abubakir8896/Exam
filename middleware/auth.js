export default defineNuxtRouteMiddleware((to,from)=>{
    const token = localStorage.getItem('token');
    console.log('Hello',token);
    if(!token){
      return navigateTo('/auth/login');
    }})  