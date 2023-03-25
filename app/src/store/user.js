// Store is being set by User.js mixin

export default {
    state: {
      apiState: 0,
      user: []
    },
    getters: {
        isUserLoggedIn(state) {
            if(state.user.length == 0)
                return false
            return true
        },
        getApiState(state)
        {
            return state.apiState
        }
    },
    mutations: {
        setApiState(state, sts)
        {
            state.apiState = sts
        },
        setUser(state, usr)
        {
           state.user = usr
        },
        logoutUser(state,)
        {
           state.user = []
        }
    }
}