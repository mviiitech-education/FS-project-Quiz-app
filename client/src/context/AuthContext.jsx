import React, { createContext, useState } from 'react';
import Login from '../components/Login';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    function handleLogin(data) {
        setIsAuthenticated(true);
        setUser(data);
    }

    function handleLogout() {
        setIsAuthenticated(false);
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                handleLogin,
                handleLogout
            }}
        >
            {isAuthenticated ? children : <Login handleLogin={handleLogin} />}
        </AuthContext.Provider>
    );
};

export { AuthContext };