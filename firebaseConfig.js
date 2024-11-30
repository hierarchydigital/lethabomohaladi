// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAk2y5uUlrA1zXzBY70Dfbl3Pd3EqGrGTE",
    authDomain: "lethabo-8f77d.firebaseapp.com",
    projectId: "lethabo-8f77d",
    storageBucket: "lethabo-8f77d.firebasestorage.app",
    messagingSenderId: "131425959274",
    appId: "1:131425959274:web:3c20af40c4d8d2d1ae3913"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Export the db and auth objects for use in other modules
export { db, auth };
