import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAMWAARwWse6twMN0bpRknPQSeaDprEDb0",
  authDomain: "linkedin-36721.firebaseapp.com",
  projectId: "linkedin-36721",
  storageBucket: "linkedin-36721.appspot.com",
  messagingSenderId: "534849792040",
  appId: "1:534849792040:web:87d400c113579d9111ad1d",
  measurementId: "G-9BDGDPXTYG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); 
const auth = firebase.auth();

export {db, auth}