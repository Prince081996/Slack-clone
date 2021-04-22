import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHwfNec4BFTIn176-RC6mb69sou8fxvVk",
    authDomain: "slack-clone-2821c.firebaseapp.com",
    projectId: "slack-clone-2821c",
    storageBucket: "slack-clone-2821c.appspot.com",
    messagingSenderId: "1035806038575",
    appId: "1:1035806038575:web:b2d25f2487a3b0665604da",
    measurementId: "G-P04L647E02"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

  const db = app.firestore()

  const auth = app.auth()

  const provider = new firebase.auth.GoogleAuthProvider()

  export default db;

  export { auth, provider}