/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';

interface AuthState {
  token: string;
  user: any;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: string;
  singIn(credentials: SignInCredentials): void;
  singOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Taki:token');
    const user = localStorage.getItem('@Taki:user');

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const singIn = useCallback(async ({ email, password }) => {
    const response = await api.post(`/auth/login`, { email, password });

    const { token, user } = response.data;

    localStorage.setItem('@Taki:token', token);
    localStorage.setItem('@Taki:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const singOut = useCallback(() => {
    localStorage.removeItem('@Taki:token');
    localStorage.removeItem('@Taki:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, singIn, singOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Auth context is not available');
  }

  return context;
}

export { AuthProvider, useAuth };
