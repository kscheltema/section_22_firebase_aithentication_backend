import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

const submitHandler = (event) => {
event.preventDefault(); //automatic request prevented

const enteredEmail = emailInputRef.current.value;
const enteredPassword = passwordInputRef.current.value;

//good space to link password & email validation

if (isLogin) {
} else {
fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxlAgL_5YyVVj0baqO9O9t2Dz4D-norpM', {
  method: 'POST',
  body: JSON.stringify({
    email:enteredEmail,
    password: enteredPassword, 
    returnSecureToken: true
  }),
  headers: {
    'Content-Type': 'application/json'
  }
}).then(res => {
  if(res.ok) {
    //..success response
  } else {
    //...if it fails
    return res.json().then(data => {
      //show an error modal 6 min password length for firebase
    });
  } 
});
}
};

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
