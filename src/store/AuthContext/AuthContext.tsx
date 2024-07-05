import { ReactNode, createContext, useState } from "react"

interface AuthContextType {
    authenticated: boolean;
    setAuthenticated: (value: boolean) => void;
    handleLogin: () => void;  
}

export const Context = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
  }

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const [authenticated, setAuthenticated] = useState<boolean>(false);

    const handleLogin = () => {
        setAuthenticated(true);
    }

    return (
        <Context.Provider value={{authenticated, setAuthenticated, handleLogin}}>
            <>{children}</>
        </Context.Provider>
    )
}