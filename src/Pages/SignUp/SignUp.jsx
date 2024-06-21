import React, { useState,useEffect } from 'react'
import { LockSvg, MailSvg, LineSvg, SignUpNameIconSvg, ConfirmPasswordkeySvg } from '../../assets/SVGs/Svg'
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import { setUserData } from '../../Store/Slices/UserDataSlice';
import { useDispatch } from 'react-redux';

const SignUp = () => {

  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: ''
  }

  const [confirmPassword, setconfirmPassword] = useState('')

  const [formValues, setformvalues] = useState(initialValues);//data to be used for signup////
  const [formErrors, setformErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formValues, [name]: value })
  }

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    const errors = validate(formValues)
    setformErrors(errors)


    if (Object.keys(errors).length === 0) {
      console.log('Name', formValues.name)
      console.log('Email', formValues.email);
      console.log('Password', formValues.password);

      dispatch(setUserData({
        UserName: formValues.name,
        UserEmail: formValues.email,
        UserPassword: formValues.password
      }))
      
      setotpForm(true)

      setformvalues(initialValues)
      setconfirmPassword('')
    }


  }


  const validate = (values) => {
    const errors = {}
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!values.name) {
      errors.name = 'Please Enter your Name'
    }


    if (!values.email) {
      errors.email = "Email is Required";

    }
    else if (!regex.test(values.email)) {
      errors.email = "!!Enter an Valid Email Address"
    }

    if (!values.password) {
      errors.password = 'Please Enter your password'
    }
    else if (!confirmPassword) {
      errors.confirm = "!!Please Fill both Password Fields";
    }
    else if (values.password != confirmPassword) {
      errors.confirm = 'Both Passwords should be same'
    }
    else if (values.password.length < 4) {
      errors.confirm = "!!Length of Password is Too short";
    }
    else if (values.password.length > 10) {
      errors.confirm = "!!Length of Password is Too long";
    }

    return errors;
  }

  // -----------------Otp setup------------------------------//

  const [otpForm, setotpForm] = useState(false);
  const [otp, setotp] = useState(new Array(6).fill(""));
  const [otpinputError,setotpinputError] = useState('');

  function handleOTPINputchange(e, index) {

    const value = e.target.value;
    let newOtp = [...otp];
    newOtp[index] = value;
    setotp(newOtp);

    if (value && /^[0-9]$/.test(value)) {
      // Move focus to next input if input is valid
      if (e.target.nextSibling) {
        e.target.nextSibling.focus();
      }
    }
    else if (!value && e.nativeEvent.inputType === 'deleteContentBackward') {
      // Move focus to previous input if backspace is pressed and input is empty
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    }
  }

  //----------OTP Submit Funtion--------------//
  function handleOtpSubmit(e) {
    e.preventDefault();
    if (otp.every(digit => digit !== "")) {
      // Check if OTP contains only numbers
      if (otp.every(digit => /^\d+$/.test(digit))) {
        console.log(otp.join(''));
      } else {
        setotpinputError('OTP should contain only numbers');
      }
    } else {
      setotpinputError('Enter Complete OTP');
    }
  }
  // -----------------Resend Otp setup----------------------//

  const [seconds, setseconds] = useState('5');
  const [minutes, setminutes] = useState('1');


  useEffect(() => {
      const interval = setInterval(() => {
          if (seconds > 0) {
              setseconds(seconds - 1);
          }

          if (seconds === 0) {
              if (minutes === 0) {
                  clearInterval(interval);
              }
              else {
                  setseconds('59');
                  setminutes(minutes - 1);
              }
          }
      }, 1000);


      return () => {
          clearInterval(interval);
      }


  }, [seconds, minutes]);
  // -----------------Otp setup end---------------------------//







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
        {!otpForm &&
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
                    <SignUpNameIconSvg />
                  </div>

                </div>

                {formErrors.name && <p className="text-[#ff0000]">{formErrors.name}</p>}
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
                {formErrors.email && <p className='text-[#ff0000]'>{formErrors.email}</p>}

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
                    <LockSvg />
                  </div>

                </div>
                {formErrors.password && <p className="text-[#ff0000]">{formErrors.password}</p>}
                {/* ----------------------Password Div End------------ */}

                {/* ---------Confirm Password And Forgot Password Div---------------------------------------------------- */}
                <div className='flex flex-col gap-[.5rem]'>
                  <div className='w-full relative '>
                    <input type="text " className=' w-full  px-[1rem] py-[.5rem] pl-[4rem] rounded-full outline-none border-[2px] border-[#ff7643] bg-transparent text-[#ffff] placeholder:text-[#ff754383]' placeholder='Confirm Password'
                      value={confirmPassword}
                      onChange={(e) => setconfirmPassword(e.target.value)}

                    />

                    <div className='w-fit absolute top-[50%] left-5 translate-y-[-50%] border-r-[1px] pr-[5px] border-[#ff7643]'>
                      <ConfirmPasswordkeySvg />
                    </div>

                  </div>

                  {/* ---------------Remember Me div--------------------- */}
                  <div className='flex items-center justify-end gap-[.5rem]'>
                    <input type="checkbox" name="" id="RememberMe" />

                    <label htmlFor="RememberMe" className='text-right text-[14px]'>Remember Me</label>
                  </div>
                  {/* ---------------Remember Me div End----------------- */}



                </div>
                {formErrors.confirm && <p className="text-[#ff0000]">{formErrors.confirm}</p>}

                {/* ---------Password And Forgot Password Div----End--------------------------------------------- */}


                {/* -----------Inputs Div End--------------------------- */}

                <button className='flex items-center justify-center bg-[#ff7643] p-[.5rem] rounded-full font-semibold text-[18px]' type='submit'
               
                >Send OTP</button>
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
        }
        {/* ------------------------SignIn Form-End------------------------------------------------------ */}

        {/* ----------------------Send And Otp Input div--------------------------------- */}
        {otpForm &&

               <form className='w-[50%] flex flex-col gap-[2rem] items-center justify-center'
               onSubmit={handleOtpSubmit}
               >
                   <h1>
                       Enter 6 digit code you got on your registered Email Address.
                   </h1>

                   {/* -------------Otp Inputs------------------------- */}
                   <div className='w-[80%] flex items-center justify-between gap-[.5rem]'>
                       {
                           otp.map((digit, index) => {
                               return (
                                   <>
                                       <input
                                           type="text"
                                           className='w-[48px] h-[48px] rounded-[10px] text-[#000] text-center'
                                           maxLength={1}
                                           onChange={(e) => { handleOTPINputchange(e, index) }}
                                           value={digit}
                                           onKeyDown={(e) => {
                                               if (e.key === 'Backspace' && !otp[index] && index > 0) {
                                                   e.preventDefault();
                                                   let newOtp = [...otp];
                                                   newOtp[index - 1] = '';
                                                   setotp(newOtp);
                                                   e.target.previousSibling.focus();
                                               }
                                           }}
                                       />
                                   </>
                               )
                           })
                       }
                   </div>
                   {/* -------------Otp Inputs------------------------- */}
                   {/* ------------resend button div------------------- */}

                   <div className='flex items-center justify-between w-[80%]'>
                       <button
                           onClick={() => {
                               console.log("enabled")
                           }}
                           disabled={minutes > 0 || seconds > 0}
                           className={`font-Inter font-medium  text-[16px] ${(minutes > 0 || seconds > 0) ? 'text-[#ff754332]' : 'text-[#ff7643]'}
                      transition-all duration-300
                      `
                           }
                       >
                           Resend OTP
                       </button>

                       <div className='font-Inter font-medium text-[#ff7643] text-[16px]'>
                           {minutes < 10 ? `0${minutes}` : minutes}:
                           {seconds < 10 ? `0${seconds}` : seconds}
                       </div>
                   </div>
                   {/* ------------resend button div end---------------- */}


                  {otpinputError && <p className="text-[#ff0000]">{otpinputError}</p> }

                   {/* -------------Submit Button----------------------- */}
                   <button className='w-[80%] flex items-center justify-center bg-[#ff7643] p-[.5rem] rounded-full font-semibold text-[18px]' type='submit'>Sign Up</button>
                   {/* -------------Submit Button end------------------- */}






               </form>
          

          
      
        }
        {/* ----------------------Send And Otp Input div--------------------------------- */}


      </div>
    </div>
  )
}

export default SignUp
