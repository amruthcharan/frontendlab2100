<template>
  <div>
    <h1>Edit {{item.name}}</h1>
    <form class="w-25 m-auto" @submit.prevent="update">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" v-model="item.name" placeholder="Enter name" :class="{'is-invalid' : errors.name}">
            <span class="invalid-feedback">{{ errors.name }}</span>
        </div>
        <div class="form-group">
            <label for="quantity">Quantity</label>
            <input type="text" class="form-control" id="quantity" v-model="item.quantity" placeholder="Quantity" :class="{'is-invalid' : errors.quantity}">
            <span class="invalid-feedback">{{ errors.quantity }}</span>
        </div>
        <div class="form-group">
            <label for="price">Price</label>
            <input type="text" class="form-control" id="price" v-model="item.price" placeholder="Price" :class="{'is-invalid' : errors.price}">
            <span class="invalid-feedback">{{ errors.price }}</span>
        </div>
        <button type="submit" class="btn btn-primary mt-3">Update</button>
    </form>
    <button @click="$router.back()" class="btn btn-secondary mt-3">Cancel</button>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  created() {
    if (!localStorage.getItem('token')) {
      this.$router.push('/');
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const {data} = await axios.get(`http://127.0.0.1:8000/api/item/${this.$route.params.id}`, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} });
        this.item = data.item;
      } catch(e) {
        if (e.response.status == 401) {
          localStorage.removeItem('token');
          this.$router.push('/');
        }
      }
    },
    async update() {
        let headers = {"Authorization" : `Bearer ${localStorage.getItem('token')}`};
      try {
        const {data} = await axios.put(`http://127.0.0.1:8000/api/item/${this.$route.params.id}`, this.item, {headers: headers});
        if (data.status) {
          this.$swal('success', data.message, 'success');
          this.$router.push('/items');
        } else {
          this.$swal('oops!', 'something went wrong! try again!!', 'error');
        }
      } catch(e) {
        if (e.response.status == 401) {
          localStorage.removeItem('token');
          this.$router.push('/');
        } else if(e.response.status == 422) {
          let data = e.response.data;
          if (data.errors?.name || false) {
              this.errors.name = data.errors.name[0];
          } else {
              this.errors.name = '';
          }
          if (data.errors?.quantity || false) {
              this.errors.quantity = data.errors.quantity[0];
          } else {
              this.errors.quantity = '';
          }
          if (data.errors?.price || false) {
              this.errors.price = data.errors.price[0];
          } else {
              this.errors.price = '';
          }
        }
      }
    },
  },
  data() {
    return {
      item: {},
      errors: {
          name: '',
          quantity: '',
          price: ''
      }
    }
  },


}
</script>