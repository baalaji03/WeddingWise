import { Button } from "flowbite-react";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { signInFailure, signInSuccess } from "../Redux/Slice/userSlice";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { app } from "../fireBase";

const OAuth = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const res = await fetch("https://wedding-event-backend.netlify.app/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.displayName,
          email: user.email,
          profilePic: user.photoURL,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      } else {
        throw new Error(data.message || "Failed to authenticate with backend");
      }
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <Button type="button" gradientDuoTone="purpleToPink" onClick={handleSubmit}>
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue with Google
    </Button>
  );
};

export default OAuth;
