<template>
  <div id="app">
    <router-view></router-view>
    
      <!--<router-link to="/">app</router-link> |
      <router-link to="/login">Login</router-link>-->
      
   
  </div>
</template>

<!--2 行为：处理逻辑-->
<script>
//import Login from './views/Login'

export default {
  name: 'App',
  components: {
    //Login
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
