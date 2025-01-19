import React, { useState } from "react";
import "../styles/App.css";
import Logo from "../images/logo.png";
const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true); // Toggle between Sign In and Sign Up

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic (Sign In or Sign Up based on `isSignIn`)
  };

  return (
    <div className="auth-page">
      <div className="form-container">
        <div className="form-card">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="form-logo" />

          {/* Heading */}
          <h1>{isSignIn ? "Welcome Back!" : "Create Your Account"}</h1>
          <p>
            {isSignIn
              ? "Sign in to access your learning platform."
              : "Sign up to start learning today!"}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Full Name Field (Only for Sign Up) */}
            {!isSignIn && (
              <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}

            {/* Email Field */}
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Confirm Password Field (Only for Sign Up) */}
            {!isSignIn && (
              <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}

            {/* Remember Me Checkbox and Forgot Password Link (Only for Sign In) */}
            {isSignIn && (
              <div className="options">
                <label className="checkbox">
                  <input type="checkbox" />
                  Remember Me
                </label>
                <a href="/forgot-password" className="forgot-password">
                  Forgot Password?
                </a>
              </div>
            )}

            {/* Terms and Conditions Checkbox (Only for Sign Up) */}
            {!isSignIn && (
              <div className="options">
                <label className="checkbox">
                  <input type="checkbox" required />I agree to the{" "}
                  <a href="/terms">Terms & Conditions</a> and{" "}
                  <a href="/privacy">Privacy Policy</a>.
                </label>
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className="auth-btn">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <div className="social-login">
            {/* Social Login */}
            <div className="social-login">
              <p>Or {isSignIn ? "sign in" : "sign up"} with:</p>
              <div className="social-buttons">
                {/* Google */}
                <button className="social-btn outlined google">
                  <img
                    src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
                    alt="Google"
                    className="social-logo"
                  />
                </button>

                {/* Twitter */}
                <button className="social-btn outlined twitter">
                  <img
                    src="https://ouch-cdn2.icons8.com/KO5GXNW70CGm4W3hsUirIkCdPU0UF6ZMXZz4EUGJcek/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjk1/LzQxYjNlOTJmLTk1/OGYtNGE0OC1hNDlj/LTlhNTQwNmM1ZWI4/MC5wbmc.png"
                    alt="Twitter"
                    className="social-logo"
                  />
                </button>

                {/* LinkedIn */}
                <button className="social-btn outlined linkedin">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    alt="LinkedIn"
                    className="social-logo"
                  />
                </button>
                <button className="social-btn outlined facebook">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png"
                    alt="LinkedIn"
                    className="social-logo"
                  />
                </button>

                {/* Microsoft */}
                <button className="social-btn outlined microsoft">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                    alt="Microsoft"
                    className="social-logo"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Switch Between Sign In and Sign Up */}
          <p className="switch-auth">
            {isSignIn ? "Don’t have an account?" : "Already have an account?"}{" "}
            <span onClick={toggleAuthMode} className="auth-link">
              {isSignIn ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
