<script>
import { RouterView } from 'vue-router'
import { useGlobalStore } from '@/stores/store';

export default {
  data() {
    return {}
  },
  async beforeMount() {
    let global = useGlobalStore();

    let userFetchRespone = await fetch("/api/userdata");
    let responseSecond = await userFetchRespone.json();
      
    console.log(responseSecond);

    if(responseSecond.error) {
      console.log("Error code: " + response.error);
      console.log("Error content: " + response.content);
      //Handle Error here figure it out 
      return;
    }

    global.username = responseSecond.username;
    global.isLoggedIn = true;
  }
}
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
