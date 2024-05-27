import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaLock } from "react-icons/fa";

import { useDispatch } from 'react-redux';
import { setcurrPrivacySettingSlide } from '../../../Store/Slices/PrivacyPolicySlice';


const LinkToPrivacyPolicy = () => {

    const dispatch = useDispatch();
    
    return (
        <div className='min-h-[100vh]'>

            {/* --------------------------------------------policy field--------------------------------- */}
            <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
                <div className='w-full flex items-center gap-[1rem] cursor-pointer'
                    onClick={()=>{dispatch(setcurrPrivacySettingSlide(''))}}
                >
                    <IoMdArrowRoundBack className='text-[30px]' />

                    <h1 className='font-semibold text-[26px]'>Privacy Policy</h1>

                </div>
                {/* ---------------------------------------------------- */}

                <div className='p-[2rem] bg-[#374868] flex flex-col gap-[3rem] rounded-[10px]'>
                    <div className='flex flex-col gap-[1rem]'>
                       <div className='flex items-center gap-[1rem] font-Inter text-[#ff7643] font-semibold text-[36px]'>
                            <FaLock/>
                            <h1>Privacy Policy</h1>
                       </div>

                        <p className='font-Inter font-medium text-[18px]'>Our commitment to your privacy is paramount. We value your trust and want to be
                            transparent about how we handle your data. Below is a brief summary of our privacy
                            practices.</p>
                    </div>


                    <a className='font-Inter text-[16px] font-medium underline'  href="">Read our full Privacy Policy here.</a>

                    <div className='flex flex-col gap-[.5rem] font-Inter '>
                        <h1 className='font-semibold text-[18px] text-[#ff7643]'>Note:-</h1>
                        <h2 className='text-[16px] font-normal text-[#fff]'>This summary is for quick reference. For detailed information, please refer to our complete Privacy Policy.</h2>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LinkToPrivacyPolicy
