import Vue from 'vue';
import VueRouter from 'vue-router';

// Views
import Login from './views/Login.vue';

Vue.use(VueRouter);

let routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    }
];

export default new VueRouter({
    mode: 'history',
    routes
});