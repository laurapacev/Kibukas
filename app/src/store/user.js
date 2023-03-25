// Store is being set by User.js mixin

// Firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAD1WEV3K283NKoCXsRxaBk--KV9piKpCc",
  authDomain: "kibukas-68495.firebaseapp.com",
  projectId: "kibukas-68495",
  storageBucket: "kibukas-68495.appspot.com",
  messagingSenderId: "718635856365",
  appId: "1:718635856365:web:1e462bc10bf8fcd19277e4",
  measurementId: "G-H087EJPNHJ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

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
        }
    },
    // https://stackoverflow.com/questions/51495461/how-to-prevent-any-routing-before-some-async-data-in-vuex-store-has-loaded
    actions: {
        init ({ dispatch }) {       // Could also be async and use await instead of return
            return Promise.all([
              dispatch('getUserSession'), // Using another action
            ])
        }
        ,
        async getUserSession({ dispatch, commit }) {
            await auth.onAuthStateChanged((user) => {
                if (user)
                {
                    console.log("get user")
                    commit('setUser', user)
                }
                commit('setApiState', 1)
            });
        }
    }
}