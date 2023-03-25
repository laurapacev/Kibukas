import Vue from 'vue';
import VueRouter from 'vue-router';

// Views
import Home from './views/Home.vue';
import Login from './views/Login.vue';

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
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach(async (to, from, next) => {
    const storeInit = router.app.$store.dispatch('init')
    //console.log(router.app.$store.getters.isUserLoggedIn)
    if (to.meta.requiresAuth) {
        storeInit.then()
        .catch(e => {
          // Handle error
        })
        console.log("2")
        console.log(router.app.$store.state.user.user)
        if(!router.app.$store.getters.isUserLoggedIn)
            router.push({ path: '/login', name: 'Login' })
    } 
    else {
      next()
    }
})

export default router