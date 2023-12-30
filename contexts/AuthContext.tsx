import React, { createContext, useState, useContext, useEffect } from 'react';
import { Alert } from 'react-native'; // Import Alert
import { supabase } from '@services/supabase';
import { Session, AuthError, User, Subscription } from '@supabase/supabase-js';
import  { AuthContextType } from '../types/AuthContext.types';
import { useRouter } from 'expo-router';

// Provide a default value matching the shape
const defaultAuthContextValue: AuthContextType = {
    email: '',
    setEmail: () => {},
    password: '',
    setPassword: () => {},
    firstName: '',
    setFirstName: () => {},
    lastName: '',
    setLastName: () => {},
    loading: false,
    error: null,
    session: null,
    user: null,
    handleSignIn: async () => {},
    handleSignUp: async () => {},
    handleSignOut: async () => {},
  };
  

// create auth context
const AuthContext = createContext<AuthContextType>(defaultAuthContextValue);

// custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: React.ReactNode;
}

// create auth provider
export const AuthProvider = ({ children }: AuthProviderProps) => {
    // initialize expo router
    const router = useRouter();

    // set up state
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<AuthError | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [user, setUser] = useState<User | null>(null);

    // get session or refresh session from supabase + listen to auth changes (password recovery, sign out, updated user, etc.)
    useEffect(() => {
        setLoading(true)
        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false)

            if (session?.user) {
                console.log('user is signed in');
                router.push('/(main)');
            }
        });

        // clean up, clean up, everybody clean up (https://www.youtube.com/watch?v=PEMk1WWNK9E) :)
        return () => {
            authListener?.subscription.unsubscribe();
        };
    }, []);

    // sign in logic
    const handleSignIn = async () => {
        setLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            Alert.alert('Error', error.message);
            setError(error);
        }
        setSession(data?.session);
        console.log(data?.user);
        setLoading(false);
    };

    // sign up logic
    const handleSignUp = async () => {
        setLoading(true);
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) {
            Alert.alert('Error', error.message);
            setError(error);
        } else if (!data.session) {
            Alert.alert('Please check your email for the confirmation link');
        }
        setLoading(false);
    };

//    sign out logic
    const handleSignOut = async () => {
        setLoading(true);
        const { error } = await supabase.auth.signOut();
        if (error) {
            Alert.alert('Error', error.message);
            setError(error);
        }
        setLoading(false);
    };

//   values is an object that contains all the values we want to share with the rest of the app
    const values = {
        email,
        setEmail,
        password,
        setPassword,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        loading,
        error,
        session,
        user,
        handleSignIn,
        handleSignUp,
        handleSignOut,
    };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
};
