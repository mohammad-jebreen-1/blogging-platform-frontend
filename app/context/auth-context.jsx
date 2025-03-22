"use client";

import { useRouter } from "next/navigation";
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const apiRes = await axios.get("http://localhost:3000/api/dashboard");

        if (apiRes?.data?.success) {
          setUser(apiRes.data.user);
        }
      } catch (error) {
        router.push("/login");
      }
    };

    getProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used inside Auth provider");
  }

  return context;
};
