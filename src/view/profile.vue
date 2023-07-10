

<template>

  <div class="profile">

    <h1>Welcome  {{ user.firstname }}</h1>

    <div class="table-responsive" v-if="user.email ==='admin@gmail.com'">

      <table class="table table-dark table-hover">

        <thead>

          <tr>

            <th>ID</th>

            <th>Firstname</th>
            <th>Lastname</th>

            <th>Email</th>

          </tr>

        </thead>

        <tbody>

          <tr v-for="(item,index) in users" :key ="item.firstname">

            <td>{{index+1}}</td>

            <td>{{item.firstname}}</td>
            <td>{{item.lastname}}</td>

            <td>{{item.email}}</td>

          </tr>




        </tbody>

      </table>

   

    </div>




 </div>





</template>




<script>

export default {

  name:"PROFILE",

  data(){

    return {

      user: "",

      users:[]

     

    };

  },

  mounted(){

        if(localStorage.activeUser){

            let lsUsers = localStorage.users;

            this.users = JSON.parse(lsUsers);

            let activeUser = localStorage.activeUser;

            this.user = JSON.parse(activeUser);

        }

    },






};

</script>




<style>




</style>