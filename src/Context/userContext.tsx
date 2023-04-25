import React, { createContext, FC, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { app } from '../../firebase/firebase.init.config';
// import app from '../Firebase/firebase.init.config';

interface UserContextProps {
    children: React.ReactNode;
}

interface AuthInfo {
    user?: any;
    signUp?: (email: string, password: string) => Promise<any>;
    isLoading?: boolean;
    loading?: boolean;
    githubSingIn?: () => Promise<any>;
    auth: any;
    setuserProfile?: (profile: any) => Promise<any>;
    logOut?: () => Promise<any>;
    googleSginIn?: () => Promise<any>;
    signIn?: (email: string, password: string) => Promise<any>;
 
    setRoomDetails?: (details: string) => void;
    roomDetails?: string;
}

export const AuthContext = createContext<AuthInfo>({
    user: null,
    signUp: () => Promise.resolve(null),
    isLoading: true,
    auth: null,

    githubSingIn: () => Promise.resolve(null),
    setuserProfile: () => Promise.resolve(null),
    logOut: () => Promise.resolve(null),
    googleSginIn: () => Promise.resolve(null),
    signIn: () => Promise.resolve(null),
 
    setRoomDetails: () => {},
    roomDetails: '',
});

const UserContext: FC<UserContextProps> = ({ children }) => {
    const [user, setuser] = useState<any>(null);
    const auth = getAuth(app);
    const [roomDetails, setRoomDetails] = useState('');
    const [loading, setLoading] = useState<boolean>(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signUp = (email: string, password: string) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const googleSginIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const signIn = (email: string, password: string) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const githubSingIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    const setuserProfile = async (profile: { displayName?: string | null; photoURL?: string | null; }) => {
        setLoading(true);
        return updateProfile(auth.currentUser!, profile);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setuser(currentUser);
        });

        return () => unsubscribe();
    }, [auth]);

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    const authInfo: AuthInfo = {
        user,
        signUp,
        setuserProfile,
        loading,
        githubSingIn,
        logOut,
        googleSginIn,
        signIn,
        auth,
        setRoomDetails,
        roomDetails,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>


    );
};

export default UserContext;