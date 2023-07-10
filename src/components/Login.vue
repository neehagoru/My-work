<template>
  <div class="auth-wrapper">
    <div class="auth-inner">
     <form @submit.prevent="loginUser">
            <h3>Sign in</h3>
 
            <div class="form-group">
                <label>Email</label> <br/>
                <input type="email" class="form-control" v-model="email" placeholder="Email" /> <br/>
                
            </div>
            
 
            <div class="form-group">
                <label>Password</label> <br/>
                <input type="password" class="form-control" v-model="password" placeholder="Password"/> <br/>
                    
            </div>
            
 
            <button class="btn btn-primary btn-block">Sign in</button>

            <p class="forgot-password text-center">
                New to this site? <br/>
                <router-link :to="{name: 'Register'}">sign up?</router-link>
            </p>
    </form>
  </div>
  </div>
   
</template>

<script>

    export default {
        name: 'LOGIN',
        data() {
    return {
        email: "",
        password: "",
        
    };
},
methods: {
    loginUser() {
      let credentials = {
        email: this.email,
        password: this.password,
      };
      alert('Login succesfully!!');
//   // login code goes here
  let lsUsers = localStorage.users;
  lsUsers = JSON.parse(lsUsers);
  let emailIndex = lsUsers.findIndex((user) => user.email === credentials.email);
  if (emailIndex > -1) {
    let passwordIndex = lsUsers.findIndex((user) => user.password === credentials.password);

    if (passwordIndex > -1) {
      let activeUser = lsUsers.find(
        (user) => user.email === credentials.email
      );
      
      // this.activeUser = loggedInUser;
      localStorage.setItem("activeUser", JSON.stringify(activeUser));
      if (activeUser.email === 'admin@gmail.com')
      localStorage.setItem("activeUser", JSON.stringify(activeUser));
      this.$router.push("/dashboard");
    
}
  }
}
}
    };


</script>
<style>
 
</style>