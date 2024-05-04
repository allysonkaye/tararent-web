//LOGINNNN
 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
 import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
 import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
   const firebaseConfig = {
     apiKey: "AIzaSyBAntVFheC4AyJ5n6BGMvZzbfJtisDGafw",
     authDomain: "admintararent.firebaseapp.com",
     databaseURL: "https://admintararent-default-rtdb.asia-southeast1.firebasedatabase.app",
     projectId: "admintararent",
     storageBucket: "admintararent.appspot.com",
     messagingSenderId: "419063988334",
     appId: "1:419063988334:web:c2e91de332e34e53c6267f",
     measurementId: "G-619H3PF5LZ"
   };
 
 
   const app = initializeApp(firebaseConfig);
   const database = getDatabase(app);
   const auth = getAuth(app);
   const dbref = ref(database);
 
   const submit = document.getElementById("submit");
   submit.addEventListener("click", function (event) {
     event.preventDefault();
 
       const email = document.getElementById("email").value;
       const password = document.getElementById("password").value;
 
    signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed up 
       const user = userCredential.user;
      
      //  window.location.href = "index.html";
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       // ..
       alert(errorMessage)
     });
   });