import { jwtVerify } from 'jose';

export const useTokenManager = () => {

    const getPayload = async (token: string) => {
        const secretKey = import.meta.env.VITE_JWT_KEY;

        if (!secretKey) {
            throw new Error('VITE_JWT_KEY is not defined in environment variables');
        }

        const secretPassword = new TextEncoder().encode(secretKey);

        try {
            const { payload } = await jwtVerify(token, secretPassword);
            return payload;
        } catch (error) {
            console.error('Token verification failed', error);
            return null;
        }
    };

    return { getPayload };
};
