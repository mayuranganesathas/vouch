import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import {
  GoogleAuthProvider,
  OAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { useRouter } from "next/router";

export const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const microsoftProvider = new OAuthProvider("microsoft.com");
  const router = useRouter();

  const signInGoogle = async () => {
    setLoading(true);
    await signInWithRedirect(auth, provider);
    setLoading(false);
  };

  const signInMicrosoft = async () => {
    setLoading(true);
    await signInWithRedirect(auth, microsoftProvider);
    setLoading(false);
  };

  const signOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    user,
    loading,
    signInGoogle,
    signInMicrosoft,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
