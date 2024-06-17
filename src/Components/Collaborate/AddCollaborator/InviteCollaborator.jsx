import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";


import { setcurrAddCollaborationOptions } from '../../../Store/Slices/AddCollaboratorOptionsSlice'
import { useDispatch } from 'react-redux';

const InviteCollaborator = () => {
    const dispatch = useDispatch();
    return (
        <div className='min-h-[100vh]'>

            {/* --------------------------------------------policy field--------------------------------- */}
            <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
                <div className='w-full flex items-center gap-[1rem] cursor-pointer'
                    onClick={() => { dispatch(setcurrAddCollaborationOptions('')) }}
                >
                    <IoMdArrowRoundBack className='text-[30px]' />

                    <h1 className='font-semibold text-[26px]'>Invite Collaborator </h1>

                </div>
                {/* ---------------------------------------------------- */}

                <div className='p-[2rem] bg-[#374868] flex flex-col gap-[3rem] rounded-[10px]'>


                    <h1 className='font-Inter text-[#ffffff] text-[18px]'>Connect with new team members by sending them invitations. Enter their details below and add a
                        personalized message if you wish.</h1>


                    {/* ------------------------Name-input------------------------------- */}
                    <div className='flex justify-between gap-[2rem] '>
                        <div className='w-[50%] flex flex-col gap-[.5rem]'>
                            <h1 className='font-Inter font-medium text-[18px]'>Name*</h1>
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
                        <h1 className='font-Inter font-medium text-[18px]'>Personalized Message</h1>
                        <textarea name="" id="" rows="10"  className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none'></textarea>

                    </div>
                    {/* ----------------------------------------------------------------- */}
                    {/* ---------------------Submit button------------------------------- */}
                    <div className='w-[50%] flex'>

                        <button
                            className='w-[90%] p-[.5rem] bg-[#ff7643] rounded-[30px] font-Inter font-semibold text-[16px] text-center'>
                            Send Invitation
                        </button>

                    </div>
                    {/* ----------------------------------------------------------------- */}

                </div>
            </div>
        </div>

    )
}

export default InviteCollaborator
