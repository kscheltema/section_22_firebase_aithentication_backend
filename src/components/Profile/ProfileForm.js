import { useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
const authCTX = useContext(AuthContext);

  const submitHandler = event => {
    event.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;
  //good place to add validation
  fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDxlAgL_5YyVVj0baqO9O9t2Dz4D-norpM', {
    method: 'POST',
    body:JSON.stringify({
      idToken: authCTX.token,
      password: enteredNewPassword,
      returnSecureToken: false,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {

  });
  //need error handling here for firebase side validation (min length)
  //swatcha is assuming no error handling needed and succeeds for time
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
