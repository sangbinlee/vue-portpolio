<template>



<div id="liveAlertPlaceholder"></div>
<button type="button" class="btn btn-primary" id="liveAlertBtn">Show live alert</button>


  <div class="card py-3 px-3 my-3">
    <!-- <form> -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="form.mail"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="form.password"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button @click="login"  type="submit" class="btn btn-primary">Submit</button>
    <!-- </form> -->
    <div>

      {{ form }}
    </div>
  </div>



</template>

<script setup>



import { useRouter } from "vue-router";
const router = useRouter();



import { useUserStore } from "../stores/user-store";
const userStore = useUserStore();

console.log('[1 로그인 페이지 userStore]',userStore);
console.log('[1 로그인 페이지 userStore.username]',userStore.username);
console.log('[1 로그인 페이지 userStore.isLoggedIn]',userStore.isLoggedIn);

const login = () => {
  userStore.username = "test";


  console.log('[로그인 페이지 userStore.username 222222222222222]',userStore.username);
  console.log('[로그인 페이지 userStore.isLoggedIn 222222222222222]',userStore.isLoggedIn);


  if (userStore.isLoggedIn) { // pinia에서는 getter를 필드처럼 사용 가능하다.
    // 로그인 성공 시 페이지 이동
    router.push("/");
  }
};

import { onMounted, ref ,reactive} from 'vue'

const testMail= 'sangbinlee9@gmail.com'
const testPassword= '1234'

const form = reactive({
  mail:testMail,
  password:testPassword,
  // mail:'',
  // password:'',
})

onMounted(()=>{
  // form.mail='sangbinlee9@gmail.com',
  // form.password='1234',
})


</script>






<style>
@media (min-width: 1024px) {
  .about {
    /* min-height: 100vh; */
    /* display: flex; */
    /* align-items: center; */
  }
}
</style>
