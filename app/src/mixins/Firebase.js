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

export const Firebase = {
    data() {
        return {

        }
    },
    methods: {
        getFirebase()
        {
            return firebaseApp;
        },
        getAuth()
        {
            return auth
        }
    }
}