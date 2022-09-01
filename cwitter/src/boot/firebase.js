import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCUFbGAIx6p1fCFTeKMYxVoIKya917H3cM",
  authDomain: "cwitter-32b42.firebaseapp.com",
  projectId: "cwitter-32b42",
  storageBucket: "cwitter-32b42.appspot.com",
  messagingSenderId: "62035770021",
  appId: "1:62035770021:web:a573e316fb3019c3eeab4c"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db