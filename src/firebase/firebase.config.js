// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDm07g0dYULxYJUjRO_qGboaovLjAW8kGg",
    authDomain: "myfin-8f29e.firebaseapp.com",
    projectId: "myfin-8f29e",
    storageBucket: "myfin-8f29e.appspot.com",
    messagingSenderId: "84730367372",
    appId: "1:84730367372:web:2cd979bf2183cc9cc55aa9"
    // apiKey: import.meta.env.VITE_apiKey,
    // authDomain: import.meta.env.VITE_authDomain,
    // projectId: import.meta.env.VITE_projectId,
    // storageBucket: import.meta.env.VITE_storageBucket,
    // messagingSenderId: import.meta.env.VITE_messagingSenderId,
    // appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// export const auth = getAuth(app);