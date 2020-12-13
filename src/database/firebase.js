import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCWWOb6LBnkqDNbGlWpVFHJN0gaYqON9ro",
    authDomain: "robinhood-447f0.firebaseapp.com",
    projectId: "robinhood-447f0",
    storageBucket: "robinhood-447f0.appspot.com",
    messagingSenderId: "325004394934",
    appId: "1:325004394934:web:287dbdd69102fab1fdc117",
    measurementId: "G-FBDDLPPSYF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();

  export { db };