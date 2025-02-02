import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import Car from "../ImagesFolder/Car-red.jpg";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../Firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [popupInProgress, setPopupInProgress] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!email) {
      errors.email = "Email is required";
    } else if (!regex.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
      errors.password =
        "Password must be at least 8 characters, alphabets and numbers, and no spaces.";
    }
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setLoading(true);
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Login successful");
        navigate("/");
      } catch (error) {
        console.error("Authentication error", error);
        setErrors({ general: error.message });
      } finally {
        setLoading(false);
      }
    }
  };

  const signupWithGoogle = async () => {
    if (popupInProgress) return;

    setPopupInProgress(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google Sign-In Success:", result.user);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        console.log("User closed the popup without completing the sign-in.");
      } else if (error.code !== "auth/cancelled-popup-request") {
        console.error("Google Sign-In Error", error);
        setErrors({ general: error.message });
      }
    } finally {
      setPopupInProgress(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={Car} alt="Ferrari" className="login-image" />
      </div>
      <div className="login-right">
        <div className="login-form">
          <h1>PLEASE LOG IN</h1>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({ ...errors, email: "" });
            }}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors({ ...errors, password: "" });
            }}
            onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
          />
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
          {errors.general && (
            <span className="error-message">{errors.general}</span>
          )}
          <button
            className="login-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "LOADING..." : "LOG IN"}
          </button>
          <button className="google-button" onClick={signupWithGoogle}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Google"
            />
            CONTINUE WITH GOOGLE
          </button>
          <div className="login-footer">
            <p>Don't have a Account? </p>
            <a href="/signup">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
