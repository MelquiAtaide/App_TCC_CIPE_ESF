import React, { createContext, useContext, ReactNode, useState } from 'react';

interface AuthContextData {
  userData: UserData | null;
  setUserData: (data: UserData | null) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface UserData {
  // Defina a estrutura dos dados do usuário conforme retornados pela API
  id: number;
  nome: string;
  email: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [userData, setUserData] = useState<UserData | null>(null);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
