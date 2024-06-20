import React, { useState } from 'react'
import { LockSvg, MailSvg, LineSvg } from '../../assets/SVGs/Svg'
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const SignIn = () => {

  const initialValues ={
    email:"",
    password:""
  };

  const [formValues,setformvalues] = useState(initialValues) // actual data to be used for sign in//////////
  const [formErrors,setformErrors] = useState({});

 const handleChange = (e) => {
  const {name,value} = e.target;
  setformvalues({...formValues,[name]:value})
 }

 const handleLoginSubmit = (e) => {
  e.preventDefault();

  setformErrors(validate(formValues));

  if(Object.keys(formErrors).length===0){
    console.log('Email',formValues.email);
    console.log('Password',formValues.password);
  }

 }

 const validate = (values) => {
  const errors = {};
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if(!values.email){
    errors.email = 'Please Enter Your Email'
  }
  else if(!regex.test(values.email)){
    errors.email = 'Please Enter a Valid Email Address'
  }

  if(!values.password){
    errors.password = 'Please Enter Your Password'
  }
  else if(values.password.length < 4){
    errors.password = 'Your Password is too short'
  }
  else if(values.password.length > 10){
    errors.password = 'Your password is too long'
  }

  return errors

 }

  
 

  return (
    <div className='bg-[#06142e] min-h-[100vh] px-[2rem] py-[.5rem] font-Inter text-[#ffffff]' >
      {/* -----------------------------Header Div-------------------------------------------------- */}
      <header className='flex items-center gap-[1rem]'>
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="5" y1="20.5" x2="34" y2="20.5" stroke="#FF7643" />
          <path d="M26 32.5H39L50 40H75" stroke="#FF7643" />
          <path d="M26 58.5H38.5L49.5 51L74.5 51" stroke="#FF7643" />
          <line x1="5" y1="45.5" x2="30" y2="45.5" stroke="#FF7643" />
          <line x1="58" y1="29.5" x2="75" y2="29.5" stroke="#FF7643" />
          <rect x="34.5" y="16.5" width="8" height="8" rx="4" stroke="#FF7643" />
          <rect x="49.5" y="25.5" width="8" height="8" rx="4" stroke="#FF7643" />
          <rect x="17.5" y="28.5" width="8" height="8" rx="4" stroke="#FF7643" />
          <rect x="30.5" y="41.5" width="8" height="8" rx="4" stroke="#FF7643" />
          <rect x="17.5" y="54.5" width="8" height="8" rx="4" stroke="#FF7643" />
        </svg>

        <h1 className='font-normal  leading-[43.67px] text-[24px] text-[#FFFFFF]'>ContentCraft AI</h1>
      </header>
      {/* -----------------------------Header Div-End---------------------------------------------- */}

      {/* -----------------------Form div--------------------------------------------------- */}
      <div className='flex gap-[2rem] items-center justify-center  h-[90vh]'>
        {/* ------------first Side------------------------------------------ */}
        <div className='w-[50%] h-full flex flex-col items-center justify-center'>
          <h1 className='font-semibold text-[60px]'>Welcome back! 🚀</h1>
          <p className='font-semibold text-[24px]'>Log in to unleash the power of
            <span className='text-[#ff7643]'>AI-driven content creation</span> and <span className='text-[#ff7643]'>collaboration.</span></p>

        </div>
        {/* ------------first Side-End-------------------------------------- */}

        {/* ------------------------SignIn Form---------------------------------------------------------- */}
        <div className='w-[50%] py-[2rem] px-[5rem] flex flex-col gap-[5rem]'>
          <div className='flex flex-col gap-[3rem]'>

            <h1 className='text-[20px] font-semibold'>Let's Craft Brilliance Toghether</h1>

            {/* -----------Inputs Div------------------------------- */}
           
            <form className='flex flex-col gap-[1rem]' onSubmit={handleLoginSubmit}>

              {/* -----------------Email Div--------------------- */}
              <div className='w-full relative '>
                <input type="text " className=' w-full  px-[1rem] py-[.5rem] pl-[4rem] rounded-full outline-none border-[2px] border-[#ff7643] bg-transparent text-[#fff] placeholder:text-[#ff754383]'
                 placeholder='Email Address'
                 name='email'
                 onChange={handleChange}
                 value={formValues.email}
                 />

                <div className='w-fit absolute top-[50%] left-5 translate-y-[-50%] border-r-[1px] pr-[5px] border-[#ff7643]'>
                  <MailSvg />
                </div>

              </div>

              <p className='text-[#ff0000]'>{formErrors.email}</p>

              {/* ----------------------Email Div End------------ */}

              {/* ---------Password And Forgot Password Div---------------------------------------------------- */}
              <div className='flex flex-col gap-[.5rem]'>
                <div className='w-full relative '>
                  <input type="text " className=' w-full  px-[1rem] py-[.5rem] pl-[4rem] rounded-full outline-none border-[2px] border-[#ff7643] bg-transparent text-[#ffff] placeholder:text-[#ff754383]' 
                  placeholder='Password'
                  name='password'
                  value={formValues.password}
                  onChange={handleChange}
                  
                  />

                  <div className='w-fit absolute top-[50%] left-5 translate-y-[-50%] border-r-[1px] pr-[5px] border-[#ff7643]'>
                    <LockSvg />
                  </div>

                </div>
                <p className='text-[#ff0000]'>{formErrors.password}</p>


                <a href="" className='text-right text-[14px] font-extralight'>Forgot Password</a>
              </div>
              {/* ---------Password And Forgot Password Div----End--------------------------------------------- */}


              {/* -----------Inputs Div End--------------------------- */}

            <button className=' w-full flex items-center justify-center bg-[#ff7643] p-[.5rem] rounded-full font-semibold text-[18px]' type='submit'>Login</button>
            </form>



            

            {/* ----------------------Other SignIn Methods div---------------------------- */}
            <div className='flex flex-col gap-[1rem]'>
              <div className='flex items-center gap-[1rem]'>

                <LineSvg />
                <p className='whitespace-nowrap'> Or Continue With</p>
                <LineSvg />


              </div>
              {/* ----------Icon Logos---------------------------------- */}
              <div className='flex gap-[2rem] items-center justify-center text-[24px]'>
                <FaGoogle />
                <FaApple />
                <FaFacebook />

              </div>
              {/* ----------Icon Logos-end------------------------------ */}
            </div>
            {/* ----------------------Other SignIn Methods div-End------------------------ */}


          </div>

          <p className='text-center'>Don't Have An Account ? <Link to='/SignUp' className='text-[#ff7643] hover:underline'>SignUp</Link></p>
        </div>
        {/* ------------------------SignIn Form-End------------------------------------------------------ */}

      </div>
    </div>
  )
}

export default SignIn
