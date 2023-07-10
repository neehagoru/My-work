// import Vue from 'vue';
import {createWebHistory, createRouter} from 'vue-router'
import home from './view/home'
import profile from './view/profile'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Dashboard from './view/master/Dashboard.vue'
// Vue.use(Router)
// function guest(to, from, next) {
//     if(localStorage.activeUser) {
//         next({name: "Dashboard"})
//     } else next();
// }

// function guard(to, from, next) {
//     if(localStorage.activeUser) {
//         next()
//     } else next({name: "Login"});
// }
const routes=[
    
    {
        name: 'Login',
        path: '/',
        component: Login,
        // beforeEnter: guest,
    },

    {
        name: 'Register',
        path: '/Register',
        component: Register,
        // beforeEnter: guest,
    },

    {
        name: 'Dashboard',
        path: '/dashboard',
        component: Dashboard,
        // beforeEnter: guard,
    },

            {
            name: 'home',
            path: '/home',
            component: home,
            // beforeEnter: guard,
        },

                        {
                name: 'profile',
                path: '/profile',
                component: profile,
                // beforeEnter: guard,
            },

];

const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;

// export default new Router({
//     routes: [
//         {path:'/', component: Home},
//         {path:'/login', component: Login}
//     ]
// })
