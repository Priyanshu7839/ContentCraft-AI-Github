import React, { useState } from 'react'
import { UserImg } from '../../../assets'
import { IoSearchCircleSharp } from "react-icons/io5";


import { setCurrPanel } from '../../../Store/Slices/settingSidebarSlice';
import { setcurrAccountSettingSlide } from '../../../Store/Slices/AccountSettingsSlice';
import { setcurrPrivacySettingSlide } from '../../../Store/Slices/PrivacyPolicySlice';
import { setcurrHelpAndSupportOptions } from '../../../Store/Slices/HelpAndSupportOptionsSlice';
import { setcurrAppVersionAndUpdatesOptions } from '../../../Store/Slices/AppVersionAndUpdatesSettingsOptionsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { AccountSettingIcon } from '../../../assets/SVGs/Svg';


const SettingsSidebar = () => {


    const currPanel = useSelector((state) => state.panel.currPanel);
    const dispatch = useDispatch();


    return (
        <div className='SettingsSidear h-[85vh] w-[300px] bg-[#1e2d4a] px-[1rem] py-[2rem] flex flex-col gap-[3rem] rounded-r-[10px]'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[.5rem]'>
                    <div className='w-[50px] h-[50px] bg-red-900 rounded-full border-[1px] border-[#ff7643] overflow-hidden'>
                        <img src={UserImg} alt="" className='w-[100%] h-[100%] object-fit ' />
                    </div>
                    <h1 className='font-Inter font-semibold text-[#ffffff] text-[24px]'>
                        Settings
                    </h1>
                </div>

                <div className='text-[42px] text-[#ffffff]'>
                <IoSearchCircleSharp/>
                </div>
            </div>

            {/* -------------------------------- */}
            <ul className='w-full flex flex-col gap-[.5rem] font-Inter font-medium text-[16px] text-[#ffffff]'>
                <li className={`w-full flex items-center gap-[1rem] px-[1rem] py-[.5rem] rounded-[10px] cursor-pointer ${currPanel === 'AccSettings' ? 'bg-[#06142e]' : 'bg-[#374868]'}`}
                    onClick={() =>{
                        dispatch(setCurrPanel('AccSettings'))
                        dispatch(setcurrAccountSettingSlide(''))
                        dispatch(setcurrPrivacySettingSlide(''))
                        dispatch(setcurrHelpAndSupportOptions(''))
                        dispatch(setcurrAppVersionAndUpdatesOptions(''))
                    }}
                >

                    <AccountSettingIcon/>

                    <h1>
                        Account Settings
                    </h1>
                </li>
                {/* ----------------------------------------------------------- */}
                <li className={`w-full flex items-center gap-[1rem] px-[1rem] py-[.5rem] rounded-[10px] cursor-pointer ${currPanel === 'Privacy' ? 'bg-[#06142e]' : 'bg-[#374868]'}`}
                    onClick={() => {
                        dispatch(setCurrPanel('Privacy'))
                        dispatch(setcurrAccountSettingSlide(''))
                        dispatch(setcurrPrivacySettingSlide(''))
                        dispatch(setcurrHelpAndSupportOptions(''))
                        dispatch(setcurrAppVersionAndUpdatesOptions(''))

                    }}
                >

                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 16.5V10.5C10.5 8.51088 11.2902 6.60322 12.6967 5.1967C14.1032 3.79018 16.0109 3 18 3C19.9891 3 21.8968 3.79018 23.3033 5.1967C24.7098 6.60322 25.5 8.51088 25.5 10.5V16.5" stroke="#FF7643" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M28.5 16.5H7.5C5.84315 16.5 4.5 17.8431 4.5 19.5V30C4.5 31.6569 5.84315 33 7.5 33H28.5C30.1569 33 31.5 31.6569 31.5 30V19.5C31.5 17.8431 30.1569 16.5 28.5 16.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <h1>
                        Privacy & Security
                    </h1>

                </li>

                {/* ------------------------------------------------------------  */}
                <li className={`w-full flex items-center gap-[1rem] px-[1rem] py-[.5rem] rounded-[10px] cursor-pointer ${currPanel === 'NotiSettings' ? 'bg-[#06142e]' : 'bg-[#374868]'}`}
                    onClick={() => {
                        dispatch(setCurrPanel('NotiSettings'))
                        dispatch(setcurrAccountSettingSlide(''))
                        dispatch(setcurrPrivacySettingSlide(''))
                        dispatch(setcurrHelpAndSupportOptions(''))
                        dispatch(setcurrAppVersionAndUpdatesOptions(''))

                    }}
                >

                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27 12C27 9.61305 26.0518 7.32387 24.364 5.63604C22.6761 3.94821 20.3869 3 18 3C15.6131 3 13.3239 3.94821 11.636 5.63604C9.94821 7.32387 9 9.61305 9 12C9 22.5 4.5 25.5 4.5 25.5H31.5C31.5 25.5 27 22.5 27 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20.5962 31.5C20.3325 31.9546 19.954 32.332 19.4986 32.5943C19.0432 32.8566 18.5268 32.9947 18.0012 32.9947C17.4757 32.9947 16.9593 32.8566 16.5039 32.5943C16.0485 32.332 15.67 31.9546 15.4062 31.5" stroke="#FF7643" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <h1>
                        Notification Settings
                    </h1>

                </li>

                {/* ------------------------------------------------------------------ */}

                <li className={`w-full flex items-center gap-[1rem] px-[1rem] py-[.5rem] rounded-[10px] cursor-pointer ${currPanel === 'Language' ? 'bg-[#06142e]' : 'bg-[#374868]'}`}
                    onClick={() => {dispatch(setCurrPanel('Language'))
                                    dispatch(setcurrAccountSettingSlide(''))
                                    dispatch(setcurrPrivacySettingSlide(''))
                                    dispatch(setcurrHelpAndSupportOptions(''))
                                    dispatch(setcurrAppVersionAndUpdatesOptions(''))

                    }}
                >

                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.25 21.375H27V23.625H20.25V21.375ZM20.25 16.875H33.75V19.125H20.25V16.875ZM20.25 12.375H33.75V14.625H20.25V12.375ZM15.75 23.625V21.375H10.125V19.125H7.875V21.375H2.25V23.625H11.4919C11.0784 25.3134 10.2171 26.8591 8.99888 28.0991C8.36027 27.433 7.81287 26.6851 7.371 25.875H4.87463C5.44642 27.248 6.26421 28.505 7.28775 29.5841C6.08183 30.4429 4.76575 31.1354 3.375 31.6429L4.16475 33.75C5.89553 33.1195 7.52228 32.2337 8.991 31.122C10.4662 32.2344 12.0994 33.1202 13.8364 33.75L14.625 31.6429C13.2349 31.1363 11.9192 30.4449 10.7134 29.5875C12.3014 27.9456 13.3694 25.8714 13.7835 23.625H15.75ZM12.5629 14.625H14.9996L9.84375 2.25H7.40588L2.25 14.625H4.68675L5.625 12.375H11.6246L12.5629 14.625ZM6.56213 10.125L8.62425 5.175L10.6875 10.125H6.56213Z" fill="#F8F8F8" />
                    </svg>

                    <h1>
                        Language
                    </h1>


                </li>
                {/* -------------------------------------------------------------------- */}

                <li className={`w-full flex items-center gap-[1rem] px-[1rem] py-[.5rem] rounded-[10px] cursor-pointer ${currPanel === 'ContentGeneration' ? 'bg-[#06142e]' : 'bg-[#374868]'}`}
                    onClick={() => {dispatch(setCurrPanel('ContentGeneration'))
                                    dispatch(setcurrAccountSettingSlide(''))
                                    dispatch(setcurrPrivacySettingSlide(''))
                                    dispatch(setcurrHelpAndSupportOptions(''))
                                    dispatch(setcurrAppVersionAndUpdatesOptions(''))

                    }}
                >

                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 31.5V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 15V4.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18 31.5V18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18 12V4.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M30 31.5V24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M30 18V4.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.5 21H10.5" stroke="#FF7643" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.5 12H22.5" stroke="#FF7643" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M25.5 24H34.5" stroke="#FF7643" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <h1>
                        Content Genration Preferances
                    </h1>

                </li>

                {/* ------------------------------------------------------------------------ */}

                <li className={`w-full flex items-center gap-[1rem] px-[1rem] py-[.5rem] rounded-[10px] cursor-pointer ${currPanel === 'collabSettings' ? 'bg-[#06142e]' : 'bg-[#374868]'}`}
                    onClick={() => {
                        dispatch(setCurrPanel('CollabSettings'))
                        dispatch(setcurrAccountSettingSlide(''))
                        dispatch(setcurrPrivacySettingSlide(''))
                        dispatch(setcurrHelpAndSupportOptions(''))
                        dispatch(setcurrAppVersionAndUpdatesOptions(''))

                    }}
                >
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_676_4328)">
                            <path d="M1.34375 34.6598C1.35997 33.0592 1.78199 31.4887 2.57032 30.0956C3.39968 28.646 4.59493 27.4395 6.03664 26.5966C7.47835 25.7536 9.11603 25.3039 10.786 25.2921C14.1546 25.2998 17.3432 27.1616 19.0017 30.0956C19.7897 31.488 20.2117 33.0575 20.2283 34.6573M25.4226 3.55584V1.44727M32.62 6.14527L34.3455 4.93412M18.22 6.14527L16.492 4.93412M10.7835 20.8127C11.4207 20.8275 12.0545 20.7147 12.6476 20.4811C13.2406 20.2474 13.781 19.8976 14.2369 19.4521C14.6928 19.0066 15.0551 18.4745 15.3025 17.887C15.5498 17.2995 15.6772 16.6685 15.6772 16.0311C15.6772 15.3937 15.5498 14.7627 15.3025 14.1752C15.0551 13.5877 14.6928 13.0556 14.2369 12.6102C13.781 12.1647 13.2406 11.8148 12.6476 11.5812C12.0545 11.3475 11.4207 11.2348 10.7835 11.2496C9.53451 11.2785 8.34646 11.795 7.47338 12.6886C6.6003 13.5821 6.1115 14.7818 6.1115 16.0311C6.1115 17.2804 6.6003 18.4801 7.47338 19.3737C8.34646 20.2672 9.53451 20.7837 10.7835 20.8127ZM30.6503 13.0058C30.646 12.3099 30.5042 11.6217 30.2331 10.9808C29.9621 10.3398 29.5671 9.75869 29.0708 9.27079C28.5746 8.7829 27.9868 8.39784 27.3413 8.13771C26.6959 7.87758 26.0054 7.74752 25.3095 7.75498C24.6138 7.77655 23.9293 7.93533 23.2953 8.22218C22.6612 8.50903 22.09 8.9183 21.6145 9.42651C21.139 9.93472 20.7686 10.5318 20.5246 11.1836C20.2805 11.8354 20.1676 12.5289 20.1923 13.2244C20.2428 14.1546 20.5368 15.0552 21.045 15.836C21.5532 16.6168 22.2576 17.2502 23.0878 17.673V20.2444C23.0924 20.3956 23.1556 20.5391 23.264 20.6447C23.3724 20.7502 23.5176 20.8095 23.6689 20.8101H27.1686C27.3203 20.8102 27.4662 20.7512 27.5751 20.6456C27.6841 20.54 27.7476 20.3961 27.7523 20.2444V17.6267C28.6077 17.1898 29.329 16.5297 29.8397 15.7161C30.3503 14.9026 30.6287 13.9661 30.6503 13.0058Z" stroke="#F8F8F8" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_676_4328">
                                <rect width="36" height="36" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <h1>
                        Collaboration Settings
                    </h1>

                </li>
                {/* ---------------------------------------------------------------------- */}
                <li className={`w-full flex items-center gap-[1rem] px-[1rem] py-[.5rem] rounded-[10px] cursor-pointer ${currPanel === 'AppUpdates' ? 'bg-[#06142e]' : 'bg-[#374868]'}`}
                    onClick={() => {
                        dispatch(setCurrPanel('AppUpdates'))
                        dispatch(setcurrAccountSettingSlide(''))
                        dispatch(setcurrPrivacySettingSlide(''))
                        dispatch(setcurrHelpAndSupportOptions(''))
                        dispatch(setcurrAppVersionAndUpdatesOptions(''))


                    }}
                >

                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18 9V18L24 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M34.5 6L28.5 1.5L22.5 6" stroke="#FF7643" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M34.5 15L28.5 10.5L22.5 15" stroke="#FF7643" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <h1>
                        App Version And Updates
                    </h1>

                </li>
                {/* ------------------------------------------------------------------------- */}

                <li className={`w-full flex items-center gap-[1rem] px-[1rem] py-[.5rem] rounded-[10px] cursor-pointer ${currPanel === 'HelpSupport' ? 'bg-[#06142e]' : 'bg-[#374868]'}`}
                    onClick={() => {dispatch(setCurrPanel('HelpSupport'))
                                    dispatch(setcurrAccountSettingSlide(''))
                                    dispatch(setcurrPrivacySettingSlide(''))
                                    dispatch(setcurrHelpAndSupportOptions(''))
                                    dispatch(setcurrAppVersionAndUpdatesOptions(''))

                    }}
                >
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.6367 13.4999C13.9894 12.4974 14.6854 11.652 15.6017 11.1136C16.5179 10.5751 17.5951 10.3783 18.6425 10.5579C19.6899 10.7376 20.6399 11.2822 21.3243 12.0952C22.0087 12.9082 22.3833 13.9372 22.3817 14.9999C22.3817 17.9999 17.8817 19.4999 17.8817 19.4999" stroke="#FF7643" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18 25.5H18.015" stroke="#FF7643" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <h1>
                        Help And Support
                    </h1>

                </li>
            </ul>
        </div>
    )
}

export default SettingsSidebar
