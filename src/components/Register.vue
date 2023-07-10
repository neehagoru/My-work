<template>
    <div class="auth-wrapper">
    <div class="auth-inner">
        <form @submit.prevent="registerUser">
            <h2>Sign Up</h2>
 
            <!-- <div class="form-group">
                <label>User Name</label> <br/>
                <input type="user name" class="form-control" placeholder="User Name"/>
            </div> -->
            <div class="form-group">
                <label>First Name</label> <br/>
                <input type="first name" class="form-control" v-model="firstname" placeholder="First Name"/>
            </div>
            <div class="form-group">
                <label>Last Name</label> <br/>
                <input type="last name" class="form-control" v-model="lastname" placeholder="Last Name"/>
            </div>
            <div class="form-group">
                <label>Email </label> <br/>
                <input type="email" class="form-control" v-model="email" placeholder="Email"/>
            </div>
 
            <div class="form-group">
                <label>Password</label> <br/>
                <input type="password" class="form-control" v-model="password" placeholder="Password"/>
            </div>

            <div class="form-group">
                <label>Confirm Password</label> <br/>
                <input type="password" class="form-control" v-model="password2" placeholder="Password"/>
            </div> <br/>
 
            <button class="btn btn-primary btn-block">Sign up</button>
 
            <p class="forgot-password text-center">
                Already registered <br/>
                <router-link :to="{name: 'Login'}">sign in?</router-link>
            </p>
        </form>
      </div>
      </div>
    
</template>
<script>

export default {
    name: "REGISTER",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password2: "",
      users: []
    };
  },
  methods: {
    registerUser() {
      let user = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        password2: this.password2
      };
      alert('Registered succesfully!! ');
    //   console.log(JSON.stringify(user));

      if (localStorage.users) {
         let lsUsers = localStorage.users;
          this.users = JSON.parse(lsUsers);
         }
        //  this.activeUser = user; 
          this.users.push(user); 
          localStorage.setItem("users", JSON.stringify(this.users));
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.password = "";
        this.password2 = "";
        this.$router.push("/");
         } 
        },
   

// const data = JSON.stringify(user)
// var fs = require('browserify-fs');
// try { fs.writeFileSync('myfile.txt', data, 'utf-8'); }
// catch(e) { alert('Failed to save the file !'+ e); }

 

//       // Send the user data to the server
//       fetch('http://localhost:8080/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//       })
//         .then(response => response.json())
//         .then(data => {
//           console.log('Data saved on the server:', data);
//         })
//         .catch(error => {
//           console.error('Error saving data on the server:', error);
//         });
    }

</script>

alert('Form submitted');
console.log(user);