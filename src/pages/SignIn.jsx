import React from 'react';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {
  ReactComponent as ArrowRightIcon,
} from '../assets/svg/keyboardArrowRightIcon.svg';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {
  ReactComponent as visibilityIcon,
} from '../assets/svg/visibilityIcon.svg';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState (false);

  const [formData, setFormData] = useState ({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
}))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
       const auth = getAuth()

    const userCredntial = await signInWithEmailAndPassword(auth, email, password)

    if (userCredntial.user) {
      nagivate('/')
    }
    } catch (error) {
      console.log(object)
    }

   
  }

  const navigate = useNavigate ();

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">
            Welcome Back!
          </p>
        </header>
        <main>
          <form onSubmit={onSubmit}>
            <input type="text" className='emailInput' placeholder='email' id='email' value={email} onChange={onChange} />
            <div className="passwordInputDiv">
              <input type={showPassword ? "text" : 'password'}
                className="passwordInput" placeholder="Password" id="password" value={password} onChange={onChange} 

              />
              <img src={visibilityIcon} alt="show password" className="showPassword"
                onClick={() => {
                setShowPassword((prevState) => !prevState)
              }}/>
            </div>
            <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password</Link>
            <div className="signInBar">
              <p className="signInText">Sign In</p>
              <button className="signInButton">
                <ArrowRightIcon fill = '#ffffff' width='34px' height='34px' />
              </button>
            </div>
          </form>
          {/*Google OAuth */}
          <Link to='/sign-up' className='registerLink'>
            Sign Up Instead
          </Link>
        </main>
      </div>
    </>
  );
};

export default SignIn;
