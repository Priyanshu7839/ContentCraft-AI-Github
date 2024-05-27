import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";


import { useDispatch } from 'react-redux';
import { setcurrPrivacySettingSlide } from '../../../Store/Slices/PrivacyPolicySlice';

const PasswordPolicies = () => {
    const dispatch = useDispatch();
    
    return (
        <div className='min-h-[100vh]'>

            {/* --------------------------------------------Heading field--------------------------------- */}
            <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
                <div className='w-full flex items-center gap-[1rem] cursor-pointer'
                    onClick={()=>{dispatch(setcurrPrivacySettingSlide(''))}}
                >
                    <IoMdArrowRoundBack className='text-[30px]' />

                    <h1 className='font-semibold text-[26px]'>Password Policies</h1>

                </div>
                {/* -------------------------------Password Policis--------------------- */}

                <div className='p-[2rem] px-[4rem] bg-[#374868] flex flex-col gap-[3rem] rounded-[10px]'>
                   <ul className='list-disc font-medium text-[#ffffff] text-[20px]'>
                        <li>
                            Create a strong password with a mix of uppercase, lowercase, numbers, and special characters.
                        </li>
                        <li>
                            Avoid using easily guessable information.
                        </li>
                   </ul>

                </div>
            </div>
        </div>
    )
}

export default PasswordPolicies
