import React, { useState } from "react";
import "./Modal.css";
import PasswordStrengthBar from "react-password-strength-bar";

function Modal({ isModalOpen, toggleModal }) {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [password, setPassword] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={`modal-container ${isModalOpen ? "show" : ""}`}>
      <div className="modal-content">
        <button className="close-btn" onClick={toggleModal}>×</button>
        <h2>{isLogin ? "Welcome back" : "Create an account"}</h2>
        <p>{isLogin ? "Please login to continue" : "Sign up to get started"}</p>
        
        <div className="inputBox">
          <input type="email" placeholder="E-mail" required />
        </div>

        <div className="inputBox password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={handlePasswordChange}
            required
          />
          <button
            type="button"
            className="eye-button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>
        
        {!isLogin && (
          <>
            <PasswordStrengthBar password={password} />
            <div className="inputBox password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                required
              />
              <button
                type="button"
                className="eye-button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </>
        )}

        <button className="primary-btn">{isLogin ? "Login" : "Sign Up"}</button>

        <div className="divider">
          <span>or</span>
        </div>

        <div className="social-login">
          <button className="google-btn">
            <img
              src="data:image/png;base64,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"
              alt="Google"
            />
            Continue with Google
          </button>
          <button className="facebook-btn">
            <img
              src="data:image/png;base64,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"
              alt="Facebook"
            />
            Continue with Facebook
          </button>
          <button className="x-btn">
            <img
              src="data:image/png;base64,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"
              alt="X"
            />
            Continue with X
          </button>
        </div>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={toggleForm}>{isLogin ? " Sign Up" : " Login"}</span>
        </p>
      </div>
    </div>
  );
}

export default Modal;
