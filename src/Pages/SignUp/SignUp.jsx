import React, { useState } from 'react'
import { LockSvg, MailSvg, LineSvg, SignUpNameIconSvg, ConfirmPasswordkeySvg } from '../../assets/SVGs/Svg'
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const SignUp = () => {

  const initialValues = {
    name:'',
    email:'',
    password:''
  }

  const [confirmPassword,setconfirmPassword] = useState('')

  const [formValues,setformvalues] = useState(initialValues);//data to be used for signup////
  const [formErrors,setformErrors] = useState({});

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setformvalues({...formValues,[name]:value})
  }

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    setformErrors(validate(formValues))



    if(Object.keys(formErrors)===0){
      console.log('Name',formValues.name)
      console.log('Email',formValues.email);
      console.log('Password',formValues.password);
    }

    console.log(formErrors)
  }

  const validate = (values) =>{
    const errors = {}
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(!values.name){
      errors.name='Please Enter your Name'
    }


    if (!values.email) {
      errors.email = "Email is Required";

    }
    else if (!regex.test(values.email)) {
      errors.email = "!!Enter an Valid Email Address"
    }


    if (!values.password || !confirmPassword) {
      errors.password = "!!Please Fill both Password Fields";

    }
    else if(values.password != confirmPassword){
      errors.password = 'Both Passwords should be same'
    }
    else if (values.password.length < 4) {
      errors.password = "!!Length of Password is Too short";
    }
    else if (values.password.length > 10) {
      errors.password = "!!Length of Password is Too long";
    }

    return errors;
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
        <h1 className='font-semibold text-[60px]'>Join The <span className='text-[#ff7643]'>ContentCraft AI</span> Community</h1>
        <p className='font-semibold text-[24px]'>And <span className='text-[#ff7643]'>revolutionize</span> your content creation journey! Sign up now to explore the limitless possibilities of <span className='text-[#ff7643]'>AI-driven innovation.</span></p>

      </div>
      {/* ------------first Side-End-------------------------------------- */}

      {/* ------------------------SignIn Form---------------------------------------------------------- */}
      <div className='w-[50%] py-[2rem] px-[5rem] flex flex-col gap-[5rem]'>
        <div className='flex flex-col gap-[3rem]'>

          <h1 className='text-[20px] font-semibold'>Let's Craft Brilliance Toghether</h1>

          {/* -----------Inputs Div------------------------------- */}

          <form className='flex flex-col gap-[1rem]' onSubmit={handleSignUpSubmit}>

            {/* -----------------Name Div--------------------- */}
            <div className='w-full relative '>
              <input type="text " className=' w-full  px-[1rem] py-[.5rem] pl-[4rem] rounded-full outline-none border-[2px] border-[#ff7643] bg-transparent text-[#fff] placeholder:text-[#ff754383]' 
              placeholder='Full Name'
              name='name'
              value={formValues.name}
              onChange={handleChange}
              
              />

              <div className='w-fit absolute top-[50%] left-5 translate-y-[-50%] border-r-[1px] pr-[5px] border-[#ff7643]'>
                <SignUpNameIconSvg/>
              </div>

            </div>

            <p className="text-[#ff0000]">{formErrors.name}</p>
            {/* ----------------------Name Div End------------ */}
            {/* -----------------Email Div--------------------- */}
            <div className='w-full relative '>
              <input type="text " className=' w-full  px-[1rem] py-[.5rem] pl-[4rem] rounded-full outline-none border-[2px] border-[#ff7643] bg-transparent text-[#fff] placeholder:text-[#ff754383]' 
              placeholder='Email Address' 
              name='email'
              value={formValues.email}
              onChange={handleChange}
              />

              <div className='w-fit absolute top-[50%] left-5 translate-y-[-50%] border-r-[1px] pr-[5px] border-[#ff7643]'>
                <MailSvg />
              </div>

            </div>
            <p className="text-[#ff0000]">{formErrors.email}</p>

            {/* ----------------------Email Div End------------ */}
            {/* -----------------Password Div--------------------- */}
            <div className='w-full relative '>
              <input type="text " className=' w-full  px-[1rem] py-[.5rem] pl-[4rem] rounded-full outline-none border-[2px] border-[#ff7643] bg-transparent text-[#fff] placeholder:text-[#ff754383]' 
              placeholder='Password' 
              name='password'
              value={formValues.password}
              onChange={handleChange}
              
              
              />

              <div className='w-fit absolute top-[50%] left-5 translate-y-[-50%] border-r-[1px] pr-[5px] border-[#ff7643]'>
                <LockSvg/>
              </div>

            </div>
            {/* ----------------------Password Div End------------ */}

            {/* ---------Confirm Password And Forgot Password Div---------------------------------------------------- */}
            <div className='flex flex-col gap-[.5rem]'>
              <div className='w-full relative '>
                <input type="text " className=' w-full  px-[1rem] py-[.5rem] pl-[4rem] rounded-full outline-none border-[2px] border-[#ff7643] bg-transparent text-[#ffff] placeholder:text-[#ff754383]' placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e)=>setconfirmPassword(e.target.value)}
                
                />

                <div className='w-fit absolute top-[50%] left-5 translate-y-[-50%] border-r-[1px] pr-[5px] border-[#ff7643]'>
                  <ConfirmPasswordkeySvg/>
                </div>

              </div>
            
            {/* ---------------Remember Me div--------------------- */}
             <div className='flex items-center justify-end gap-[.5rem]'>
                <input type="checkbox" name="" id="RememberMe" />
               
                <label htmlFor="RememberMe" className='text-right text-[14px]'>Remember Me</label>
            </div>
            {/* ---------------Remember Me div End----------------- */}



            </div>
            <p className="text-[#ff0000]">{formErrors.password}</p>

            {/* ---------Password And Forgot Password Div----End--------------------------------------------- */}


            {/* -----------Inputs Div End--------------------------- */}

          <button className='flex items-center justify-center bg-[#ff7643] p-[.5rem] rounded-full font-semibold text-[18px]' type='submit'>Sign Up</button>
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

        <p className='text-center'>Already Have An Account ?<Link to='/SignIn' className='text-[#ff7643] hover:underline'>LogIn</Link></p>
      </div>
      {/* ------------------------SignIn Form-End------------------------------------------------------ */}

    </div>
  </div>
  )
}

export default SignUp
