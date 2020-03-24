import* as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBcvsNDLD7hJqwFKAjGCxPg1_Th11FDY9E",
    authDomain: "fir-project-1eecd.firebaseapp.com",
    databaseURL: "https://fir-project-1eecd.firebaseio.com",
    projectId: "fir-project-1eecd",
    storageBucket: "fir-project-1eecd.appspot.com",
    messagingSenderId: "767515848757",
    appId: "1:767515848757:web:11b96bfaf6bd1d1923c17c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export {database};
