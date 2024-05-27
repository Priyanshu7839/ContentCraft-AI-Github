import React from 'react';
import { IoMdArrowRoundForward } from "react-icons/io";

import { setcurrPrivacySettingSlide } from '../../../Store/Slices/PrivacyPolicySlice';
import { useDispatch, } from 'react-redux';

const AppVersionAndUpdates = () => {
    return (
        <div className=' min-h-[100vh]'>
            <div className='p-[3rem] flex flex-col gap-[3rem]  font-Inter text-[#ffffff] '>
                {/* -----------------Current-Version---------------------- */}
                <div className='p-[2rem] bg-[#374868] rounded-[10px]'>
                    <h1 className='font-medium text-[20px]'>
                        Current Version
                    </h1>
                    <h3 className='font-semibold text-[#ff7643] text-[16px]'>
                        -v2.0.0
                    </h3>
                </div>
                {/* ------------------------------------------------------ */}
                {/* -----------------Release Notes---------------------- */}
                <div className='p-[2rem] bg-[#374868] flex items-center justify-between rounded-[10px]'>
                    <h1 className='font-medium text-[20px]'>
                        Release Notes
                    </h1>

                    <IoMdArrowRoundForward className='text-[24px]' />
                </div>
                {/* ------------------------------------------------------ */}
                {/* -----------------Check for updates---------------------- */}
                <div className='p-[2rem] bg-[#374868] flex items-center justify-between rounded-[10px]'>
                    <h1 className='font-medium text-[20px]'>
                        Check for updates
                    </h1>

                    <IoMdArrowRoundForward className='text-[24px]' />
                </div>
                {/* ------------------------------------------------------ */}
                {/* -----------------Automatic Updates---------------------- */}
                <div className='p-[2rem] bg-[#374868] flex items-center justify-between rounded-[10px]'>
                    <h1 className='font-medium text-[20px]'>
                        Automatic Updates
                    </h1>
                    <button className='bg-[#ff75439a] w-[50px] h-[25px] relative rounded-full'>
                        <span className='w-[25px] h-[25px] rounded-full  bg-white absolute top-0 left-0'></span>
                    </button>
                </div>
                {/* ------------------------------------------------------ */}
                {/* -----------------Feedback---------------------- */}
                <div className='p-[2rem] bg-[#374868] flex items-center justify-between rounded-[10px]'>
                    <h1 className='font-medium text-[20px]'>
                        Feedback
                    </h1>

                    <IoMdArrowRoundForward className='text-[24px]' />
                </div>
                {/* ------------------------------------------------------ */}


            </div>
        </div>
    )
}

export default AppVersionAndUpdates
