'use client'
import { createContext, useContext, useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { auth } from '@/app/lib/firebase';
import { IUser } from '@/server/model/users.model';

interface AuthContextType {
  user: User | null;
  mongoUser: IUser | null;
  loading: boolean;
  setUser: (user: IUser | null) => void;  // Added to update user data
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  mongoUser: null,
  loading: true,
  setUser: () => {}, // Default function to be updated in AuthProvider
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUserState] = useState<User | null>(null);
  const [mongoUser, setMongoUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Set user function to update the state
  const setUser = (user: IUser | null) => {
    setMongoUser(user);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      setUserState(firebaseUser);
      
      if (firebaseUser) {
        try {
          const response = await fetch('/api/auth/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: firebaseUser.email,
              name: firebaseUser.displayName,
              userUid: firebaseUser.uid,
            }),
          });

          if (response.ok) {
            const data = await response.json();
            setMongoUser(data.user);
          }
        } catch (error) {
          console.error('Error fetching MongoDB user:', error);
        }
      } else {
        setMongoUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, mongoUser, loading, setUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
