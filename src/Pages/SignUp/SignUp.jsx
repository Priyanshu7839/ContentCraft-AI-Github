import { useState, useEffect } from 'react';
import { LockSvg, MailSvg, LineSvg, SignUpNameIconSvg, ConfirmPasswordkeySvg } from '../../assets/SVGs/Svg';
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { setUserData } from '../../Store/Slices/UserDataSlice';
import { useDispatch } from 'react-redux';

const SignUp = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [otpForm, setOtpForm] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [otpInputError, setOtpInputError] = useState('');
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(1);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    const valuesWithConfirmPassword = {
      ...formValues,
      confirmPassword: confirmPassword
    };

    const errors = validate(valuesWithConfirmPassword);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('https://auth-api-31e2.onrender.com/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(valuesWithConfirmPassword),
        });

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          if (response.ok) {
            console.log('Registration successful:', data.msg);
            dispatch(setUserData({
              UserName: valuesWithConfirmPassword.name,
              UserEmail: valuesWithConfirmPassword.email,
              UserPassword: valuesWithConfirmPassword.password
            }));
            setOtpForm(true);
            setSubmitted(true);
            setConfirmPassword("") 
          } else {
            console.error('Registration failed:', data.msg);
          }
        } else {
          const text = await response.text();
          console.error('Unexpected response format:', text);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!values.name) {
      errors.name = 'Please Enter your Name';
    }

    if (!values.email) {
      errors.email = "Email is Required";
    } else if (!regex.test(values.email)) {
      errors.email = "Enter a Valid Email Address";
    }

    if (!values.password) {
      errors.password = 'Please Enter your password';
    } else if (!values.confirmPassword) {
      errors.confirm = "Please Fill both Password Fields";
    } else if (values.password !== values.confirmPassword) {
      errors.confirm = 'Both Passwords should be the same';
    } else if (values.password.length < 4) {
      errors.confirm = "Password is Too Short";
    } else if (values.password.length > 10) {
      errors.confirm = "Password is Too Long";
    }

    return errors;
  };

  const handleOtpInputChange = (e, index) => {
    const value = e.target.value;
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && /^[0-9]$/.test(value)) {
      if (e.target.nextSibling) {
        e.target.nextSibling.focus();
      }
    } else if (!value && e.nativeEvent.inputType === 'deleteContentBackward') {
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    if (otp.every(digit => digit !== "")) {
      if (otp.every(digit => /^\d+$/.test(digit))) {
        try {
          const response = await fetch('https://auth-api-31e2.onrender.com/api/auth/verify', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: formValues.email,
              otp: otp.join('')
            }),
          });

          if (response.ok) {
            console.log('Email verified successfully');
            setOtpForm(false);
            // Reset form values only if OTP verification was successful
            if (submitted) {
              setFormValues(initialValues);
              setSubmitted(false);
              navigate("/signin")
            }
          } else {
            console.error('Invalid OTP');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      } else {
        setOtpInputError('OTP should contain only numbers');
      }
    } else {
      setOtpInputError('Enter Complete OTP');
    }
  };

  const handleResendOtp = async () => {
    if (minutes === 0 && seconds === 0) {
      try {
        const response = await fetch('https://auth-api-31e2.onrender.com/api/auth/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: formValues.email }),
        });
        const data = await response.json();
        if (data.success) {
          setMinutes(1);
          setSeconds(0);
        } else {
          setFormErrors({ apiError: data.message });
        }
      } catch (error) {
        setFormErrors({ apiError: 'Failed to resend OTP. Please try again later.' });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes]);

 return(
  <div className='bg-[#06142e] min-h-[100vh] px-[2rem] py-[.5rem] font-Inter text-[#ffffff]' >
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
      
      <div className='flex gap-[2rem] items-center justify-center  h-[90vh]'>
        <div className='w-[50%] h-full flex flex-col items-center justify-center'>
          <h1 className='font-semibold text-[60px]'>Join The <span className='text-[#ff7643]'>ContentCraft AI</span> Community</h1>
          <p className='font-semibold text-[24px]'>And <span className='text-[#ff7643]'>revolutionize</span> your content creation journey! Sign up now to explore the limitless possibilities of <span className='text-[#ff7643]'>AI-driven innovation.</span></p>

        </div>

        {!otpForm && (
          <div className='w-[50%] py-[2rem] px-[5rem] flex flex-col gap-[5rem]'>
            <div className='flex flex-col gap-[3rem]'>
              <h1 className='text-[20px] font-semibold'>Let's Craft Brilliance Together</h1>

              <form className='flex flex-col gap-[1rem]' onSubmit={handleSignUpSubmit}>

                <div className='w-full relative'>
                  <input type="text" className='w-full px-[1rem] py-[.5rem] pl-[4rem] rounded-full outline-none border-[2px] border-[#ff7643] bg-transparent text-[#fff] placeholder:text-[#ff754383]'
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

                <div className='w-full relative'>
                  <input type="text" className='w-full px-[1rem] py-[.5rem] pl-[4rem] rounded-full outline-none border-[2px] border-[#ff7643] bg-transparent text-[#fff] placeholder:text-[#ff754383]'
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

                <div className='w-full relative'>
                  <input type="password" className='w-full px-[1rem] py-[.5rem] pl-[4rem] rounded-full outline-none border-[2px] border-[#ff7643] bg-transparent text-[#fff] placeholder:text-[#ff754383]'
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

                <div className='w-full relative'>
                  <input type="password" className='w-full px-[1rem] py-[.5rem] pl-[4rem] rounded-full outline-none border-[2px] border-[#ff7643] bg-transparent text-[#fff] placeholder:text-[#ff754383]'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <div className='w-fit absolute top-[50%] left-5 translate-y-[-50%] border-r-[1px] pr-[5px] border-[#ff7643]'>
                    <ConfirmPasswordkeySvg />
                  </div>
                </div>
                {formErrors.confirm && <p className="text-[#ff0000]">{formErrors.confirm}</p>}

                <button className='flex items-center justify-center bg-[#ff7643] p-[.5rem] rounded-full font-semibold text-[18px]' type='submit'>
                  Send OTP
                </button>
              </form>

              <div className='flex flex-col gap-[1rem]'>
                <div className='flex items-center gap-[1rem]'>
                  <LineSvg />
                  <p className='whitespace-nowrap'> Or Continue With</p>
                  <LineSvg />
                </div>

                <div className='flex gap-[2rem] items-center justify-center text-[24px]'>
                  <FaGoogle />
                  <FaApple />
                  <FaFacebook />
                </div>
              </div>

              <p className='text-center'>Already Have An Account? <Link to='/SignIn' className='text-[#ff7643] hover:underline'>Log In</Link></p>
            </div>
          </div>
        )}

        {otpForm && (
          <form className='w-[50%] flex flex-col gap-[2rem] items-center justify-center' onSubmit={handleOtpSubmit}>
            <h1>Enter the 6-digit code you received on your registered Email Address.</h1>
            <div className='w-[80%] flex items-center justify-between gap-[.5rem]'>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  className='w-[48px] h-[48px] rounded-[10px] text-[#000] text-center'
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpInputChange(e, index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Backspace' && !otp[index] && index > 0) {
                      e.preventDefault();
                      let newOtp = [...otp];
                      newOtp[index - 1] = '';
                      setOtp(newOtp);
                      e.target.previousSibling.focus();
                    }
                  }}
                />
              ))}
            </div>
            <div className='flex items-center justify-between w-[80%]'>
              <button
                onClick={handleResendOtp}
                disabled={minutes > 0 || seconds > 0}
                className={`font-Inter font-medium text-[16px] ${(minutes > 0 || seconds > 0) ? 'text-[#ff754332]' : 'text-[#ff7643]'} transition-all duration-300`}
              >
                Resend OTP
              </button>
              <div className='font-Inter font-medium text-[#ff7643] text-[16px]'>
                {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </div>
            </div>
            {otpInputError && <p className="text-[#ff0000]">{otpInputError}</p>}
            <button className='w-[80%] flex items-center justify-center bg-[#ff7643] p-[.5rem] rounded-full font-semibold text-[18px]' type='submit'>
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;

