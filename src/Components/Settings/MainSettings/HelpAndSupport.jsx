import React from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import { IoMdArrowRoundForward } from "react-icons/io";
import { setcurrHelpAndSupportOptions } from '../../../Store/Slices/HelpAndSupportOptionsSlice';


const HelpAndSupport = () => {
    const dispatch = useDispatch();
    const currHelpAndSupportOptions = useSelector((state)=>state.HelpAndSupportOptions.currHelpAndSupportOptions);
    

    const SupportOptionsArray = [
        'FAQs','Contact Support','Knowledge Base'
    ]

    const SupportCategoriesArray = [
        'Technical Issues','Account Assistance','Content Generation'
    ]

    return (
        <div className=' min-h-[100vh]'>



            <div className='p-[3rem] flex flex-col gap-[3rem] '>
                {/* ------------------------------Supprt Option Settings Heading---------------------------------- */}
                <div className='w-full flex flex-col bg-[#374868] p-[2rem] gap-[2rem] font-Inter text-[#ffffff] rounded-[10px] '>
                    <h1 className='font-semibold text-[28px]'>Support Options</h1>

                    {/* ------------------Support Option Settings----------------------- */}
                    <div className='w-full flex-col'>
                        {/* ------------------------- FAQs ----------------------*/}
                            {
                                SupportOptionsArray.map((opt,index)=>{
                                    return(
                                        <div className={`w-full flex items-center justify-between py-[1rem] cursor-pointer ${index !== SupportOptionsArray.length - 1 && ' border-b-[2px] border-[#06142E]'}`}
                                        key={index}
                                        onClick={()=>{dispatch(setcurrHelpAndSupportOptions(`${opt}`))}}
                                        >
                                            <h1 className='font-medium text-[20px]'>
                                                {opt}
                                            </h1>
                
                                            <IoMdArrowRoundForward className='text-[24px]' />
                                        </div>      
                                    )
                                })
                            }
                        {/* ---------------------------------------------------- ----------------*/}
                    </div>

                </div>
                {/* ------------------------------Support categories Settings Heading---------------------------------- */}
                <div className='w-full flex flex-col bg-[#374868] p-[2rem] gap-[2rem] font-Inter text-[#ffffff] rounded-[10px] '>
                    <h1 className='font-semibold text-[28px]'>Support Categories</h1>

                    {/* ------------------Support Option Settings----------------------- */}
                    <div className='w-full flex-col'>
                        {/* ------------------------- Technical Issues ----------------------*/}
                            {
                                SupportCategoriesArray.map((category,index)=>{
                                    return(
                                        <div className={`w-full flex items-center justify-between py-[1rem] cursor-pointer ${index !== SupportOptionsArray.length - 1 && ' border-b-[2px] border-[#06142E]'}`}
                                        key={index}
                                        onClick={()=>{dispatch(setcurrHelpAndSupportOptions(`${category}`))}}
                                        >
                                            <h1 className='font-medium text-[20px]'>
                                                    {category}
                                            </h1>
                
                                            <IoMdArrowRoundForward className='text-[24px]' />
                                        </div> 
                                    )
                                })
                            }
                        {/* ---------------------------------------------------- ----------------*/}
                    </div>

                </div>
                {/* ---------------------------------------------Support categories End-------------------- */}
                {/* ----------------------------------------------Feedback------------------------------------- */}
                {/* <div className='w-full flex items-center justify-between py-[1rem] px-[2rem] border-b-[2px] border-[#06142E] cursor-pointer bg-[#374868] text-[#ffffff] rounded-[10px]'
                onClick={()=>{dispatch(setcurrHelpAndSupportOptions('feedback'))}}
                >
                    <h1 className='font-Inter font-medium text-[20px]'>
                        FeedBack
                    </h1>

                    <IoMdArrowRoundForward className='text-[24px]' />
                </div> */}
                {/* ----------------------------------------------Feedback-End--------------------------------- */}
                
            </div>
        </div>
    )
}

export default HelpAndSupport
