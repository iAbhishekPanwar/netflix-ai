import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        const { uid, email, displayName, photoURL } = userAuth;
        console.log(userAuth);
        dispatch(addUser({ uid, email, displayName, photoURL })); // Dispatch user data to Redux store
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe from the onAuthStateChanged listener when component unmounts
    };
  }, [dispatch, navigate]);

  return (
    <div className="flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-48" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center">
          {user.photoURL && (
            <img
              className="w-12 h-12 rounded-full"
              src={user.photoURL}
              alt="userIcon"
            />
          )}
          <button onClick={handleSignOut} className="text-white py-4 ml-4">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
