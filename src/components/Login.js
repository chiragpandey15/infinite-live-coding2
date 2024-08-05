import React from 'react';
import {  SignIn } from "@clerk/clerk-react";

import './Login.css'; 


function Login() {

  return (
    <div >
        <div className="clerkLogin">
        <div className="login-container">
            <SignIn/>
        </div>
        </div>
    </div>
  );
}

export  {Login};

