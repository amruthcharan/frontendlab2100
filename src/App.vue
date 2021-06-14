<template>
  <div id="app">
    <div id="nav">
      <button v-if="$route.name !== 'Home'" @click="logout" class="float-end btn btn-danger">Logout</button>
    </div>
    <router-view/>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  created() {
    if (!localStorage.getItem('token') && this.$route.name !== 'Home') {
      this.$router.push('/');
    }
  },
  methods: {
    async logout() {
        try{
          const {data} = await axios.post(`${process.env.VUE_APP_BASE_API}/logout`, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} });
          if (data?.status || false) {
            localStorage.removeItem('token');
            this.$swal('success', 'You are successfullt logged out!', 'success');
            this.$router.push('/');
          }
        } catch(e) {
          console.log(e);
        }
    }
  }  
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
