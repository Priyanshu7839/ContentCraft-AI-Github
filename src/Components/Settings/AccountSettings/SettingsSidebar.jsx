import React, { useState } from 'react'
import { UserImg } from '../../../assets'
import { IoSearchCircleSharp } from "react-icons/io5";


import { setCurrPanel } from '../../../Store/Slices/settingSidebarSlice';
import { setcurrAccountSettingSlide } from '../../../Store/Slices/AccountSettingsSlice';
import { setcurrPrivacySettingSlide } from '../../../Store/Slices/PrivacyPolicySlice';
import { setcurrHelpAndSupportOptions } from '../../../Store/Slices/HelpAndSupportOptionsSlice';
import { setcurrAppVersionAndUpdatesOptions } from '../../../Store/Slices/AppVersionAndUpdatesSettingsOptionsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { AccountSettingIcon, AppVersionAndUpdatesSettingsIcon, CollaborationSettingsIcon, ContentGenerationPreferencesSettingsIcon, HelpAndSupportSettingsIcon, LanguageSettingsIcon, NotificationSettingsIcon, PrivacySettingsIcon } from '../../../assets/SVGs/Svg';


const SettingsSidebar = () => {


    const currPanel = useSelector((state) => state.panel.currPanel);
    const dispatch = useDispatch();

    const SettingsArray = [
        {
            name: 'Account Settings',
            Icon: <AccountSettingIcon />
        },
        {
            name:'Privacy & Security',
            Icon:<PrivacySettingsIcon />
        },
        {
            name:'Notification Settings',
            Icon:<NotificationSettingsIcon/>
        },
        {
            name:'Language',
            Icon:<LanguageSettingsIcon/>
        },
        {
            name:'Content Generation Preferences',
            Icon:<ContentGenerationPreferencesSettingsIcon/>
        },
        {
            name:'Collaboration Settings',
            Icon:<CollaborationSettingsIcon/>
        },
        {
            name:'App version And Updates',
            Icon:<AppVersionAndUpdatesSettingsIcon/>
        },
        {
            name:'Help And Support',
            Icon:<HelpAndSupportSettingsIcon/>
        }

    ]


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
                    <IoSearchCircleSharp />
                </div>
            </div>

            {/* -------------------------------- */}
            <ul className='w-full flex flex-col gap-[.5rem] font-Inter font-medium text-[16px] text-[#ffffff]'>
                {SettingsArray.map((setting, index) => {
                    return (
                        <li className={`w-full flex items-center gap-[1rem] px-[1rem] py-[.5rem] rounded-[10px] cursor-pointer ${currPanel === setting.name ? 'bg-[#06142e]' : 'bg-[#374868]'}`}
                            onClick={() => {
                                dispatch(setCurrPanel(`${setting.name}`))
                                dispatch(setcurrAccountSettingSlide(''))
                                dispatch(setcurrPrivacySettingSlide(''))
                                dispatch(setcurrHelpAndSupportOptions(''))
                                dispatch(setcurrAppVersionAndUpdatesOptions(''))
                            }}

                            key={index}
                        >

                            {setting.Icon}

                            <h1>
                                {setting.name}
                            </h1>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SettingsSidebar
