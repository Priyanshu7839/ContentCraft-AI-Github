import React, { useEffect, useState } from 'react';
import { SettingsSidebar } from '../../index';
import { IoMdArrowRoundBack } from "react-icons/io";


import { useDispatch, useSelector } from 'react-redux';
import { setcurrAccountSettingSlide } from '../../../Store/Slices/AccountSettingsSlice';

const ChangePassword = () => {

    const dispatch = useDispatch();



    ////////////OTP Resend Field//////////////////////

    const [minutes, setminutes] = useState('1');
    const [seconds, setseconds] = useState('5');
    const [otp, setotp] = useState(new Array(6).fill(""));

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


    function handleOtpSubmit() {

        if (otp.every(digit => digit !== "")) {
            console.log(otp.join(''));
        }
        else {
            console.log("enter complete Otp")
        }

    }



















    return (
        <div className='min-h-[100vh]'>


            {/* ------------------------------------------------------------------- */}
            <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
                <div className='w-full flex items-center gap-[1rem] cursor-pointer'
                    onClick={() => dispatch(setcurrAccountSettingSlide(''))}
                >
                    <IoMdArrowRoundBack className='text-[30px]' />

                    <h1 className='font-semibold text-[26px]'>Change Password</h1>

                </div>

                {/* ----------------------------Input Div----------------------------------- */}
                <div className='p-[2rem] w-full bg-[#374868] rounded-[10px] flex flex-col gap-[2rem]'>

                    {/* ---------------Old password Input------------------- */}
                    <div className='flex justify-between gap-[2rem] '>
                        <div className='w-[50%] flex flex-col gap-[.5rem]'>
                            <h1 className='font-Inter font-medium text-[18px]'>Current Password</h1>
                            <input
                                type="text"
                                placeholder='Current Password...'
                                className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none' />
                        </div>
                    </div>

                    {/* ----------------------New Password Input-------------------------------------- */}

                    <div className='flex justify-between gap-[2rem]'>
                        <div className='w-[50%] flex flex-col items-start gap-[.5rem]'>
                            <h1 className='font-Inter font-medium text-[18px]'>New Password</h1>
                            <input
                                type="text"
                                placeholder='New Password...'
                                className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none' />


                        </div>

                        <div className='w-[50%] flex flex-col gap-[.5rem]'>
                            <h1 className='font-Inter font-medium text-[18px]'>Confirm Password</h1>
                            <input
                                type="text"
                                placeholder='Confirm New Password...'
                                className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none' />
                        </div>

                    </div>

                    {/* ----------------------Send And Otp Input div--------------------------------- */}

                    <div className='flex  gap-[2rem]'>
                        <div className='w-[50%] flex flex-col gap-[1rem] items-start'>
                            <button className='font-Inter font-medium text-[#ff7643] text-[16px]'>Send OTP</button>

                            <div className='flex flex-col gap-[.5rem]'>
                                <h1>
                                    Enter 6 digit code you got on your registered Email Address.
                                </h1>

                                {/* -------------Otp Inputs------------------------- */}
                                <div className='w-[80%] flex items-center justify-between'>
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
                            </div>
                        </div>

                        {/* ------------------Conditions for password------------------ */}
                        <div className='w-[50%]'>
                            <ul className='list-disc pl-[1rem] font-Inter font-medium text-[#ff7643] text-[16px]'>
                                <li>Must Contain Atleast 8 Characters</li>
                                <li>Include Both Uppercase And Lowercase Letters</li>
                                <li>Include at least one number</li>
                                <li>Include atleast one special Character</li>
                            </ul>
                        </div>
                    </div>

                    <div className='w-[50%] flex'>

                        <button
                            onClick={handleOtpSubmit}
                            className='w-[90%] p-[.5rem] bg-[#ff7643] rounded-[30px] font-Inter font-semibold text-[16px] text-center'>Change Password</button>

                    </div>




                </div>
            </div>

        </div>
    )
}

export default ChangePassword
