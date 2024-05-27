import React, { useState } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";


import { useDispatch } from 'react-redux';
import { setcurrPrivacySettingSlide } from '../../../Store/Slices/PrivacyPolicySlice';

const Faq = () => {
  const [panel,setPanel] = useState(false);
  return (
    <div className=' min-h-[100vh]'>

    {/* --------------------------------------------Faq--------------------------------- */}
    <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
        <div className='w-full flex items-center gap-[1rem] cursor-pointer'
            onClick={()=>{dispatch(setcurrPrivacySettingSlide(''))}}
        >
            <IoMdArrowRoundBack className='text-[30px]' />

            <h1 className='font-semibold text-[26px]'>FAQs</h1>

        </div>
        {/* ---------------------------------------------------- */}

        <div className='p-[2rem] bg-[#374868] flex flex-col gap-[2rem] rounded-[10px] cursor-pointer'
        onClick={()=>{
          setPanel(!panel)
        }}
        >

          <div className='flex items-center justify-between w-full'>
            <h1 className='font-Inter font-normal text-[20px]'>How do I create a new project?</h1>

            <FaPlus className='text-[24px]'/>
          </div>

          
          {
            panel  && 

              <>
                <p>
                  To create a new project, go to the main screen, click on the "+" button, and follow the prompts to set 
                  up your project details
                </p>
              </>
          }
          
        </div>
    </div>
</div>
  )
}

export default Faq


