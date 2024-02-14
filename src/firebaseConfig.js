import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
    getStorage,
    getDownloadURL,
    uploadBytesResumable,
    ref,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCaJD38TweR5hBl2ugOIs5vOmMlU8jNd5c",
    authDomain: "social-media-app-6e50f.firebaseapp.com",
    projectId: "social-media-app-6e50f",
    storageBucket: "social-media-app-6e50f.appspot.com",
    messagingSenderId: "192035947918",
    appId: "1:192035947918:web:b0a9132f5e80f87f9f90df",
    measurementId: "G-63713W5XW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


export {
    app,
    storage,
    getDownloadURL,
    ref,
    uploadBytesResumable
}