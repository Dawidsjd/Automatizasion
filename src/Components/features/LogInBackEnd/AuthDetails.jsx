import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log(`sign out successful`);
      })
      .catch((error) => console.log(error));
  };

  const handleLogin = () => {
    navigate("/logIn");
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.displayName}`}</p>
          <img src={authUser.photoURL} alt={authUser.displayName} />
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <>
          <p>Anonymus</p>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default AuthDetails;
