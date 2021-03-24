import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyBjtkX19Vrde1EulUC7SdRwI1At2vOdAKQ",
    authDomain: "react-exam-f5612.firebaseapp.com",
    projectId: "react-exam-f5612",
    storageBucket: "react-exam-f5612.appspot.com",
    messagingSenderId: "780169857708",
    appId: "1:780169857708:web:201b73a5a21eb0e3d66d09"
  };
 
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;