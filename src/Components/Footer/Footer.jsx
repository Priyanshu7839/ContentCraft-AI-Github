import React from 'react';
import { FaInstagram,FaFacebookF,FaArrowRight} from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer w-full bg-[#374868] p-[2rem] '>
        <div className='w-full flex h-[100%] items-start justify-between  border-b-[2 px] border-white pb-[3rem]'>

            {/* --------------------------------------------------------------------------------------------------------------------- */}
            <div className='w-[60%] h-[100%] flex flex-col items-start justify-between gap-[7rem]  '>

                {/* --------------    logo      -------------------- */}
                <div className='flex items-center gap-[1rem]'>
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="5" y1="20.5" x2="34" y2="20.5" stroke="#FF7643"/>
                    <path d="M26 32.5H39L50 40H75" stroke="#FF7643"/>
                    <path d="M26 58.5H38.5L49.5 51L74.5 51" stroke="#FF7643"/>
                    <line x1="5" y1="45.5" x2="30" y2="45.5" stroke="#FF7643"/>
                    <line x1="58" y1="29.5" x2="75" y2="29.5" stroke="#FF7643"/>
                    <rect x="34.5" y="16.5" width="8" height="8" rx="4" stroke="#FF7643"/>
                    <rect x="49.5" y="25.5" width="8" height="8" rx="4" stroke="#FF7643"/>
                    <rect x="17.5" y="28.5" width="8" height="8" rx="4" stroke="#FF7643"/>
                    <rect x="30.5" y="41.5" width="8" height="8" rx="4" stroke="#FF7643"/>
                    <rect x="17.5" y="54.5" width="8" height="8" rx="4" stroke="#FF7643"/>
                    </svg>

                    <h1 className='font-semibold font-Inter text-[24px] text-[#FFFFFF]'>ContentCraft AI</h1>
                </div>
                {/* -----------------Logo end---------------------- */}

                {/* ------------Social Media Icons & newsletter--------- */}
                <div className='w-full flex flex-col gap-[3rem]'> 
                    {/* -----------Social Media Icons----------------- */}
                    <div className='flex flex-col items-start gap-[1rem]'>
                        <h1 className='font-normal text-[16px] font-Inter text-[#FFFFFF]'>Connect With Us</h1>

                        <div className='flex items-center gap-[1rem]'>
                            <FaFacebookF className='text-[#FFFFFF] text-[18px]'/>
                            <FaInstagram className='text-[#FFFFFF] text-[18px]'/>
                            <FaXTwitter className='text-[#FFFFFF] text-[18px]'/>
                        </div>
                    </div>
                    {/* -----------Social Media Icons end----------------- */}


                    {/* -------------------NewsLetter----------------- */}
                    <div className='w-full'>
                        <h1 className='font-normal text-[12px] font-Inter text-[#FFFFFF]'>Subscribe to Our Newletter</h1>
                        <div className='w-full flex items-center gap-[1rem]'>
                           <div className='w-[60%] relative'>
                           <input type="text"
                             placeholder='Enter Your Email Address'
                             className='rounded-[20px] py-[.4rem]  px-[2rem] pl-[4rem] w-full border-[1px] border-white bg-transparent outline-none text-[#FFFFFF] placeholder:font-extralight placeholder:font-Inter '
                             />

                           <div className='absolute flex items-center   top-[7px] left-2  border-r-[1px] border-white  w-[50px]'>  <IoMailOutline className=' text-[24px] text-[#FFFFFF]'/></div>


                           </div>
                            <button className='rounded-full bg-[#FF7643] p-[.7rem] border-white border-[.5px]'>
                                <FaArrowRight className='font-normal text-[#FFFFFF]'/>
                            </button>
                        </div>
                    </div>
                    {/* -------------------NewsLetter End----------------- */}

                </div>
                {/* ------------Social Media Icons & newsletter end--------- */}
                
            </div>
            {/* --------------------------------------------------------------------------------------------------------------------- */}



            {/* --------------------------------------------------------------------------------------------------------------------- */}
            <div className='w-[40%] h-[100%] flex  justify-evenly  '>
                
                {/* --------------------------------------------------------------------------------------------------------------------- */}
                <ul className='text-[#FFFFFF] flex flex-col gap-[1rem] font-Inter'>
                    <h1 className='font-semibold text-[20px]'>ContentCraft AI</h1>
                    <ul className='flex flex-col gap-[.5rem] text-[16px] font-medium'>
                        <li>Home</li>
                        <li>Contact Us</li>
                        <li>Services</li>
                        <li>Share</li>
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>About</li>
                    </ul>
                </ul>
                {/* --------------------------------------------------------------------------------------------------------------------- */}

                {/* --------------------------------------------------------------------------------------------------------------------- */}
                <ul className='text-[#FFFFFF] flex flex-col gap-[1rem] font-Inter'>
                    <h1 className='font-semibold text-[20px]'>Services</h1>

                    <ul className='flex flex-col gap-[.5rem] text-[16px] font-medium'>
                        <li>AI content Generation</li>
                        <li>Collaboration</li>
                        <li>AI Custom Modelling</li>
                        <li>AI consultant</li>
                    </ul>
                </ul>
                {/* --------------------------------------------------------------------------------------------------------------------- */}


            </div>
            {/* --------------------------------------------------------------------------------------------------------------------- */}

        </div>

        <h1 className='text-center py-[1rem] text-[#FFFFFF] font-Inter font-semibold text-[16px] '> &#169; All Rights Reserved</h1>
    </div>  
  )
}

export default Footer
