import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut }
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

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
    if (!user) {
        // If no user, redirect to login
        window.location.href = "index.html";
    } else {
        // Show user email
        document.getElementById("welcome").textContent =
            "Welcome, " + user.email;
    }
});

// Logout
document.getElementById("logout").addEventListener("click", () => {
    signOut(auth).then(() => {
        window.location.href = "index.html";
    });
});
