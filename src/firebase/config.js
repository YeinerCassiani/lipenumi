import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Reemplaza con tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA-kcf4kwgxToV3U4LzqcuraUoQzBups_k",
    authDomain: "lipenumi-cuadro-honor.firebaseapp.com",
    projectId: "lipenumi-cuadro-honor",
    storageBucket: "lipenumi-cuadro-honor.firebasestorage.app",
    messagingSenderId: "899516564245",
    appId: "1:899516564245:web:bfa8b38d38ff2e928edf1c"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
