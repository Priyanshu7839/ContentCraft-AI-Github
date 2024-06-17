import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaLock } from "react-icons/fa";

import { useDispatch } from 'react-redux';
import { setcurrAppVersionAndUpdatesOptions } from '../../../Store/Slices/AppVersionAndUpdatesSettingsOptionsSlice';


const Feedback = () => {
    const dispatch = useDispatch();
  return (
    <div className='min-h-[100vh]'>

    {/* --------------------------------------------Feedback field--------------------------------- */}
    <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
        <div className='w-full flex items-center gap-[1rem] cursor-pointer'
            onClick={()=>{dispatch(setcurrAppVersionAndUpdatesOptions(''))}}
        >
            <IoMdArrowRoundBack className='text-[30px]' />

            <h1 className='font-semibold text-[26px]'>Feedback Form</h1>

        </div>
        {/* -------------------------------Input--------------------- */}

        <div className='p-[2rem] bg-[#374868] flex flex-col gap-[3rem] rounded-[10px]'>

            {/* ------------------------Name-input------------------------------- */}
            <div className='flex justify-between gap-[2rem] '>
                        <div className='w-[50%] flex flex-col gap-[.5rem]'>
                            <h1 className='font-Inter font-medium text-[18px]'>First Name*</h1>
                            <input
                                type="text"
                                placeholder='Name Here...'
                                className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none' />
                        </div>

                        <div className='w-[50%] flex flex-col gap-[.5rem]'>
                            <h1 className='font-Inter font-medium text-[18px]'>Email Address</h1>
                            <input type="text"
                                placeholder='Email Here...'
                                className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none' />
                        </div>
            </div>
            {/* ----------------------------------------------------------------- */}

            {/* ---------------------------Detailed Message---------------------- */}
            <div className='flex flex-col gap-[.5rem]'>
                        <h1 className='font-Inter font-medium text-[18px]'>Detailed Message</h1>
                        <textarea name="" id="" rows="10" placeholder='Tell Us Your Expereince...' className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none'></textarea>

            </div>
            {/* ----------------------------------------------------------------- */}
            {/* ---------------------Submit button------------------------------- */}
            <div className='w-[50%] flex'>

                <button
                className='w-[90%] p-[.5rem] bg-[#ff7643] rounded-[30px] font-Inter font-semibold text-[16px] text-center'>
                    Submit
                </button>

            </div>
            {/* ----------------------------------------------------------------- */}

        </div>
    </div>
</div>
  )
}

export default Feedback
