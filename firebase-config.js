// CONFIGURAÇÃO DO FIREBASE
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmEQl0LAcrZ0uio-DYYknD-NrrvFN1RjI",
  authDomain: "fila-online-7b900.firebaseapp.com",
  projectId: "fila-online-7b900",
  storageBucket: "fila-online-7b900.firebasestorage.app",
  messagingSenderId: "797876819240",
  appId: "1:797876819240:web:034a70c5e804ab0440ac1d"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

