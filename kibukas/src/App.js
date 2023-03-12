import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAD1WEV3K283NKoCXsRxaBk--KV9piKpCc",
  authDomain: "kibukas-68495.firebaseapp.com",
  projectId: "kibukas-68495",
  storageBucket: "kibukas-68495.appspot.com",
  messagingSenderId: "718635856365",
  appId: "1:718635856365:web:1e462bc10bf8fcd19277e4",
  measurementId: "G-H087EJPNHJ"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

function SignIn() {
  const signInWithGoodle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
}

return (
  <>
    <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
  </>
)

}

function SignOut() {
  return auth.currentUser && (

    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  return ( 
    <>
      <div>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <form>

        <input />

        <button type="submit">🍉</button>
      </form>

    </>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
  return (
    <div className={`message ${messageClass}`}>
        <img src={photoURL} />
        <p>{text}</p>
    </div>

  )
}


export default App;
