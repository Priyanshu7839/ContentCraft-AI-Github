import React from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import { IoMdArrowRoundForward } from "react-icons/io";
import { setcurrHelpAndSupportOptions } from '../../../Store/Slices/HelpAndSupportOptionsSlice';


const HelpAndSupport = () => {
    const dispatch = useDispatch();
    const currHelpAndSupportOptions = useSelector((state)=>state.HelpAndSupportOptions.currHelpAndSupportOptions);
    console.log(currHelpAndSupportOptions);
    return (
        <div className=' min-h-[100vh]'>



            <div className='p-[3rem] flex flex-col gap-[3rem] '>
                {/* ------------------------------Supprt Option Settings Heading---------------------------------- */}
                <div className='w-full flex flex-col bg-[#374868] p-[2rem] gap-[2rem] font-Inter text-[#ffffff] rounded-[10px] '>
                    <h1 className='font-semibold text-[28px]'>Support Options</h1>

                    {/* ------------------Support Option Settings----------------------- */}
                    <div className='w-full flex-col'>
                        {/* ------------------------- FAQs ----------------------*/}
                        <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                        onClick={()=>{dispatch(setcurrHelpAndSupportOptions('faq'))}}
                        >
                            <h1 className='font-medium text-[20px]'>
                                FAQs
                            </h1>

                            <IoMdArrowRoundForward className='text-[24px]' />
                        </div>
                        {/* ---------------------------------------------------- ----------------*/}
                        {/* -------------------------Contact Support ----------------------*/}
                        <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                        onClick={()=>{dispatch(setcurrHelpAndSupportOptions('contactSupport'))}}
                        >
                            <h1 className='font-medium text-[20px]'>
                                Contact Support
                            </h1>

                            <IoMdArrowRoundForward className='text-[24px]' />
                        </div>
                        {/* ---------------------------------------------------- ----------------*/}
                        {/* -------------------------Knowledge Base ----------------------*/}
                        <div className='w-full flex items-center justify-between py-[1rem]  cursor-pointer'
                        onClick={()=>{dispatch(setcurrHelpAndSupportOptions('knowledgeBase'))}}
                        >
                            <h1 className='font-medium text-[20px]'>
                                Knowledge Base
                            </h1>

                            <IoMdArrowRoundForward className='text-[24px]' />
                        </div>
                        {/* ---------------------------------------------------- ----------------*/}
                    </div>

                </div>
                {/* ------------------------------Support categories Settings Heading---------------------------------- */}
                <div className='w-full flex flex-col bg-[#374868] p-[2rem] gap-[2rem] font-Inter text-[#ffffff] rounded-[10px] '>
                    <h1 className='font-semibold text-[28px]'>Support Categories</h1>

                    {/* ------------------Support Option Settings----------------------- */}
                    <div className='w-full flex-col'>
                        {/* ------------------------- Technical Issues ----------------------*/}
                        <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                        onClick={()=>{dispatch(setcurrHelpAndSupportOptions('technicalIssues'))}}
                        >
                            <h1 className='font-medium text-[20px]'>
                                Technical Issues
                            </h1>

                            <IoMdArrowRoundForward className='text-[24px]' />
                        </div>
                        {/* ---------------------------------------------------- ----------------*/}
                        {/* -------------------------Account Assistance ----------------------*/}
                        <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                        onClick={()=>{dispatch(setcurrHelpAndSupportOptions('accountAssistance'))}}
                        >
                            <h1 className='font-medium text-[20px]'>
                                Account Assistance
                            </h1>

                            <IoMdArrowRoundForward className='text-[24px]' />
                        </div>
                        {/* ---------------------------------------------------- ----------------*/}
                        {/* -------------------------Content Generation ----------------------*/}
                        <div className='w-full flex items-center justify-between py-[1rem]  cursor-pointer'
                        onClick={()=>{dispatch(setcurrHelpAndSupportOptions('contentGeneration'))}}
                        >
                            <h1 className='font-medium text-[20px]'>
                                Content Generation
                            </h1>

                            <IoMdArrowRoundForward className='text-[24px]' />
                        </div>
                        {/* ---------------------------------------------------- ----------------*/}
                    </div>

                </div>
                {/* ---------------------------------------------Support categories End-------------------- */}
                {/* ----------------------------------------------Feedback------------------------------------- */}
                <div className='w-full flex items-center justify-between py-[1rem] px-[2rem] border-b-[2px] border-[#06142E] cursor-pointer bg-[#374868] text-[#ffffff] rounded-[10px]'
                onClick={()=>{dispatch(setcurrHelpAndSupportOptions('feedback'))}}
                >
                    <h1 className='font-Inter font-medium text-[20px]'>
                        FeedBack
                    </h1>

                    <IoMdArrowRoundForward className='text-[24px]' />
                </div>
                {/* ----------------------------------------------Feedback-End--------------------------------- */}
                
            </div>
        </div>
    )
}

export default HelpAndSupport
