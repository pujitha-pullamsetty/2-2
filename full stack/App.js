import React from 'react';
import './App.css';
import {useState} from'react';
import axios from 'axios';
import fontawesome from 'https://kit.fontawesome.com/1df6f07d06.js'

const App = () => {
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const submitForm = async()=>{
  const body = {email, password}
  await axios
  .get('http://localhost:3300/login',body)
  .then((response)=>{
    console.log('response',response)
  })
  .catch((error)=>{
    console.log(error);
  });
};

return(
  <> 
  <div className='main-box'>
    <div className='box1'>
      <div className='b1'>1</div>
      <div className='b2'>USER LOGIN</div>
      <div className='b3'> <br></br><i class="fa-solid fa-user"></i>
        <input type='email' placeholder='email'></input></div>
      <div className='b4'><br></br><i class="fa-solid fa-lock"></i>
      <input type='password' placeholder='password'></input></div>
      <div className='b5'>
        <div className='b51'><i class="fa-solid fa-circle-check"></i>remember me

        </div>
        <div className='b52'>?forgot password</div>
      </div>
      <div className='b6'>
        <button> onclick</button>
      </div>
      </div>
  </div>  
  </>
)
}
 export  default App