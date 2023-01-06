// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {collection, getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhIozSX0Xit_TiRYRTrCVbkvwtEzenDRU",
  authDomain: "web-develop-efa78.firebaseapp.com",
  databaseURL: "https://web-develop-efa78-default-rtdb.firebaseio.com",
  projectId: "web-develop-efa78",
  storageBucket: "web-develop-efa78.appspot.com",
  messagingSenderId: "686570622657",
  appId: "1:686570622657:web:e0d7222df0f383586b8e40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(firebaseConfig)
// const db = getFirestore(firebaseConfig);
// db.collection('todos').getDocs()
// const todosCol = collection(db, 'todos')
// const snapshot = await getDocs(todosCol)

// auth.onAuthStateChanged(user =>{

// })

onAuthStateChanged(auth, user => {
    if (user !== null){
        console.log('logged in!')
    } else {
        console.log('No user')
    }
})