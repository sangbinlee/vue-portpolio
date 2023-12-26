import { createRouter, createWebHistory } from 'vue-router'
import about from '../views/AboutView.vue'
import board from '../views/Board.vue'
import HomeView from '../views/HomeView.vue'
import login from '../views/Login.vue'
import signup from '../views/Signup.vue'
import store from '../store/index.js'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{auth:false}
  },
  {
    path: '/about',
    name: 'about',
    component: about,
    meta:{auth:false}
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta:{auth:false}
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup,
    meta:{auth:false}
  },
  {
    path: '/board',
    name: 'board',
    component: board,
    meta:{auth:true}
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})


router.beforeEach(async (to, from, next)=>{
  console.log('==========to========',to);
  console.log('==========from========',from);
  console.log('==========next========',next);
  store.commit('increment')// 함수 콜
  console.log('store.state.count===========',store.state.count) // -> 1
  console.log('store.state.auth===========',store.state.auth) // -> 1
  if (to.matched.some(o=>o.meta.auth)) {
    console.warn('권한이 필요합니다. 로그인하세요.............');
    const token = localStorage.getItem('token')
    if (token) {
      console.log('token 이 존재합니다. token====', token);
      return next()
    }
    return next('/login')
  }
  console.log('권한이 필요 없습니다.............');
  next()
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


export default router
