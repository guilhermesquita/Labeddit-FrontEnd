import { jwtVerify } from 'jose';
import { useState } from 'react';

export const useTokenManager = () => {
    const [isTokenValid, setIsTokenValid] = useState<boolean>(false);
    const [tokenAuth, setTokenAuth] = useState('');

    const getPayload = async (token: string) => {
        const secretKey = import.meta.env.VITE_JWT_KEY;

        if (!secretKey) {
            throw new Error('VITE_JWT_KEY is not defined in environment variables');
        }

        const secretPassword = new TextEncoder().encode(secretKey);

        try {
            const { payload } = await jwtVerify(token, secretPassword);
            
            if (payload) {
                setTokenAuth(token);
                setIsTokenValid(true);
                localStorage.setItem('token', token);
            } else {
                setIsTokenValid(false);
            }

            return payload;
        } catch (error) {
            console.error('Token verification failed', error);
            setIsTokenValid(false);
            return null;
        }
    };

    return { getPayload, isTokenValid, setIsTokenValid, tokenAuth };
};
