'use client';

import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setUser({ id: decodedToken.id, email: decodedToken.email, nome: decodedToken.nome });
                setIsLoggedIn(true);
            } catch (error) {
                console.error('Token inválido:', error);
                localStorage.removeItem('token');
            }
        }
    }, []);

    const handleLogin = (userData) => {
        setUser(userData);
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('token');
    };

    return (
        <LoginContext.Provider value={{ user, isLoggedIn, handleLogin, handleLogout, setUser }}>
            {children}
        </LoginContext.Provider>
    );
};

export { LoginContext, LoginProvider };
