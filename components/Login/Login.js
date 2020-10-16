import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import googleLogo from '../../images/logos/google.jpg'
import './Login.css'


//google log in 
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    var { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name : displayName , email}
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
           
          });
    }

        
    return (    
        
        <div className="">
            <img className="formLogo d-flex justify-content-center" src={logo} alt=""/>
            <div className = "loginFieldSize  ">
            <h5 className="d-flex justify-content-center d-flex align-items-center">Login With</h5>
            <button className="gbtn d-flex justify-content-center"  variant="outlined" size="lg" block   onClick = {handleGoogleSignIn} >
            <img src={googleLogo} className="googlebtn"  />
            Continue with Gmail
            </button>
            </div>
        </div>
        
    );
};

export default Login;