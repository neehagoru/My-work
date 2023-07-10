import {createApp} from 'vue'
import App from './App.vue'
import router from './routes'
import './assets/css/app.css'
// import Dashboard from './view/master/Dashboard'
if(localStorage.users === undefined){

    let users = [
  
      {
        email:"admin@gmail.com",
  
        password: "admin",

  
      },
  
    ];
  
    localStorage.setItem("users",JSON.stringify(users));
  
  
  
  
  }
//   Vue.config.productionTip = false;

// createApp(App).use(router).mount('#app')
const app = createApp(App)
app.use(router)
app.mount('#app')




// new Vue({
//     router,
//     render: h => h(App),
// }).$mount('#app')
