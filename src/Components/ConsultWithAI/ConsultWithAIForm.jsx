import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";


const ConsultWithAIForm = () => {


    const ConsultationType = ['Content Strategy', 'Writing Asssistance', 'SEO Consultation'];
    const [consultationTypeOptionsShow, setconsultationTypeOptionsShow] = useState(false);
    const [ConsultationTypeOptions, setConsultationTypeOptions] = useState('Select')



    return (
        <div className='min-h-[100vh]'>

            <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>

                {/* ---------------------------------------------------- */}

                <div className='p-[2rem] bg-[#1d2d4a] flex flex-col gap-[2rem] rounded-[10px]'>
                    {/* --------Consultation Type and File Upload----------------------- */}
                    <div className='flex'>
                        {/* -------------Consultation Type ----------------------- */}

                        <div className='w-[50%] flex flex-col gap-[1rem]'>
                            <h1 className='font-Inter font-semibold text-[20px]'>Consultation Type</h1>
                            <p className='font-Inter text-[#ff7643] text-[16px] font-semibold'>Select the type of consultation you need.</p>
                            {/* ---------consultation type select div-------------- */}

                            <div className='px-[1rem] py-[.5rem] bg-[#374868] w-[80%] rounded-[5px] flex items-center justify-between transition-all duration-300 '
                                onClick={() => { setconsultationTypeOptionsShow(!consultationTypeOptionsShow) }}
                            >
                                <h1 className='font-Inter font-normal text-[16px]'>{ConsultationTypeOptions}</h1>

                                <IoIosArrowDown className={`transition-all duration-300 ${consultationTypeOptionsShow ? 'rotate-180' : ''}`} />


                            </div>
                            {/* ---------consultation type select div end-------------- */}


                            <div className={` bg-[#374868] w-[80%] rounded-[5px] transition-all duration-300  overflow-hidden font-Inter font-normal text-[16px] ${consultationTypeOptionsShow ? 'h-fit' : 'h-[0px]'}`}

                            >
                                {/* ------------------------- */}
                                {
                                    ConsultationType.map((tone, index) => {
                                        return (
                                            <div key={index} className='px-[1rem] py-[.5rem] flex items-center justify-between'
                                                onClick={() => {
                                                    setConsultationTypeOptions(`${tone}`)
                                                    setconsultationTypeOptionsShow(!consultationTypeOptionsShow)
                                                }}
                                            >
                                                <h1>{tone}</h1>

                                                <div className='rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center relative'>
                                                    <div className={`rounded-full w-[10px] h-[10px] relative z-1 ${ConsultationTypeOptions === `${tone}` ? 'bg-[#ff7643]' : 'bg-white'}`}></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                {/* ---------------------------- */}
                            </div>
                        </div>
                        {/* -------------Consultation Type end-------------------- */}
                        {/* -------------File Upload Div-------------------------- */}

                        <div className='w-[50%] flex flex-col gap-[1rem]'>
                            <h1 className='font-Inter font-semibold text-[20px]'>File Upload</h1>
                            <p className='font-Inter text-[#ff7643] text-[16px] font-semibold'>Upload relevant files or documents</p>



                            {/* ---------Upload Div---------------------- */}
                            <div className=' w-[80%] rounded-[5px] flex items-center justify-center gap-[1rem] p-[.5rem] relative bg-[#374868]'>

                                <input type="file" className='w-full text-[#000]  p-[.5rem] rounded-[10px] border-none outline-none absolute opacity-0 top-0' />


                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 15.5V19.5C21 20.0304 20.7893 20.5391 20.4142 20.9142C20.0391 21.2893 19.5304 21.5 19 21.5H5C4.46957 21.5 3.96086 21.2893 3.58579 20.9142C3.21071 20.5391 3 20.0304 3 19.5V15.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17 8.5L12 3.5L7 8.5" stroke="#FF7643" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 3.5V15.5" stroke="#FF7643" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h1 className='font-Inter font-medium text-[16px]'>Upload Files</h1>

                            </div>
                            {/* ---------Upload Div-End------------------ */}


                        </div>
                        {/* -------------File Upload Div-End---------------------- */}

                    </div>
                    {/* --------Consultation Type and File Upload-End------------------- */}

                    {/* -------------Consultation Details-------------------------------- */}
                    <div>
                        {/* -------------Text describe Div-------------------------- */}

                        <div className='w-[100%] flex flex-col gap-[1rem]'>
                            <h1 className='font-Inter font-semibold text-[20px]'>Consultation Details</h1>
                            <p className='font-Inter text-[#ff7643] text-[16px] font-semibold'>Provide details about your consultation request</p>

                            <textarea name="" id="" rows="10" placeholder='Describe Here...' className='w-[100%] text-[#000] p-[.5rem] rounded-[5px] border-none outline-none'></textarea>


                        </div>
                        {/* -------------Text describe Div-End---------------------- */}
                    </div>
                    {/* -------------Consultation Details-End---------------------------- */}

                    {/* -----------------Submit Button And Disclaimer--------------------- */}
                    <div className='flex gap-[1rem] justify-between'>
                        <div className='w-[50%] flex items-end justify-end'>
                            <button className='w-[100%] p-[.5rem] flex items-center justify-center bg-[#ff7643] box-border rounded-[30px] font-Inter font-semibold text-[16px] text-[#fff]'>Start Consulting</button>
                        </div>
                        {/* ------------------------Diclaimer--------------------- */}
                        <div className='w-[40%] flex'>
                            <p className='text-[12px] text-[#ff7643] text-justify'>Note: Get personalized insights and recommendations from our
                            AI. Fill in the details above to start your consultation.</p>

                        </div>

                    </div>
                    {/* -----------------Submit Button And Disclaimer-End----------------- */}


                </div>
                {/* ------------------------------------------------- */}
            </div>
        </div>
    )
}

export default ConsultWithAIForm
