import React from 'react';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {
  ReactComponent as ArrowRightIcon,
} from '../assets/svg/keyboardArrowRightIcon.svg';

import {
  ReactComponent as visibilityIcon,
} from '../assets/svg/visibilityIcon.svg';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState (false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const {name, email, password} = formData;

  const onChange = e => {
    setFormData (prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pagHeader">
            Welcome Back!
          </p>
        </header>
        <main>
          <form >
            <input
  type="text"
  className="nameInput"
  placeholder="name"
  id="name"
  value={name}
  onChange={onChange}
/>

            <input type="email" className="emailInput" placeholder="email" id="email"
              value={email} onChange={onChange}
            />
            <div className="passwordInputDiv">
              <input type={showPassword ? "text" : "password"} className="passwordInput"
                placeholder="password" id="password" value={password} onChange={onChange} />
              <img src={visibilityIcon} alt="show password" className="showPassword"
                onClick={() => {
                  setShowPassword((prevState => !prevState))
                }} />
            </div>
            <Link to="/forgot-password" className='forgotPasswordLink'> Forgot Password</Link>
            <div className="signUpBar">
              <p className="signUpText"> Sign In</p>
              <button className="signUpButton">
                <ArrowRightIcon fill="#ffffff" width='34px' height='34px' />

              </button>
            </div>
          </form>
          {/* Google OAuth*/}
          <Link to="/sign-in" className='registerLink'>
            Sign In Instead
          </Link>
        </main>
      </div>
    </>


  )
};

export default SignUp;
