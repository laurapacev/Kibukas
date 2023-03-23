import Vue from 'vue';
import VueRouter from 'vue-router';

// Views
import Home from './views/Home.vue';
import Login from './views/Login.vue';

Vue.use(VueRouter);

let routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresAuth: false,
            requiresNoAuth: true
        }
    }
];

export default new VueRouter({
    mode: 'history',
    routes
});