import React from 'react';
import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { db } from '../firebase.config';
 import {ReactComponent as ArrowRightIcon,
} from '../assets/svg/keyboardArrowRightIcon.svg';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';

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
  

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth();
     
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: name
      })

      const formDataCopy = { ...formData }
      console.log(formDataCopy)
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp();
      await setDoc(doc(db, 'users', user.uid), formDataCopy)
      
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

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
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="nameInput"
              placeholder="name"
              id="name"
              value={name}
              onChange={onChange}/>

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
              <p className="signUpText"> Sign Up</p>
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
