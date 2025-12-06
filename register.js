import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBk_-S1ObcmOrM7rn-tPD0rxAKckeoUuWU",
  authDomain: "signup-54596.firebaseapp.com",
  projectId: "signup-54596",
  storageBucket: "signup-54596.firebasestorage.app",
  messagingSenderId: "644684507672",
  appId: "1:644684507672:web:3a90cd6cc86c914a21b16d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('submit').addEventListener('click', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup successful!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Error: " + error.message);
      console.error(error);
    });
});
