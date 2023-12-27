import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore, useAlertStore } from '@/stores';
import { Home } from '@/views';
import accountRoutes from './account.routes';
import usersRoutes from './users.routes';

import about from '../views/AboutView.vue'
import board from '../views/Board.vue'
// import login from '../views/Login.vue'
// import signup from '../views/Signup.vue'
// import store from '../store/index.js'

// import { useUserStore } from "../stores/user-store";
// const userStore = useUserStore();
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{auth:false}
  },
  { ...accountRoutes },
  { ...usersRoutes },
  {
    path: '/about',
    name: 'about',
    component: about,
    meta:{auth:false}
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: login,
  //   meta:{auth:false}
  // },
  // {
  //   path: '/signup',
  //   name: 'signup',
  //   component: signup,
  //   meta:{auth:false}
  // },
  {
    path: '/board',
    name: 'board',
    component: board,
    meta:{auth:true}
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: routes
})


router.beforeEach(async (to)=>{
// router.beforeEach(async (to, from, next)=>{
  // clear alert on route change
  const alertStore = useAlertStore();
  alertStore.clear();


    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = [
      '/account/login', 
      '/account/register',
      // '/',
    ];
    const authRequired = !publicPages.includes(to.path);
    const authStore = useAuthStore();

    if (authRequired && !authStore.user) {// 
        authStore.returnUrl = to.fullPath;
        return '/account/login';
    }

  // console.log('beforeEach ==========to========',to);
  // console.log('beforeEach ==========from========',from);
  // console.log('beforeEach ==========next========',next);
  // store.commit('increment')// 함수 콜
  // console.log('beforeEach store.state.count===========',store.state.count) // -> 1
  // console.log('beforeEach store.state.count===========',store.state.count) // -> 1
  // console.log('beforeEach store.state.auth===========',store.state.auth) // -> 1
  // if (to.matched.some(o=>o.meta.auth)) {
  //   console.warn('beforeEach 권한이 필요한 페이지입니다. .............');
  //   const token = localStorage.getItem('token')
  //   console.warn('beforeEach 권한이 필요한 페이지입니다. - 토큰이 있는지 확인합니다..............token', token);
  //   if (token) {
  //     console.log('beforeEach token 이 존재합니다. token====', token);
  //     return next()
  //   }
  //   console.warn('beforeEach 권한이 필요한 페이지입니다. 합니다. 토큰이 없으면 로그인페이지로 이동합니다..............');
  //   return next('/login')
  // }
  // console.log('beforeEach 권한이 필요 없습니다.............');
  // next()
})
// router.beforeEach( (to, from, next)=>{
  // console.log('===============to', to);
// })

// router.beforeEach((to, from, next)=>{
//   console.log('===============to', to);

  // const store = useStore()


  // console.log('===============store.state.auth', store.state.auth);
//   console.log('=============== to.meta.auth', to.meta.auth);
//   if (to.meta.auth) {
//     console.log('login page 로 이동');
//     // next('/login')
//   }
// })


// export default router