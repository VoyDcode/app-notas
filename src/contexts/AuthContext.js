import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../config/firebase';
import { 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut 
} from 'firebase/auth';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Observer para verificar o estado da autenticação do usuário
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        // Limpa o observer quando o componente desmonta
        return unsubscribe;
    }, []);

    // Função de login
    const login = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    };

    // Função de registro
    const register = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    };

    // Função de logout
    const logout = async () => {
        return await signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
