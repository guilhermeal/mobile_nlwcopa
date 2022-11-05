import { createContext, ReactNode } from 'react';
import { SignIn } from '../screens/SignIn';

interface UserProps {
  name: string;
  avatarUrl: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {

  async function signIn() {
    console.log('## VAMOS LOGAR!!!');
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      user: {
        name: 'Guilherme ALmeida',
        avatarUrl: 'https://github.com/guilhermeal.png'
      }
    }}>
      {children}
    </AuthContext.Provider>
  );

}