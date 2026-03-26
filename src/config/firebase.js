import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Adicione as chaves do seu projeto Firebase aqui
// Vá em Configurações do Projeto no Firebase Console e copie o objeto firebaseConfig
const firebaseConfig = {
  apiKey: "[GCP_API_KEY]",
  authDomain: "app-de-notas-17113.firebaseapp.com",
  projectId: "app-de-notas-17113",
  storageBucket: "app-de-notas-17113.firebasestorage.app",
  messagingSenderId: "1054355676379",
  appId: "1:1054355676379:web:a18c88727210974f616819"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Obter as instâncias de Auth e Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
