import React from 'react'
import { IoMdArrowRoundBack, IoIosArrowForward } from "react-icons/io";

import { useDispatch } from 'react-redux';

const AssignTask = () => {
  return (
    <div className='min-h-[100vh]'>

            {/* --------------------------------------------Assign Task Form field--------------------------------- */}
            <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
                <div className='w-full flex items-center gap-[1rem] cursor-pointer'
                    
                >
                    <IoMdArrowRoundBack className='text-[30px]' />

                    <h1 className='font-semibold text-[26px]'>Assign Task</h1>

                </div>
                {/* ---------------------------------------------------- */}

                <div className='p-[2rem] bg-[#37486873] flex flex-col gap-[3rem] rounded-[10px]'>
                    
                    {/* ------------------------Title & Data input------------------------------------- */}
                        <div className='flex items-center gap-[2rem]'>
                            <div className='w-[50%] flex flex-col gap-[.5rem]'>
                                <label className='font-Inter font-medium text-[18px]' htmlFor="">Title</label>
                                <input type="text"
                                    className='w-full text-[#000]  p-[.5rem] rounded-[10px] border-none outline-none'
                                    placeholder='Title Here...'
                                    
                                />
                            </div>
                            <div className='w-[50%] flex flex-col gap-[.5rem]'>
                                <label className='font-Inter font-medium text-[18px]' htmlFor="">Due Date</label>
                                <input type="date"  
                                    className='w-full text-[#000]  p-[.5rem] rounded-[10px] border-none outline-none' 
                                    placeholder='Enter Due Date...'
                                />
                            </div>
                        </div>
                        {/* ----------------------------------------------------------------------- */}

                        {/* --------------------------Task Description Input------------------------------- */}
                        <div className='flex flex-col gap-[.5rem]'>
                                <h1 className='font-Inter font-medium text-[18px]'>Task Description</h1>
                                <textarea name="" id="" rows="10" placeholder="What's the task..." className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none'></textarea>

                        </div>
                        {/* ----------------------------------------------------------------------- */}
                        {/* ----------------------------------Attach files------------------------------------- */}
                        <div className='flex items-center gap-[2rem]'>
                        <div className='w-[50%] flex flex-col gap-[.5rem] '>
                                <label className='font-Inter font-medium text-[18px]' htmlFor="">Attach Files(If Any)</label>
                                
                                <div className='bg-[#374868] w-[100%] rounded-[10px] flex items-center justify-center gap-[1rem] p-[.5rem] relative'>

                                    <input type="file"  className='w-full text-[#000]  p-[.5rem] rounded-[10px] border-none outline-none absolute opacity-0 top-0' />
                                

                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 15.5V19.5C21 20.0304 20.7893 20.5391 20.4142 20.9142C20.0391 21.2893 19.5304 21.5 19 21.5H5C4.46957 21.5 3.96086 21.2893 3.58579 20.9142C3.21071 20.5391 3 20.0304 3 19.5V15.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M17 8.5L12 3.5L7 8.5" stroke="#FF7643" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 3.5V15.5" stroke="#FF7643" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <h1 className='font-Inter font-semibold text-[16px]'>Upload Files</h1>

                                </div>
                            </div>
                            {/* --------------------Note-------------- */}
                            <div className='w-[50%] flex flex-col gap-[.5rem] font-Inter'>
                                <h1 className='font-Inter font-medium text-[18px]'>Add Collaborator</h1>
                                <div className='w-full rounded-[10px] p-[.5rem] bg-[#374868] flex items-center justify-between'>
                                    Add Collaborator
                                    
                                    <IoIosArrowForward/>
                                </div>
                            </div>
                        </div>
                        {/* ----------------------------------------------- */}
                        {/* ------------------Submit Button----------------------------- */}
                        <div className='w-[50%] flex items-start justify-start '>
                            <button className='w-[80%] p-[.5rem] flex items-center justify-center bg-[#ff7643] box-border rounded-[30px] font-Inter font-semibold text-[16px] text-[#fff]'>Submit Report</button>
                        </div>
                        {/* ----------------------------------------------- */}

                </div>
            </div>
        </div>
  )
}

export default AssignTask
