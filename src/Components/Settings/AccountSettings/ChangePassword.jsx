import  { useEffect, useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { setcurrAccountSettingSlide } from '../../../Store/Slices/AccountSettingsSlice';

const ChangePassword = () => {
  const dispatch = useDispatch();

  const [minutes, setMinutes] = useState('1');
  const [seconds, setSeconds] = useState('5');
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds('59');
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes]);

  const handleOTPINputChange = (e, index) => {
    const value = e.target.value;
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && /^[0-9]$/.test(value)) {
      // Move focus to next input if input is valid
      if (e.target.nextSibling) {
        e.target.nextSibling.focus();
      }
    } else if (!value && e.nativeEvent.inputType === 'deleteContentBackward') {
      // Move focus to previous input if backspace is pressed and input is empty
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    }
  };
  const handleOtpSubmit = async () => {
    const otpValue = otp.join('');
    const token = getCookie('token');
    console.log(token); // Verify token
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Include token in Authorization header
      },
      body: JSON.stringify({ otp: otpValue, currentPassword, newPassword }),
    };
  
    try {
      const response = await fetch('http://localhost:3000/api/auth/reset-password', requestOptions);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.msg || 'Failed to reset password');
      }
      alert('Password reset successfully');
    } catch (error) {
      console.error('Password reset error:', error.message);
    }
  };
  
  const handleSendOtp = async () => {
    const token = getCookie('token');
    console.log(token); // Verify token
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Include token in Authorization header
      },
      body: JSON.stringify(), // Adjust body as per your API requirements
    };
  
    try {
      const response = await fetch('http://localhost:3000/api/auth/sendOtp', requestOptions);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.msg || 'Failed to send OTP');
      }
      console.log('OTP sent successfully');
    } catch (error) {
      console.error('Send OTP error:', error.message);
    }
  };
  

  // Function to get token from cookie
  const getCookie = (name) => {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith(name))
      ?.split('=')[1];
    return cookieValue ? decodeURIComponent(cookieValue) : '';
  };
  

  return (
    <div className="min-h-[100vh]">
      <div className="p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]">
        <div
          className="w-full flex items-center gap-[1rem] cursor-pointer"
          onClick={() => dispatch(setcurrAccountSettingSlide(''))}
        >
          <IoMdArrowRoundBack className="text-[30px]" />
          <h1 className="font-semibold text-[26px]">Change Password</h1>
        </div>

        <div className="p-[2rem] w-full bg-[#374868] rounded-[10px] flex flex-col gap-[2rem]">
          <div className="flex justify-between gap-[2rem] ">
            <div className="w-[50%] flex flex-col gap-[.5rem]">
              <h1 className="font-Inter font-medium text-[18px]">Current Password</h1>
              <input
                type="password"
                placeholder="Current Password..."
                className="w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-between gap-[2rem]">
            <div className="w-[50%] flex flex-col items-start gap-[.5rem]">
              <h1 className="font-Inter font-medium text-[18px]">New Password</h1>
              <input
                type="password"
                placeholder="New Password..."
                className="w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-[2rem]">
            <div className="w-[50%] flex flex-col gap-[1rem] items-start">
              <button
                className="font-Inter font-medium text-[#ff7643] text-[16px]"
                onClick={handleSendOtp}
              >
                Send OTP
              </button>

              <div className="flex flex-col gap-[.5rem]">
                <h1>Enter 6 digit code you got on your registered Email Address.</h1>

                <div className="w-[80%] flex items-center justify-between gap-[.5rem]">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      className="w-[48px] h-[48px] rounded-[10px] text-[#000] text-center"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOTPINputChange(e, index)}
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

                <div className="flex items-center justify-between w-[80%]">
                  <button
                    onClick={() => {
                      console.log('enabled');
                    }}
                    disabled={minutes > 0 || seconds > 0}
                    className={`font-Inter font-medium  text-[16px] ${
                      minutes > 0 || seconds > 0 ? 'text-[#ff754332]' : 'text-[#ff7643]'
                    } transition-all duration-300`}
                  >
                    Resend OTP
                  </button>

                  <div className="font-Inter font-medium text-[#ff7643] text-[16px]">
                    {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[50%]">
              <ul className="list-disc pl-[1rem] font-Inter font-medium text-[#ff7643] text-[16px]">
                <li>Must Contain Atleast 8 Characters</li>
                <li>Include Both Uppercase And Lowercase Letters</li>
                <li>Include at least one number</li>
                <li>Include atleast one special Character</li>
              </ul>
            </div>
          </div>

          <div className="w-[50%] flex">
            <button
              onClick={handleOtpSubmit}
              className="w-[90%] p-[.5rem] bg-[#ff7643] rounded-[30px] font-Inter font-semibold text-[16px] text-center"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
