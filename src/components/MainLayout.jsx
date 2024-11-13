import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
export const authContext = createContext();
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
const MainLayout = () => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const handleGoogleLogIn = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result);
    });
  };
  const handleGithubLogIn = () => {
    signInWithPopup(auth, githubProvider).then((result) => {
      setUser(result);
    });
  };
  const handleTwitterLogIn = () => {
    signInWithPopup(auth, twitterProvider).then((result) => {
      setUser(result);
    });
  };

  useEffect(() => {
    console.log("User state", user);
  }, [user]);

  const authData = {
    handleGoogleLogIn,
    handleGithubLogIn,
    handleTwitterLogIn,
  };
  return (
    <div>
      <authContext.Provider value={authData}>
        <Outlet />
      </authContext.Provider>
    </div>
  );
};

export default MainLayout;
