import React, { useState } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { QrCodeImg } from '../../../assets';

import { useDispatch } from 'react-redux';
import { setcurrPrivacySettingSlide } from '../../../Store/Slices/PrivacyPolicySlice';

const TwoFactorAuth = () => {

    const [changesMade,setchangesMade] = useState(false);



    const dispatch = useDispatch();
    return (
        <div className='min-h-[100vh]'>

            {/* -------------------------------------------heading and back button--------------------------------- */}
            <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
                <div className='w-full flex items-center gap-[1rem] cursor-pointer'
                    onClick={() => { dispatch(setcurrPrivacySettingSlide('')) }}
                >
                    <IoMdArrowRoundBack className='text-[30px]' />

                    <h1 className='font-semibold text-[26px]'>Privacy Policy</h1>

                </div>
                {/* ---------------------------two factor auth ------------------------- */}

                <div className='p-[2rem] bg-[#374868] flex flex-col gap-[3rem] font-Inter'>
                        {/* ----------------Qrcode div---------------------- */}
                        <div className='w-full flex flex-col gap-[1rem]'>
                            <h1 className='font-semibold text-[30px] text-[#ff7643]'>🔐 Two-Factor Authentication (2FA) Setup </h1>

                            <p className='font-normal text-[#ffffff] text-[16px]'>Enhance the security of your account by enabling Two-Factor Authentication (2FA). Follow the steps below to set it up.</p>

                            <p className='font-normal text-[#ffffff] text-[18px]'>
                            📷 Scan the QR code using your authenticator app or enter the provided secret key. Once set up, your authenticator app will generate a unique code every 30 seconds.
                            </p>
                            {/* ------------------for Qrcode Image------------------------ */}
                            <div>
                                <img src={QrCodeImg} alt="" className='w-[25%]'/>
                            </div>
                        </div>
                        {/* ------------------------------------------------ */}
                        {/* --------------------BackUp Codes---------------- */}
                        <div className='flex flex-col gap-[1rem]'>
                            <h3 className='font-semibold text-[#ffffff] text-[24px]'>🗄️ Backup Codes</h3>
                            
                            <p className='font-normal text-[#ffffff] text-[16px]'>Save these backup codes in a secure place. They can be used to access your account if you lose access to your authenticator app.</p>

                            {/* -------------------------for Backupcodes------------------ */}
                            <div className='p-[1.5rem] bg-white w-fit  rounded-[10px] flex flex-col gap-[1rem]' >
                                <div>
                                    <h1 className='text-[#000] font-normal text-[22px]'>1.ABCD-EFGH</h1>
                                    <h1 className='text-[#000] font-normal text-[22px]'>2.ABCD-EFGH</h1>
                                    <h1 className='text-[#000] font-normal text-[22px]'>3.ABCD-EFGH</h1>
                                    <h1 className='text-[#000] font-normal text-[22px]'>4.ABCD-EFGH</h1>
                                </div>

                                <div className='flex gap-[1rem]'>
                                    <button className='px-[.5rem] py-[.1rem] rounded-[5px] border-[1px] border-[#ff7643] text-[#ff7643] font-normal text-[16px]'
                                    onClick={()=>{setchangesMade(true)}}
                                    >
                                        Regenerate
                                    </button>

                                    <button className='px-[.5rem] py-[.1rem] rounded-[5px]  border-[1px] border-[#ff7643] bg-[#ff7643] text-[#ffffff] font-normal text-[16px]'>
                                        Copy
                                    </button>
                                </div>

                            </div>
                            {/* ---------------------------------------------------------- */}
                        </div>
                        {/* ------------------------------------------------ */}

                        {/* ------------------------------Save Or Discard Changes Button------------ */}
                        {changesMade &&
                            
                            <div className='flex items-center justify-between gap-[3rem] font-semibold text-[18px]'>
                                <button className='w-[50%] rounded-[20px] bg-[#ff7643] py-[.5rem]'
                                onClick={()=>setchangesMade(false)}
                                >
                                     Save changes
                                </button>
                                <button className='w-[50%] rounded-[20px] py-[.5rem] border-[1px] border-[#ff7643] text-    [#ff7643]'
                                onClick={()=>setchangesMade(false)}
                                >
                                    Discard Changes
                                </button>

                        </div>}
                        {/* ------------------------------------------------------------------------ */}
                        {/* -----------------------------Disclaimer--------------------------------- */}
                        <div className='flex flex-col gap-[1rem]'>
                            <p className='font-semibold text-[16px]'>(Enabling 2FA adds an extra layer of security. Are you sure you want to skip?)</p>
                            <p className='font-normal text-[18px]'>🔒 Remember to keep your authenticator app and backup codes secure. If you ever lose access, contact support for assistance.</p>
                        </div>
                        {/* ------------------------------------------------------------------------ */}
                        {/* /----------------------Contact Support------------------------------- */}
                        <a className='underline font-bold text-[#ff7643] text-[24px]' href="">Contact Support</a>
                        {/* --------------------------------------------------------------------- */}
                </div>

            </div>

        </div>
    )
}

export default TwoFactorAuth
