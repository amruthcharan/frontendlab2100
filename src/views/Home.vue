<template>
  <div class="home">
    <h1>Login</h1>
      <form class="w-25 m-auto" @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter email" :class="{'is-invalid' : errors.email}">
          <span class="invalid-feedback">{{ errors.email }}</span>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" placeholder="Password" :class="{'is-invalid' : errors.password}">
          <span class="invalid-feedback">{{ errors.password }}</span>
        </div>
        <button type="submit" class="btn btn-primary mt-3">Submit</button>
      </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  created() {
    if (localStorage.getItem('token')) {
      this.$router.push('/items');
    }
  },
  data() {
    return {
      'email': '',
      'password': '',
      'errors': {
        'email': '',
        'password' : ''
      }
    }
  },
  methods: {
    async login() {
      this.validate();
      try {
        const {data} = await axios.post(`${process.env.VUE_APP_BASE_API}/login`, {'email': this.email, 'password': this.password});
        if (data.status) {
          localStorage.setItem('token', data.token);
          this.$router.push('/items');
        }
        if (data.errors?.email || false) {
          this.errors.email = data.errors.email[0];
        }
        if (data.errors?.password || false) {
          this.errors.password = data.errors.password[0];
        }
      } catch(e) {
        console.log(e);
      }
    },
    validate() {
      if (!this.email) {
        this.errors.email = 'Email is required';
      } else {
        this.errors.email = '';
      }
      if (!this.password) {
        this.errors.password = 'Password is required';
      } else {
        this.errors.password = '';
      }
      return;
    }
  }
}

</script>
