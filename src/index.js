import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOPJqeYL4Z38mUuUQMz5G1C0BmmFne1oo",
  authDomain: "harmony-healthcare-c73a8.firebaseapp.com",
  projectId: "harmony-healthcare-c73a8",
  storageBucket: "harmony-healthcare-c73a8.appspot.com",
  messagingSenderId: "301832694915",
  appId: "1:301832694915:web:724723bd863b6e7d073fb6",
  measurementId: "G-C99L85YZSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);