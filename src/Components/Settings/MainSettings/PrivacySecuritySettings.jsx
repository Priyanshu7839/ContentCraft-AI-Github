import React from 'react';
import { IoMdArrowRoundForward } from "react-icons/io";

import { setcurrPrivacySettingSlide,setshareDataForAnalytics } from '../../../Store/Slices/PrivacyPolicySlice';
import { useDispatch, useSelector,} from 'react-redux';

const PrivacySecuritySettings = () => {

    const dispatch = useDispatch();
    const shareDataForAnalytics = useSelector((state)=>state.PrivacySettingsSlide.shareDataForAnalytics);
  

    return (
        <div>
            <div className='min-h-[100vh]'>



                <div className='p-[3rem] flex flex-col gap-[3rem] '>
                    {/* --------------------Privacy Settings-------------------------------------------- */}
                    <div className='w-full flex flex-col bg-[#374868] p-[2rem] gap-[2rem] font-Inter text-[#ffffff] rounded-[10px] '>
                        <h1 className='font-semibold text-[28px]'>Privacy Settings</h1>
                        {/* ------------------settings----------------------- */}
                        <div className='w-full flex-col'>
                            {/* -------------------------Link to Privacy Policy ----------------------*/}
                            <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                                onClick={() => dispatch(setcurrPrivacySettingSlide('LinkToPrivacyPolicy'))}
                            >
                                <h1 className='font-medium text-[20px]'>
                                    Link to Privacy Policy
                                </h1>

                                <IoMdArrowRoundForward className='text-[24px]' />
                            </div>
                            {/* ---------------------------------------------------- ----------------*/}
                            {/* -------------------------Data Collection And Usage ----------------------*/}
                            <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                                onClick={() => dispatch(setcurrPrivacySettingSlide('DataCollection'))}
                            >
                                <h1 className='font-medium text-[20px]'>
                                    Data Collection And Usage
                                </h1>

                                <IoMdArrowRoundForward className='text-[24px]' />
                            </div>
                            {/* ---------------------------------------------------- ----------------*/}
                            {/* -------------------------Share Data For Analytics ----------------------*/}
                            <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                                onClick={() => dispatch(setshareDataForAnalytics(!shareDataForAnalytics))}
                            >
                                <h1 className='font-medium text-[20px]'>
                                    Share Data For Analytics
                                </h1>

                                <button className={`w-[50px] h-[25px] relative rounded-full ${shareDataForAnalytics?'bg-[#ff7643]':'bg-[#06142e] transition-all duration-700'}`}>
                                    <span className={`w-[25px] h-[25px] rounded-full  bg-white absolute top-0 transition-all duration-500 ${shareDataForAnalytics ?'right-0 ':'left-0 '}`}></span>
                                </button>
                            </div>
                            {/* ---------------------------------------------------- ----------------*/}
                            {/* -------------------------Password Policies ----------------------*/}
                            <div className='w-full flex items-center justify-between py-[1rem] cursor-pointer'
                                onClick={() => dispatch(setcurrPrivacySettingSlide('PasswordPolicies'))}
                            >
                                <h1 className='font-medium text-[20px]'>
                                    Password Policies
                                </h1>

                                <IoMdArrowRoundForward className='text-[24px]' />
                            </div>
                            {/* ---------------------------------------------------- ----------------*/}
                        </div>
                    </div>
                    {/* --------------------Privacy-settings-end---------------------------------------- */}
                    {/* --------------------Security Settings----------------------------------------------- */}
                    <div className='w-full flex flex-col bg-[#374868] p-[2rem] gap-[2rem] font-Inter text-[#ffffff] rounded-[10px]'>
                        <h1 className='font-semibold text-[28px]'>Account Controls</h1>
                        {/* ------------------settings----------------------- */}
                        <div className='w-full flex-col'>
                            <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                                onClick={() => dispatch(setcurrPrivacySettingSlide('TwoFactorAuth'))}
                            >
                                <h1 className='font-medium text-[20px]'>
                                    Two-Factor Authentication (2FA)
                                </h1>

                                <IoMdArrowRoundForward className='text-[24px]' />
                            </div>
                            {/* ------------------ */}
                            <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                                onClick={() => dispatch(setcurrPrivacySettingSlide('ThirdPartyIntegration'))}
                            >
                                <h1 className='font-medium text-[20px]'>
                                    Third-Party Integration
                                </h1>

                                <IoMdArrowRoundForward className='text-[24px]' />
                            </div>
                            {/* ------------------- */}
                            <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                                 onClick={() => dispatch(setcurrPrivacySettingSlide('IncidentResponse'))}
                            >
                                <h1 className='font-medium text-[20px]'>
                                    Incident Response
                                </h1>

                                <IoMdArrowRoundForward className='text-[24px]' />
                            </div>
                            {/* ------------------- */}
                            <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                                 onClick={() => dispatch(setcurrPrivacySettingSlide('LogOutEverywhere'))}
                            >
                                <h1 className='font-medium text-[20px]'>
                                    Log-out Everywhere
                                </h1>

                                <IoMdArrowRoundForward className='text-[24px]' />
                            </div>
                            {/* ------------------- */}
                            <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                                 onClick={() => dispatch(setcurrPrivacySettingSlide('DeleteAccount'))}
                            >
                                <h1 className='font-medium text-[20px]'>
                                    Delete Account
                                </h1>

                                <IoMdArrowRoundForward className='text-[24px]' />
                            </div>
                            {/* ------------------- */}
                            <div className='w-full flex items-center justify-between py-[1rem] cursor-pointer'
                                 onClick={() => dispatch(setcurrPrivacySettingSlide('SecurityMeasures'))}
                            >
                                <h1 className='font-medium text-[20px]'>
                                    Security Measures
                                </h1>

                                <IoMdArrowRoundForward className='text-[24px]' />
                            </div>
                            {/* ------------------- */}

                        </div>
                    </div>
                    {/* --------------------Security Settings-end------------------------------------------- */}

                    {/* -------------Contact-us----------- */}
                    <div className='w-full rounded-[10px] flex items-center justify-between p-[2rem] bg-[#374868]'
                         onClick={() => dispatch(setcurrPrivacySettingSlide('ContactUs'))}
                    >
                        <h1 className='font-medium text-[20px] text-[#fff] font-Inter'>
                            Contact Us
                        </h1>

                        <IoMdArrowRoundForward className='text-[24px] text-[#fff]' />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default PrivacySecuritySettings
