<script setup>

import TheWelcome from '../components/TheWelcome.vue'

import { useRouter } from "vue-router";
const router = useRouter();

import { useUserStore } from "../stores/user-store";
const userStore = useUserStore();
const username = userStore.username;
const logout = () => {
  userStore.username = null;
  if (!userStore.isLoggedIn) {
    // 로그아웃 성공 시 페이지 이동
    router.push("/login");
  }
};



import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores';
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

</script>


<template>


  <div>main page</div>

  <div v-if="user">
      <h1>Hi {{user.firstName}}!</h1>
      <p>You're logged in with Vue 3 + Pinia & JWT!!</p>
      <p><router-link to="/users">Manage Users</router-link></p>
  </div>



  <router-link to="/login" class="btn btn-primary" v-if="!username">Login</router-link> 
  <div class="" v-if="username"> 
    <span>
      {{ username }}님 안녕하세요. 
    </span>
    <button @click="logout" class="btn btn-primary">logout</button>
  </div>



  <!-- <main>
    <TheWelcome />
  </main> -->
</template>




