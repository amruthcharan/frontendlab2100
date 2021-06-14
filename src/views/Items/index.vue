<template>
  <div class="w-50 m-auto">
    <div>
      <h1>Items</h1>
      <button class="float-end btn btn-primary" @click="add">Add</button>
    </div>
    <table class="table table-striped">
      <thead class="thead-dark">
        <th>ID</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Actions</th>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button @click="editItem(item.id)" class="btn btn-warning btn-sm">Edit</button>
            <button @click="deleteItem(item.id)" class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
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
        const {data} = await axios.get(`${process.env.VUE_APP_BASE_API}/item`, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} });
        this.items = data.items.data;
      } catch(e) {
        if (e.response.status == 401) {
          localStorage.removeItem('token');
          this.$router.push('/');
        }
      }
    },
    async deleteItem(id) {
      try {
        const {data} = await axios.delete(`${process.env.VUE_APP_BASE_API}/item/${id}`, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} });
        if (data.status) {
          this.$swal('success', data.message, 'success');
          this.fetchData();
        } else {
          this.$swal('oops!', 'something went wrong! try again!!', 'error');
        }
      } catch(e) {
        if (e.response.status == 401) {
          localStorage.removeItem('token');
          this.$router.push('/');
        }
      }
    },
    async editItem(id) {
      console.log(id);
      this.$router.push({ name: 'editItem', params: {id: id}});
    },
    add() {
      this.$router.push({name: 'addItem'});
    }
  },
  data() {
    return {
      items: {}
    }
  },


}
</script>