import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// same config
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

document.getElementById("login-btn").addEventListener("click", function (e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});
