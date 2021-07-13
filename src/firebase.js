import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAMK4LGa3kZq4DKHXFTthh2DcXgBK7dudg",
    authDomain: "airbnb-12af5.firebaseapp.com",
    projectId: "airbnb-12af5",
    storageBucket: "airbnb-12af5.appspot.com",
    messagingSenderId: "501130157485",
    appId: "1:501130157485:web:148303df2637f28eea1524",
    measurementId: "G-636PETBTDY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;