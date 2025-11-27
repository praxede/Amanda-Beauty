// CONFIGURAÇÃO DO FIREBASE - AMANDA BEAUTY
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDgmpOSFwPiOXIPV_B0EszZxe0sH7hy3Ng",
  authDomain: "amanda-beauty.firebaseapp.com",
  projectId: "amanda-beauty",
  storageBucket: "amanda-beauty.firebasestorage.app",
  messagingSenderId: "262393343130",
  appId: "1:262393343130:web:969c80f28f32eb025a0323"
};

// Inicialização
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
