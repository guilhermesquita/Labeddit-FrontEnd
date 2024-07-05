import { ReactNode, createContext, useState } from "react"
import { jwtVerify } from 'jose';

interface AuthContextType {
    authenticated: boolean;
    setAuthenticated: (value: boolean) => void;
    handleLogin: () => void;
    token: string;
    setToken: (value: string) => void;
    getPayload: (token: string) => Promise<any> | null;
}

export const Context = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [token, setToken] = useState<string>('');

    const handleLogin = () => {
        setAuthenticated(true);
    }

    const getPayload = async (token: string) => {
        const secretKey = import.meta.env.VITE_JWT_KEY;

        if (!secretKey) {
            throw new Error('VITE_JWT_KEY is not defined in environment variables');
        }

        const secretPassword = new TextEncoder().encode(secretKey);

        try {
            const { payload } = await jwtVerify(token, secretPassword);
            localStorage.setItem('token', token);
            setToken(token)
            return payload;
        } catch (error) {
            setToken('')
            setAuthenticated(false);
            console.error('Token verification failed', error);
            return null;
        }
    };

    return (
        <Context.Provider value={{
            authenticated,
            setAuthenticated,
            handleLogin,
            token,
            setToken,
            getPayload
        }}>
            <>{children}</>
        </Context.Provider>
    )
}