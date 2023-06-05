import React, { useState } from 'react'
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import amazonLogo from "./PngItem_12080.png";

function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
      e.preventDefault();
      // some fancy firebase login.

      auth
          .signInWithEmailAndPassword(email, password)
          .then(auth => {
            navigate('/');
          })
          .catch(error => alert(error.message));

    }
    const register = e => {
      e.preventDefault();
      
      auth
          .createUserWithEmailAndPassword(email, password)
          .then((auth)=>{
            //it successfully created user with pass
            
            
            if(auth){
              navigate('/');
            }
          })
          .catch(error => alert(error.message))
          //some fancy firebase register.

    }
    
  return (
    <div className='login'>
        <Link to ='/'>
            <img className='login__logo' src={amazonLogo} alt="logo" />
        </Link>
        <div className="login__container">
            <h2>Sign in to your account</h2>
            <form>
              <h5>E-mail</h5>
              <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>

              <h5>Password</h5>
              <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

              <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
            </form>
            <p>
                By signing-in you agree to Amazon Clone terms & Conditions. 
            </p>

            <button onClick={register} className='login__registerButton'>Create Your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login
