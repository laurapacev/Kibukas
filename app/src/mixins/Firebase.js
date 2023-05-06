import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, query, where, getDoc, getDocs, doc, setDoc, addDoc } from "firebase/firestore"; 

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
        // General firebase
        getFirebase()
        {
            return firebaseApp;
        },
        getAuth()
        {
            return auth
        },
        getProvider()
        {
            return provider
        },
        getDb()
        {
            return getFirestore(firebaseApp)
        },

        // Firestore
        async setDocument(collection_name, data_obj, doc_id = null)
        {
            if(doc_id !== null) 
                await setDoc(doc(this.getDb(), collection_name, doc_id), data_obj);  
            else 
                await addDoc(collection(this.getDb(), collection_name), data_obj);  
        },
        async getDocumentById(collection_name, doc_id)
        {
            const docRef = doc(this.getDb(), collection_name, doc_id);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists())
              return docSnap.data();
            return false
        },
        async getDocumentsWhere(collection_name, param1, comparison, param2)
        {
            // query(collection(db, "cities"), where("capital", "==", true))
            const q = query(collection(this.getDb(), collection_name), where(param1, comparison, param2));
            const querySnapshot = await getDocs(q);
            
            let array = []
            querySnapshot.forEach((doc) => {
                let obj = doc.data()
                obj.id = doc.id
               array.push(obj)
            })

            return array
        },
        async getDocuments(collection_name)
        {
            // query(collection(db, "cities"), where("capital", "==", true))
            const q = query(collection(this.getDb(), collection_name));
            const querySnapshot = await getDocs(q);
            
            let array = []
            querySnapshot.forEach((doc) => {
                let obj = doc.data()
                obj.id = doc.id
               array.push(obj)
            })

            return array
        }
    }
}