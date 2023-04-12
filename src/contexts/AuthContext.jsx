import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { auth } from '../firebase';
import { ACTIONS, ADMINS } from '../utils/consts';

const authContext = createContext();

export function useAuthContext() {
  return useContext(authContext);
}

const initState = {
    user: null
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.user:
            return {...state, user: action.payload}
        default:
            return state;
    }
}

function AuthContext({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);

    async function register({ email, password }) {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // await updateProfile(auth.currentUser, {
            //     displayName
            // });
        } catch (error) {
            console.log(error)
        }
    }

    async function logIn({ email, password }) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error)
        }
    }

    async function logOut() {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            dispatch({
                type: ACTIONS.user,
                payload: user
            })
        })
    }, [])

    function isAdmin() {
        
        if(state.user) {
            const bool = ADMINS.includes(state.user.email);
            return bool
        }

    }

    const value = {
        user: state.user,
        register, 
        logIn,
        logOut,
        isAdmin
    };

    return <authContext.Provider value={value}>{ children }</authContext.Provider>

}

export default AuthContext