// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4hZWAmAQAKNtvpG_rPlH7m8kEebYAuII",
  authDomain: "car-manager-2e2e7.firebaseapp.com",
  projectId: "car-manager-2e2e7",
  storageBucket: "car-manager-2e2e7.appspot.com",
  messagingSenderId: "559490670182",
  appId: "1:559490670182:web:e44af42fb02c163cad17a7",
  measurementId: "G-T8LEKG2T5W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;
