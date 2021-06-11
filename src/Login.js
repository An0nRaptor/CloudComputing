import React, { useState } from "react";
import "./Login.css";
import loginicon from "./Icons/linkedin.svg";
import { auth } from "./Firebase";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";
function Login() {
  const [name, setName] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please enter the Full Name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoUrl: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img src={loginicon} alt="Licon" />

      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name required (if registering)"
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setprofilePic(e.target.value)}
          placeholder="Profile Pic Url (Optional)"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>Not Registered?</p>
      <span className="login__register" onClick={register}>
        Register Now
      </span>
    </div>
  );
}

export default Login;
