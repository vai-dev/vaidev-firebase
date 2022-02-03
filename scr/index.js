
import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCKAQeGWoPCepFxOXVYpvo23WUHf8Ci_iA",
    authDomain: "first-6109e.firebaseapp.com",
    projectId: "first-6109e",
    storageBucket: "first-6109e.appspot.com",
    messagingSenderId: "176740470648",
    appId: "1:176740470648:web:4643fc91a5f793cac8c28d",
    measurementId: "G-SBYVNWY7KS"
  };
// init firebase app
initializeApp(firebaseConfig)
// init service
const db = getFirestore()
// collection ref
const colRef = collection(db, 'books')
// get coll data
getDocs(colRef)
    .then((snapshot) => {
        let books = []
        snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id: doc.id})
        })
        
    })

