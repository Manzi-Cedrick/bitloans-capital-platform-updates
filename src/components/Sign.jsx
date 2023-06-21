// Sign.js
import React, { useState } from 'react';

export default function Sign() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleFormSwitch = (e) => {
    setIsSignUp(e.target.value === 'signup');
  };

  return (
    <div id="sign">
      <head>
        <title>Login / Sign Up Form</title>
      </head>
      <style>
        {`
        body {
            background-color: #f2f2f2;
            font-family: Garamond, serif;
        }
        
        .form-container {
            min-height: 110vh;
            max-width: 900px;
            minwidth: 100vw;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        
        h2 {
            color: #07425b;
            text-align: center;
        }
        
        label {
            display: block;
            margin-bottom: 10px;
            color: #07425b;
        }
        
        input[type="text"],
        input[type="password"],
        input[type="email"],
        select {
            width: 100%;
            padding: 8px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            font-family: Garamond, serif;
        }
        
        input[type="submit"] {
            background-color: #07425b;
            color: #ffffff;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        
        input[type="submit"]:hover {
            background-color: #032a3f;
        }
        
        .form-switch {
            text-align: center;
            margin-top: 20px;
        }
        
        .form-switch input[type="radio"] {
            display: none;
        }
        
        .form-switch label {
            display: inline-block;
            padding: 10px 20px;
            background-color: #ffffff;
            color: #07425b;
            border: 1px solid #ccc;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .form-switch label:hover {
            background-color: #f2f2f2;
        }
        
        .form-switch input[type="radio"]:checked + label {
            background-color: #07425b;
            color: #ffffff;
        }
        
        .form-switch input[type="radio"]:checked + label:hover {
            background-color: #032a3f;
        }
        
        .error-message {
            color: #ff0000;
            font-size: 14px;
            margin-top: 5px;
        }

        .choose-picture-button {
            background-color: #07425b;
            color: #ffffff;
            padding: 8px 12px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .choose-picture-button:hover {
            background-color: #032a3f;
        }
    `}
      </style>
      <div className="form-container">
        <h2>Login / Sign Up</h2>
        <form id="login-signup-form" method="post" action="#">
          <div className="form-switch">
            <input
              type="radio"
              id="login-radio"
              name="form-switch"
              value="login"
              defaultChecked={!isSignUp}
              onChange={handleFormSwitch}
            />
            <label htmlFor="login-radio">Login</label>
            <input
              type="radio"
              id="signup-radio"
              name="form-switch"
              value="signup"
              defaultChecked={isSignUp}
              onChange={handleFormSwitch}
            />
            <label htmlFor="signup-radio">Sign Up</label>
          </div>
          <div id="login-fields" style={{ display: isSignUp ? 'none' : 'block' }}>
            <label htmlFor="login-email">Email:</label>
            <input type="email" id="login-email" name="login-email" required />
            <label htmlFor="login-password">Password:</label>
            <input type="password" id="login-password" name="login-password" required />
            <input type="submit" defaultValue="Login" />
          </div>
          <div id="signup-fields" style={{ display: isSignUp ? 'block' : 'none' }}>
            <label htmlFor="signup-name">Name:</label>
            <input type="text" id="signup-name" name="signup-name" required />
            <label htmlFor="signup-username">Username:</label>
            <input type="text" id="signup-username" name="signup-username" required />
            <label htmlFor="signup-email">Email:</label>
            <input type="email" id="signup-email" name="signup-email" required />
            <label htmlFor="signup-password">Password:</label>
            <input type="password" id="signup-password" name="signup-password" required />
            <label htmlFor="signup-birthday">Birthday:</label>
            <input type="date" id="signup-birthday" name="signup-birthday" required />
            <label htmlFor="signup-profile-picture">Profile Picture:</label>
            <input
              type="file"
              id="signup-profile-picture"
              name="signup-profile-picture"
              accept="image/*"
              className="choose-picture-button"
            />
            <label htmlFor="signup-gender">Gender:</label>
            <select id="signup-gender" name="signup-gender" required>
              <option value>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <label htmlFor="signup-newsletter">Subscribe to Newsletter:</label>
            <input type="checkbox" id="signup-newsletter" name="signup-newsletter" />
            <label htmlFor="signup-terms">I agree to the terms and conditions:</label>
            <input type="checkbox" id="signup-terms" name="signup-terms" required />
            <div className="g-recaptcha" data-sitekey="6LfCi5ImAAAAALMER__5KJVXvJbY1OPTE5Gt1iUg" />
            <input type="submit" defaultValue="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
}
