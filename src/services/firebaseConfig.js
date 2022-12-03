// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyC2sRjxJuCiU8qDEFrfpK36mzjQFFtKIzM',
    authDomain: 'yabao-5edb7.firebaseapp.com',
    projectId: 'yabao-5edb7',
    storageBucket: 'yabao-5edb7.appspot.com',
    messagingSenderId: '600816184965',
    appId: '1:600816184965:web:98a35642253c676a48c3ec',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)

// export default db
