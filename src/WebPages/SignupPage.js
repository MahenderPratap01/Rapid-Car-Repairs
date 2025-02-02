import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Signup.css";
import Car from "../ImagesFolder/Car-red.jpg";
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup, sendEmailVerification} from "firebase/auth";
import { app, db } from "../Firebase";
import { doc, setDoc } from "firebase/firestore";
import ReCAPTCHA from "react-google-recaptcha";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [popupInProgress, setPopupInProgress] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!name) {
      errors.name = "Name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
      errors.password =
        "Password must be at least 8 characters, alphabets and numbers, and no spaces.";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
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
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        console.log(user);
        sendEmailVerification(auth.currentUser).then(()=>{
          alert("Email verification link send!");
        })

        if(user){
          await setDoc(doc(db, "Users", user.uid ),{
            name: user.displayName,
            email: user.email, 
          });
        }
        console.log("Signup successful");
        navigate("/");
      } catch (error) {
        console.error("Signup error", error);
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
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={Car} alt="Ferrari" className="signup-image" />
      </div>
      <div className="signup-right">
        <div className="signup-form">
          <h1>SIGN UP</h1>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors({ ...errors, name: "" });
            }}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}

          <input
            type="email"
            placeholder="Email"
            value={email}
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
          />
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setErrors({ ...errors, confirmPassword: "" });
            }}
            onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
          />
          {errors.confirmPassword && (
            <span className="error-message">{errors.confirmPassword}</span>
          )}

          {errors.general && (
            <span className="error-message">{errors.general}</span>
          )}
          <ReCAPTCHA
    sitekey="6LcHuTIqAAAAALM_mxJdYJ1Fblu5gwv5rR2EF2JP"
    onChange={onChange}
  />

          <button
            className="signup-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "LOADING..." : "SIGN UP"}
          </button>

          <button
            className="google-button"
            onClick={signupWithGoogle}
            // disabled={popupInProgress} // Disable the button while popup is in progress
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Google"
            />
            SIGN UP WITH GOOGLE
          </button>

          <div className="signup-footer">
            <p>Already have an account?</p>
            <a href="/login">Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
