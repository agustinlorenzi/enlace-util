// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACq0c8eHccuPPmodKEtbT3h0PDCqL20TE",
  authDomain: "enlace-util.firebaseapp.com",
  projectId: "enlace-util",
  storageBucket: "enlace-util.appspot.com",
  messagingSenderId: "72895109594",
  appId: "1:72895109594:web:d6e55cfb8e5e279c4c48e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}