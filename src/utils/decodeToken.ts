import { jwtVerify } from "jose";

export const getIdByToken = async () => {
  const token = localStorage.getItem("token"); 

  if (token && typeof token === "string") {
    const secretKey = import.meta.env.VITE_JWT_KEY;
    const secretPassword = new TextEncoder().encode(secretKey);
    try {
      const { payload } = await jwtVerify(token, secretPassword);
      return payload.id;
    } catch (error) {
    }
  } else {
    console.error("Token é null, undefined ou não é uma string válida.");
  }
};
