import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";


import { useDispatch } from 'react-redux';
import { setcurrHelpAndSupportOptions } from '../../../Store/Slices/HelpAndSupportOptionsSlice';

const ContactSupport = () => {

    const dispatch = useDispatch();


    return (
        <div>
            <div className='min-h-[100vh]'>

                {/* --------------------------------------------Contact Support Form field--------------------------------- */}
                <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
                    <div className='w-full flex items-center gap-[1rem] cursor-pointer'
                        onClick={() => { dispatch(setcurrHelpAndSupportOptions('')) }}
                    >
                        <IoMdArrowRoundBack className='text-[30px]' />

                        <h1 className='font-semibold text-[26px]'>Support Form</h1>

                    </div>
                    {/* ---------------------------------------------------- */}

                    <div className='p-[2rem] bg-[#374868] flex flex-col gap-[3rem] rounded-[10px]'>
                             {/* ---------------Name Input------------------- */}
                    <div className='flex justify-between gap-[2rem] '>
                        <div className='w-[50%] flex flex-col gap-[.5rem]'>
                            <h1 className='font-Inter font-medium text-[18px]'>Name*</h1>
                            <input
                                type="text"
                                placeholder='Name Here...'
                                className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none' />
                        </div>
                             {/* ---------------Email Input------------------- */}

                        <div className='w-[50%] flex flex-col gap-[.5rem]'>
                            <h1 className='font-Inter font-medium text-[18px]'>Email Address</h1>
                            <input type="text"
                                placeholder='Email Here...'
                                className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none' />
                        </div>
                    </div>
                     {/* ------------------------subject Input----------------------------------- */}

                     <div className='flex flex-col gap-[.5rem]'>
                        <h1 className='font-Inter font-medium text-[18px]'>Subject</h1>

                        <input type="text"
                            placeholder="Subject..."
                            className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none' />
                    </div>

                    {/* ----------------------Detailed Message-Input-------------------------------------- */}

                    <div className='flex flex-col gap-[.5rem]'>
                        <h1 className='font-Inter font-medium text-[18px]'>Detailed Message</h1>
                        <textarea name="" id="" rows="10" placeholder="What's the matter..." className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none'></textarea>

                    </div>

                    {/* ----------------------------------Submit Button--------------------- */}
                    <div className='w-[50%] flex'>

                        <button
                        className='w-[90%] p-[.5rem] bg-[#ff7643] rounded-[30px] font-Inter font-semibold text-[16px] text-center'>
                            Submit
                        </button>

                    </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSupport
