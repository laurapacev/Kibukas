import Vue from 'vue';
import VueRouter from 'vue-router';

// Views
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import NotFound from './views/NotFound.vue';

Vue.use(VueRouter);

let routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresAuth: false,
            requiresNoAuth: true
        }
    }, 
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            requiresAuth: false,
            requiresNoAuth: true
        }
    },  
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/notfound',
        name: 'NotFound',
        component: NotFound,
        meta: {
            requiresAuth: false
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach(async (to, from, next) => {
    if (to.meta.requiresAuth) {
        if(!router.app.$store.getters.isUserLoggedIn)
            router.push({ path: '/login', name: 'Login' })
    }
    else {
        next()
    }

    if(to.meta.requiresNoAuth && router.app.$store.getters.isUserLoggedIn)
    {
        router.push({ path: '/', name: 'Home' })
    }
    else {
      next()
    }
})

export default router