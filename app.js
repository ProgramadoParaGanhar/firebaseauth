import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js'
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDEP96PM9RePqd7ZMA4-b9bb1900ZF_WiA",
    authDomain: "fir-rpg-75481.firebaseapp.com",
    projectId: "fir-rpg-75481",
    storageBucket: "fir-rpg-75481.appspot.com",
    messagingSenderId: "184263714712",
    appId: "1:184263714712:web:f03bd8941429bff8deaded",
    measurementId: "G-WJJPNBVR6M"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);


console.log(app);
