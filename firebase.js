import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9ExX6u-_UlBameGlYbOtVqdJEY_M5tAM",
  authDomain: "night-spirits-d49da.firebaseapp.com",
  projectId: "night-spirits-d49da",
  storageBucket: "night-spirits-d49da.firebasestorage.app",
  messagingSenderId: "922943232394",
  appId: "1:922943232394:web:a2080ea54593efa8631073",
  measurementId: "G-PYJXQSRF9L"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
