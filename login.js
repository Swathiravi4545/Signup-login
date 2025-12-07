import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

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

   
    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email format.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }
    

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            let msg = error.code;

            if (msg === "auth/invalid-credential") {
                alert("Incorrect email or password.");
            } else if (msg === "auth/user-not-found") {
                alert("No account exists with this email.");
            } else if (msg === "auth/wrong-password") {
                alert("Incorrect password.");
            } else {
                alert("Login failed: " + error.message);
            }
        });
});
