import {React,useState} from 'react'
import './Signin.css'
import { useNavigate,Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
const Signin = () => {
    const navigate = useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const firebaseConfig = {
        apiKey: "AIzaSyCABJhjFc5Dow-iUDda_5imBPfvWzh23B8",
        authDomain: "firebas3-20e04.firebaseapp.com",
        databaseURL: "https://firebas3-20e04-default-rtdb.firebaseio.com",
        projectId: "firebas3-20e04",
        storageBucket: "firebas3-20e04.appspot.com",
        messagingSenderId: "713497571370",
        appId: "1:713497571370:web:8d5727ff7350d7b3ac1353"
      };
      const app = initializeApp(firebaseConfig);
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const HandleSubmit = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          alert("Signed in successfully")
          navigate('/home')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
        });
        }
        const handleAuth = () => {
        signInWithPopup(auth, provider).then((data) => {
        alert("Signed in successfully");
        navigate('/home')
        }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        });
        }
      // Initialize Firebase

    return (
    <div className="container">
    <div className="component1">
    <h1 className='heading'>Board.</h1> 
    </div>
    <div className="component2">
        <div className="Sign">
            <h1 className="header">Sign In</h1>
            <p className='sub-heading'>Sign in to your account</p>
            <div className="auth">
                <a onClick={handleAuth}><FcGoogle className='icon1'/><span>Sign in with Google</span></a>
                <a href=""><AiFillApple className='icon2'/><span>Sign in with Apple</span></a>
            </div>
            <div className="form">
                <div className="inputs">
                <label htmlFor="input1">Email address</label>
                <input type="text" name="input1"placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div className="inputs2">
                <label htmlFor="input1">Password</label>
                <input type="password" name="input1"placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                
                <a className="forgot" href=''>Forgot Password?</a>
                
                <button href="" className="button1" onClick={HandleSubmit}>Sign In</button>
                
            </div>
            <div>
                <Link to="/signup" id="footer">Don't have an account?&nbsp;<span>Register here</span></Link>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Signin