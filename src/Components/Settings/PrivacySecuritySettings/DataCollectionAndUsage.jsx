import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";


import { useDispatch } from 'react-redux';
import { setcurrPrivacySettingSlide } from '../../../Store/Slices/PrivacyPolicySlice';


const DataCollectionAndUsage = () => {
    
    const dispatch = useDispatch();


  return (
    <div className='min-h-[100vh]'>

    {/* -------------------------------------------Heading field--------------------------------- */}
    <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
        <div className='w-full flex items-center gap-[1rem] cursor-pointer'
            onClick={()=>{dispatch(setcurrPrivacySettingSlide(''))}}
        >
            <IoMdArrowRoundBack className='text-[30px]' />

            <h1 className='font-semibold text-[26px]'>Data Collection And Usage</h1>

        </div>
        {/* ---------------------------Data collection div------------------------- */}

        <div className='p-[2rem] bg-[#374868] flex flex-col gap-[3rem] rounded-[10px]'>

                {/* --------------collection Information--------------------------------------------------- */}
                <div className='font-Inter text-[#ffffff] flex flex-col gap-[1rem]'>
                    <div>
                        <h1 className='font-semibold text-[32px]'>Data Collection Information</h1>
                        <p className='font-normal text-[#ff7643] text-[16px]'>We prioritize your privacy and collect only essential data to improve your experience. Here are the specific types of data we collect:</p>
                    </div>

                    <div className='flex flex-col gap-[1rem]'>
                        <div>
                            <h2 className='text-[22px] font-semibold'>1.User Preferences:-</h2>
                            <p className='text-[16px] font-normal'>To personalize your interactions with the app based on your preferences and settings.</p>
                        </div>
                        <div>
                            <h2 className='text-[22px] font-semibold'>2.User Patterns:- </h2>
                            <p className='text-[16px] font-normal'>To understand how you navigate and use the app, helping us enhance features and optimize performance.</p>
                        </div>
                    </div>
                </div>
                {/* --------------------------Usage Information--------------------------------------------- */}

                <div className='font-Inter text-[#ffffff] flex flex-col gap-[1rem]'>
                    <div>
                        <h1 className='font-semibold text-[32px]'>Usage Information</h1>
                        <p className='font-normal text-[#ff7643] text-[16px]'>The collected data is utilized for the following purposes:</p>
                    </div>

                    <div className='flex flex-col gap-[1rem]'>
                        <div>
                            <h2 className='text-[22px] font-semibold'>1.Personalization :-</h2>
                            <p className='text-[16px] font-normal'>Tailoring content suggestions, recommendations, and user interface elements to suit your preferences.</p>
                        </div>
                        <div>
                            <h2 className='text-[22px] font-semibold'>2.Improving Features :- </h2>
                            <p className='text-[16px] font-normal'>Analyzing usage patterns to identify areas for enhancement, ensuring a seamless and intuitive experience.</p>
                        </div>
                            <p>For more Details ,refer to our <a href="" className='font-semibold text-[20px] underline'>Privacy Policy</a></p>
                    </div>
                </div>
                {/* ------------------------------------Note------------------------------------------------------ */}

                    <div className='font-Inter text-[#ffffff]'>
                        <h1 className='text-[20px] text-[#ff7643] font-semibold'>Note:-</h1>
                        <p className='font-extralight text-[16px]'>This summary provides a quick overview. For detailed information, please consult our complete Privacy Policy.</p>
                    </div>

                {/* ---------------------------------------------------------------------------------------------- */}
        </div>
    </div>
</div>
  )
}

export default DataCollectionAndUsage
