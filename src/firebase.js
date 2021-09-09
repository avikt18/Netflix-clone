import firebase from "firebase";

const firebaseConfig = {
   //firebase key
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export { auth };
export default db;