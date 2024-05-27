import React from 'react';
import { SettingsSidebar } from '../../index';
import { IoMdArrowRoundForward } from "react-icons/io";

import { useDispatch, useSelector } from 'react-redux';
import { setcurrAccountSettingSlide } from '../../../Store/Slices/AccountSettingsSlice';


const AccountSetting = () => {

  const dispatch = useDispatch();
  const currAccountSettingSlide = useSelector((state) => state.AccountSettingsSlide.currAccountSettingSlide);

  return (
    <div className='min-h-[100vh]'>



      <div className='p-[3rem] pt-[0rem] flex flex-col gap-[3rem] '>
        {/* --------------------PersonalInformation-------------------------------------------- */}
        <div className='w-full flex flex-col bg-[#374868] p-[2rem] gap-[2rem] font-Inter text-[#ffffff] rounded-[10px] '>
          <h1 className='font-semibold text-[28px]'>Personal Information</h1>
          {/* ------------------settings----------------------- */}
          <div className='w-full flex-col'>
            <div className='w-full flex items-center justify-between cursor-pointer'
              onClick={() => dispatch(setcurrAccountSettingSlide('EditPersonalInfo'))}
            >
              <h1 className='font-medium text-[20px]'>
                Edit Personal Information
              </h1>

              <IoMdArrowRoundForward className='text-[24px]' />
            </div>
          </div>
        </div>
        {/* --------------------PersonalInformation-end---------------------------------------- */}
        {/* --------------------Accounts Control----------------------------------------------- */}
        <div className='w-full flex flex-col bg-[#374868] p-[2rem] gap-[2rem] font-Inter text-[#ffffff] rounded-[10px]'>
          <h1 className='font-semibold text-[28px]'>Account Controls</h1>
          {/* ------------------settings----------------------- */}
          <div className='w-full flex-col'>
            <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
              onClick={() => dispatch(setcurrAccountSettingSlide('ChangePassword'))}
            >
              <h1 className='font-medium text-[20px]'>
                Change Password
              </h1>

              <IoMdArrowRoundForward className='text-[24px]' />
            </div>
            {/* ------------------ */}
            <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
              onClick={() => dispatch(setcurrAccountSettingSlide('ChangeEmail'))}
            >
              <h1 className='font-medium text-[20px]'>
                Change Email Address
              </h1>

              <IoMdArrowRoundForward className='text-[24px]' />
            </div>
            {/* ------------------- */}
            <div className='w-full flex items-center justify-between py-[1rem]'>
              <h1 className='font-medium text-[20px]'>
                Log Out
              </h1>

              <IoMdArrowRoundForward className='text-[24px]' />
            </div>
          </div>
        </div>
        {/* --------------------Accounts Control-end------------------------------------------- */}
      </div>
    </div>
  )
}

export default AccountSetting
