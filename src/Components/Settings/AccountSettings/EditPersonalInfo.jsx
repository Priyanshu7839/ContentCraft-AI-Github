import React from 'react';
import { SettingsSidebar } from '../../index';
import { IoMdArrowRoundBack } from "react-icons/io";

import { useDispatch, useSelector } from 'react-redux';
import { setcurrAccountSettingSlide } from '../../../Store/Slices/AccountSettingsSlice';


const EditPersonalInfo = () => {
    const dispatch = useDispatch();

    return (
        <div className=' min-h-[100vh]'>


            {/* ------------------------------------------------------------------- */}
            <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
                <div className='w-full flex items-center gap-[1rem] cursor-pointer'
                    onClick={() => dispatch(setcurrAccountSettingSlide(''))}
                >
                    <IoMdArrowRoundBack className='text-[30px]' />

                    <h1 className='font-semibold text-[26px]'>Edit Name</h1>

                </div>

                {/* ----------------------------Input Div----------------------------------- */}
                <div className='p-[2rem] w-full bg-[#374868] rounded-[10px] flex flex-col gap-[2rem]'>

                    {/* ---------------Name Input------------------- */}
                    <div className='flex justify-between gap-[2rem] '>
                        <div className='w-[50%] flex flex-col gap-[.5rem]'>
                            <h1 className='font-Inter font-medium text-[18px]'>First Name*</h1>
                            <input
                                type="text"
                                placeholder='First Name Here...'
                                className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none' />
                        </div>

                        <div className='w-[50%] flex flex-col gap-[.5rem]'>
                            <h1 className='font-Inter font-medium text-[18px]'>Last Name</h1>
                            <input type="text"
                                placeholder='Last Name Here...'
                                className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none' />
                        </div>
                    </div>

                    {/* ----------------------desc-Input-------------------------------------- */}

                    <div className='flex flex-col gap-[.5rem]'>
                        <h1 className='font-Inter font-medium text-[18px]'>Description</h1>
                        <textarea name="" id="" rows="10" placeholder='Tell Us About You...' className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none'></textarea>

                    </div>

                    {/* ------------------------New Role Input----------------------------------- */}

                    <div className='flex flex-col gap-[.5rem]'>
                        <h1 className='font-Inter font-medium text-[18px]'>Enter New Role</h1>

                        <input type="text"
                            placeholder="What's your role?"
                            className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none' />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default EditPersonalInfo
