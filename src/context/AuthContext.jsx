import { createContext, useState, useContext, useEffect } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(undefined);

  // sign up function
  const signUpNewUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.err("There was a problem signing up: ", error);
      return { success: false, error };
    }
    return { success: true, data };
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  // sing in function
  const signInUser = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        console.err('Sign in error: ', error);
        return {success: false, error: error.message};
      }
      console.log('Sign in successfull: ', data);
      return {success: true, data};
    } catch (error) {
      console.error("There was an error: ", error);
    }
  };

  // sign out function
  const signOutUser = () => {
    const { error } = supabase.auth.signOut();
    if (error) {
      console.err("There was an error signing out: ", error);
    }
  };

  return (
    <AuthContext.Provider value={{ session, signUpNewUser, signInUser, signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
