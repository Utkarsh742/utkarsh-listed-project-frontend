import {React,useState} from 'react'
import '../Signin/Signin.css'
import { FcGoogle } from "react-icons/fc";
import { Link,useNavigate } from 'react-router-dom';
import { AiFillApple } from "react-icons/ai";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
const Signup = () => {
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
      const HandleSubmit = () => {
        createUserWithEmailAndPassword(auth, email, password)
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
      // Initialize Firebase

    return (
    <div className="container">
    <div className="component1">
    <h1 className='heading'>Board.</h1> 
    </div>
    <div className="component2">
        <div className="Sign">
            <h1 className="header">Sign Up</h1>
            <p className='sub-heading'>Sign up to create an account</p>
            <div className="auth">
                <a onClick={handleAuth}><FcGoogle className='icon1'/><span>Sign up with Google</span></a>
                <a><AiFillApple className='icon2'/><span>Sign up with Apple</span></a>
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
                
                <button href="" className="button1" onClick={HandleSubmit}>Sign Up</button>
                
            </div>
            <div>
                <Link id="footer" to="/">Don't have an account?&nbsp;<span>Login here</span></Link>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Signup