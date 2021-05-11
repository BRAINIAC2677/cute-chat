import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBQwYLNreWnwSEeNC3eOzr-2q-1PASglCI",
  authDomain: "cute-chat-43080.firebaseapp.com",
  projectId: "cute-chat-43080",
  storageBucket: "cute-chat-43080.appspot.com",
  messagingSenderId: "730231964779",
  appId: "1:730231964779:web:198ad75e908791fa541d2e",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
