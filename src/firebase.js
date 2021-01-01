import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCQhQEFzubHFq-rcVj_hUEmbaRO6v97zBA",
  authDomain: "food-5b356.firebaseapp.com",
  projectId: "food-5b356",
  storageBucket: "food-5b356.appspot.com",
  messagingSenderId: "178959247450",
  appId: "1:178959247450:web:49a7dd0220f9f582381063",
  measurementId: "G-RP19EDHW9E",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db };
