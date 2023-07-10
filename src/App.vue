<template>
 
  
    <div class="auth-wrapper dashboard-wrapper ">
      <div class="auth-inner dashboard-inner">
        <router-view/>
      </div>
    </div>
    
</template>

<script>
        
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

  *{
    box-sizing: border-box;
    
  }

  body {
    background: #9cecf4 !important;
    min-height: 100vh;
    /* display: flex; */
    font-weight: 400;
    font-family: 'Fira Sans', sans-serif;
  }
  

  h1, h2, h3, h4, h5, h6, label, span{
    font-weight: 500;
    font-family: 'Fira Sans', sans-serif;
  }

  body, html, #app, #root, auth-wrapper{
    width: 100%;
    height: 100%;

  }

  #app{
    text-align: center;
    
  }

  

  .auth-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}
.auth-inner {
  margin: 0 auto;
  background: #9cecf4;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}

  .auth-wrapper .form-control:focus {
    border-color: #167bff;
    box-shadow: none;
  }

  .auth-wrapper h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
  }

   /* .dashboard-wrapper {
  background: #b6edec;
} */

.dashboard-inner {
  padding: 0;
  border-radius: 0;
  box-shadow: none;
}
  .custom-control-label {
    font-weight: 400;

  }

  .forgot-password,
  .forgot-password a {
    text-align: right;
    font-size: 13px;
    padding-top: 10px;
    color: #7f7d7d;
    margin: 0;
  }

  .forgot-password a {
    color: #167bff;
  }
  
</style>
