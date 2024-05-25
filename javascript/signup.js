

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const fullname = document.getElementById('fullname').value;
    const phonenum = document.getElementById('phonenum').value;
    const  place = document.getElementById('place').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            set(ref(database, 'user/' + user.uid), {
              fullname: fullname,
              phonenum: phonenum,
              place: place,
              email: email
            }

            )
            alert('created account');
            window.location.href = "login.html";
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage)
        });
}) 



