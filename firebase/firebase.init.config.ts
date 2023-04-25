// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeMsmVx24VXD5HHtMy4LXVqnTnfXDooDI",
  authDomain: "ultra-news-fde4b.firebaseapp.com",
  projectId: "ultra-news-fde4b",
  storageBucket: "ultra-news-fde4b.appspot.com",
  messagingSenderId: "947234026100",
  appId: "1:947234026100:web:791c69e1f55bc679865721",
  measurementId: "G-7G859WZHMP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
}