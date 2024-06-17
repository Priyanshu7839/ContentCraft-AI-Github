import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaGoogleDrive } from "react-icons/fa6";
import { FaDropbox ,FaWordpress } from "react-icons/fa";


import { useDispatch } from 'react-redux';
import { setcurrPrivacySettingSlide } from '../../../Store/Slices/PrivacyPolicySlice';

const ThirdPartyIntegration = () => {
    const dispatch = useDispatch();
  return (
    <div className='min-h-[100vh]'>

    {/* -------------------------------------------heading and back button--------------------------------- */}
    <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
        <div className='w-full flex items-center gap-[1rem] cursor-pointer'
            onClick={() => { dispatch(setcurrPrivacySettingSlide('')) }}
        >
            <IoMdArrowRoundBack className='text-[30px]' />

            <h1 className='font-semibold text-[26px]'>Third Party Integration</h1>

        </div>
        {/* ---------------------------two factor auth ------------------------- */}
            <div className='p-[2rem] bg-[#374868] flex flex-col gap-[2rem]  rounded-[10px] font-Inter'>
                <div>
                    <h1 className='font-semibold text-[22px]'>Enhance your experience by connecting ContentCraft AI with external tools.</h1>
                    <h2 className='font-normal text-[#ff7643] text-[16px]'>Choose a service from the list above and follow the prompts to integrate seamlessly.</h2>
                </div>
                {/* -----------------------google Drive--------------------------------- */}
                <div className='flex gap-[.5rem] flex-col'>
                    <h1 className='font-semibold text-[18px]'>Seamlessly sync your AI-generated content with Google Drive for easy access and collaboration.</h1>

                    <div className='px-[1rem] py-[.5rem] bg-white  rounded-[5px] flex items-center gap-[1rem] font-semibold text-[16px] text-[#000] w-[35%]'>
                        <FaGoogleDrive  className='text-[24px]'/>
                        Connect to Google Drive
                    </div>
                </div>
                {/* -------------------------------------------------------------------- */}
                {/* -----------------------google Drive--------------------------------- */}
                <div className='flex gap-[.5rem] flex-col'>
                    <h1 className='font-semibold text-[18px]'>Connect AI Content Catalyst with Dropbox to store and organize your generated content in the cloud.</h1>

                    <div className='px-[1rem] py-[.5rem] bg-white w-[35%] rounded-[5px] flex items-center gap-[1rem] font-semibold text-[16px] text-[#000]'>
                        <FaDropbox className='text-[24px]'/>
                        Connect to Dropbox
                    </div>
                </div>
                {/* -------------------------------------------------------------------- */}
                {/* -----------------------google Drive--------------------------------- */}
                <div className='flex gap-[.5rem] flex-col'>
                    <h1 className='font-semibold text-[18px]'>Integrate with WordPress to directly publish your AI-generated articles and blog posts.</h1>

                    <div className='px-[1rem] py-[.5rem] bg-white w-[35%]  rounded-[5px] flex items-center gap-[1rem] font-semibold text-[16px] text-[#000]'>
                        <FaWordpress className='text-[24px]' />
                        Connect to WordPress
                    </div>
                </div>
                {/* -------------------------------------------------------------------- */}
            </div>
        </div>

    </div>
  )
}

export default ThirdPartyIntegration
