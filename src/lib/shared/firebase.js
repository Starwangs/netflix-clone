import firebase from '@firebase/app'
import '@firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDEJ2sV7gvDYy378RXb9fuxtipGm_8KDOI",
    authDomain: "svelte-web-app.firebaseapp.com",
    projectId: "svelte-web-app",
    storageBucket: "svelte-web-app.appspot.com",
    messagingSenderId: "939457132538",
    appId: "1:939457132538:web:c2ba85fdaae24bb03b5643",
    measurementId: "G-NQGJPF6CWR"
}

firebase.default.initializeApp(firebaseConfig)

export const auth = firebase.default.auth()
export const provider = new firebase.default.auth.GoogleAuthProvider()