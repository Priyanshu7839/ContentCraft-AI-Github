import React, { useState } from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { FaGooglePlay,FaApple  } from "react-icons/fa";
import { LandingPageImg1,LandingPageImg2,LandingPageImg3,LandingPageImg4 } from '../../assets';


const LandingPage = () => {
    const AIButtons = ['AI Content Creation','Collaboration','AI Consultation','AI custom Model'];
    const [activeButtons,setActiveButtons] = useState(0);

  return (
    <div className="landingPage bg-[#06142E] overflow-hidden">
        

        {/* ---------------------------------------hero-Section---------------------------------------------------------- */}
       <div className='min-h-[800px] relative  flex flex-col gap-[1rem] items-start justify-center px-[4rem] font-Inter border-b-[1px] border-[#374868]'>


            {/* --------------------------straightLine--------------------------------------------- */}
                <div className='flex items-center absolute left-0 top-20'>
                    <svg width="1016" height="2" viewBox="0 0 1016 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="1016" y2="1" stroke="#FF7643" stroke-width="2"/>
                    </svg>

                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="48" height="48" rx="24" stroke="#FF7643" stroke-width="2"/>
                    </svg>
                </div>
            {/* --------------------------straightLineEnd--------------------------------------------- */}

            {/* --------------------------BendLine--------------------------------------------- */}
                <div className='flex items-center absolute top-[15%] right-[-70px] '>

                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="48" height="48" rx="24" stroke="#FF7643" stroke-width="2"/>
                    </svg>
                    <svg className='relative top-[60px]' width="1259" height="127" viewBox="0 0 1259 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 1.5H714.881L893.601 125.5H1264.1" stroke="#FF7643" stroke-width="2"/>
                    </svg>



                </div>
            {/* --------------------------BendedLineEnd--------------------------------------------- */}
            

            <h6 className='font-semibold text-[16px] text-[#FFFFFF] '>Research</h6>
            <h1 className='font-semibold text-[90px] text-[#FFFFFF]  leading-[90px]'>CONTENTCRAFT AI</h1>
            <h3 className='text-[20px] text-[#FFFFFF] w-[50%] font-semibold uppercase'>Elevate Your Content With
             <span className='text-[#FF7643]'> AI</span>.
              <span className='font-normal capitalize'> Unlock limitless possibilities in Content Creation & Consulting.</span>
              </h3>
            {/* ---------------- */}
            <div className='flex items-center justify-center gap-[.5rem] border-white border-[1px] rounded-[5px] px-[.5rem] cursor-pointer'>
            <h4 className='font-normal text-[16px] leading-[29px] text-[#FFFFFF]'>Try CONTENTCRAFT-AI</h4>
            <FiArrowUpRight/>
            </div>
            {/* ---------------- */}

            {/* --------------------------straightLine--------------------------------------------- */}
            <div className='flex items-center relative left-[-70px]'>
                    <svg width="1016" height="2" viewBox="0 0 1016 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="1016" y2="1" stroke="#FF7643" stroke-width="2"/>
                    </svg>

                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="48" height="48" rx="24" stroke="#FF7643" stroke-width="2"/>
                    </svg>
                </div>
            {/* --------------------------straightLineEnd--------------------------------------------- */}


            {/* ---------------------------------BendLine------------------------ */}
            <div className="flex items-center  absolute right-[-100px] bottom-20">

                
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="48" height="48" rx="24" stroke="#FF7643" stroke-width="2"/>
                </svg>


                <svg className='relative top-[-80px]' width="846" height="167" viewBox="0 0 846 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 165.485H331.981L467.883 1.5H846" stroke="#FF7643" stroke-width="2"/>
                </svg>

            </div>
            {/* ---------------------------------BendLineEnd------------------------ */}


            {/* ---------------- */}
            <div className='flex gap-[2rem]'>
                <div className='flex items-center gap-[1rem] border-[1px] p-[.5rem] pb-[1rem] border-white rounded-[10px] text-[#FFFFFF] bg-[black] cursor-pointer'>
                    <FaApple className='text-[40px]'/>
                    <div>
                        <h3 className='text-[16px] font-medium'>Download on the</h3>
                        <h1 className='text-[30px] font-semibold leading-[20px]'>AppStore</h1>
                    </div>
                </div>
                <div className='flex items-center gap-[1rem] border-[1px] p-[.5rem] pb-[1rem] border-white rounded-[10px] text-[#FFFFFF] bg-[black] cursor-pointer'>
                    <FaGooglePlay className='text-[40px]'/>
                    <div>
                    <h3 className='text-[16px] font-medium'>Get It On</h3>
                        <h1 className='text-[30px] font-semibold leading-[20px]'>GooglePlay</h1>
                    </div>
                </div>
            </div>
            {/* ---------------- */}

       </div>
        {/* ---------------------------------------hero-Section-end---------------------------------------------------------- */}

        {/* ------------section-2-------------------------------------------------------------------------------------------- */}
        <div className='w-full min-h-[800px] p-[2rem] flex flex-col gap-[1rem]'>

            <h3 className='font-Inter font-semibold text-[48px] text-[#ff7643]'>
            Welcome <span className='text-[#ffffff]'>to ContentCraft</span> AI.
            </h3>

            <h3 className='font-Inter font-medium text-[#FFFFFF] text-[16px]'>
            Unleash the Power of AI in Your Content Creation Journey
            </h3>

            <div className='w-full p-[1rem] flex flex-col gap-[1rem] border-[2px] border-[#FF7643] bg-[#374868] rounded-[10px]'>
                    <h3 className='font-Inter font-semibold text-[16px] text-[#FFFFFF]'>
                    Use an engaging visual that represents <span className='text-[#ff7643]'>AI-driven content creation</span> or <span className='text-[#ff7643]'>collaboration</span>.
                    </h3>
                    
                    <h3 className='font-Inter font-normal text-[16px] text-[#FFFFFF]'>
                    <span className='text-[#ff7643]'>ContentCraft AI</span> empowers you to create, collaborate, and innovate with the assistance of advanced artificial intelligence. 
                    Elevate your content and streamline your workflow effortlessly.
                    </h3>
            </div>

            <div className='w-full flex items-center justify-between'>
              {AIButtons.map((name, index) => (
                    <button onClick={()=>{
                        setActiveButtons(index)
                    }}
                     key={index} 
                    className={` border-[#FF7643] px-[2rem] py-[1rem]
                     rounded-[5px] font-Inter text-[16px] bg-[#374868] ${activeButtons === index ?'text-[#ff7643] font-semibold border-[2px]':"text-[#FFFFFF] font-normal border-[1px]"}`}
                    >
                        {name}
                    </button>
                ))}
            </div>

{/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            {activeButtons === 0&&
                <div className='w-full  p-[2rem] border-[2px] border-[#ff7643] flex items-center justify-between bg-[#374868] rounded-[10px]'>

               <div className='w-[60%] flex flex-col gap-[1rem] '>
                   <h2 className='font-Inter font-semibold text-[30px] text-[#ff7643]'>Revolutionize <span className='text-[#ffffff]'>Content Creation with</span> AI  Power</h2>
                    <h3 className='font-Inter font-semibold text-[16px] text-[#FFFFFF]'>“Unleash Creativity, Generate Quality Content Effortlessly”</h3>

                    <h3 className='font-Inter font-semibold text-[16px] text-[#FFFFFF] '> <span className='text-[#ff7643]'>Unlock the power of AI</span> for seamless and impactful content creation. Our platform combines <span className='text-[#ff7643]'>human-like creativity with machine efficiency</span> to:</h3>

                    <ul className='font-Inter font-semibold text-[16px] text-[#FFFFFF] list-disc pl-4'>
                        <li>Generate Engaging Content</li>
                        <li>Enhance Collaboration</li>
                        <li>Boost Productivity</li>
                    </ul>

                    <h4 className='font-Inter font-semibold text-[#ffffff] text-[16px] '>Customize, automate, and optimize your content creation process with <span className='text-[#ff7643]'>ContentCraft AI</span>. 
                        Elevate your creativity, streamline teamwork, and supercharge productivity. 
                        <span className='text-[#ff7643]'>Welcome to the future of content!</span>
                    </h4>
                    <div>
                    <button className='bg-[#ff7643] py-[.5rem] px-[2rem] rounded-[20px] font-Inter font-semibold text-[#ffffff] text-[16px] '>Try AI content Creation</button>
                    </div>
               </div>
                <div className='flex items-center justify-center'>
                        <img src={LandingPageImg1} alt="" className='w-[60%]' />
                </div>
            </div>}
{/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

{/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
{activeButtons === 1&&

                <div className='w-full  p-[2rem] border-[2px] border-[#ff7643] flex items-center justify-between bg-[#374868] rounded-[10px]'>

               <div className='w-[60%] flex flex-col gap-[1rem] '>
                   <h2 className='font-Inter font-semibold text-[30px] text-[#ff7643]'>Seamless   
                        <span className='text-[#ffffff]'>Collaboration,</span>
                        <span className='text-[#ff7643]'>Maximum </span>
                        Productivity
                    </h2>

                    <h3 className='font-Inter font-semibold text-[16px] text-[#FFFFFF]'>“Connect, Collaborate, and Achieve Goals Together”</h3>

                    <h3 className='font-Inter font-semibold text-[16px] text-[#FFFFFF] '> 
                    Collaboration is at the heart of <span className='text-[#Ff7643]'>ContentCraft AI</span>. Leverage our collaborative workspace to 
                    <span className='text-[#ff7643]'>connect teams, assign tasks, and achieve project success.</span>
                    </h3>

                    <h3 className='font-Inter font-semibold text-[16px] text-[#ffffff]'>
                        Discover <span className='text-[#ff7643]'>features</span> like real-time collaboration, task assignment, and project tracking for streamlined workflows.
                    </h3>

                    <ul className='font-Inter font-semibold text-[16px] text-[#FFFFFF] list-disc pl-4'>
                        <li>"Enhance teamwork and communication."</li>
                        <li>"Assign tasks and track project progress."</li>
                        <li>"Brainstorm ideas in a collaborative workspace."</li>
                    </ul>

                    <h4 className='font-Inter font-semibold text-[#ffffff] text-[16px] '>Customize, automate, and optimize your content creation process with <span className='text-[#ff7643]'>ContentCraft AI</span>. 
                        Elevate your creativity, streamline teamwork, and supercharge productivity. 
                        <span className='text-[#ff7643]'>Welcome to the future of content!</span>
                    </h4>
                    <div>
                        <button className='bg-[#ff7643] py-[.5rem] px-[2rem] rounded-[20px] font-Inter font-semibold text-[#ffffff] text-[16px] '>Start Collorating</button>
                    </div>
                </div>
                    <div className='flex items-center justify-center'>
                            <img src={LandingPageImg4} alt="" className='w-[60%]' />
                    </div>
            </div>}
{/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

           

{/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
{activeButtons === 2&&

                <div className='w-full  p-[2rem] border-[2px] border-[#ff7643] flex items-center justify-between bg-[#374868] rounded-[10px]'>

               <div className='w-[60%] flex flex-col gap-[1rem] '>
                   <h2 className='font-Inter font-semibold text-[30px] text-[#ff7643]'>
                    <span className='text-[#ff7643]'>Navigate AI</span> Possibilities with <span className='text-[#ff7643]'>Expert Consultation</span>
                    </h2>

                    <h3 className='font-Inter font-semibold text-[16px] text-[#FFFFFF]'>“Unlock Strategic Insights and Guidance for AI Implementation”</h3>

                    <h3 className='font-Inter font-semibold text-[16px] text-[#FFFFFF] '> 
                    <span className='text-[#ff7643]'>AI Consultation connects you with seasoned AI professionals.</span> Gain valuable insights, 
                    strategic guidance, and hands-on assistance to <span className='text-[#ff7643]'>navigate the complexities of AI implementation.</span>
                    </h3>

                    <h3 className='font-Inter font-semibold text-[16px] text-[#ffffff]'>
                    Access to experienced AI experts, tailored solutions, and ongoing support for successful 
                   <span className='text-[#ff7643]'> AI integration.</span>
                    </h3>

                    <div>
                    <button className='bg-[#ff7643] py-[.5rem] px-[2rem] rounded-[20px] font-Inter font-semibold text-[#ffffff] text-[16px] '>Schedule consultation</button>
                    </div>
               </div>
                <div className='flex items-center justify-center'>
                        <img src={LandingPageImg2} alt="" className='w-[60%]' />
                </div>
            </div>}
{/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

{/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
{activeButtons === 3&&

                <div className='w-full  p-[2rem] border-[2px] border-[#ff7643] flex items-center justify-between bg-[#374868] rounded-[10px]'>

               <div className='w-[60%] flex flex-col gap-[1rem] '>
                   <h2 className='font-Inter font-semibold text-[30px] text-[#ff7643]'>
                   Craft Intelligent <span className='text-[#ffffff]'>Solutions with AI</span> Model Builder
                    </h2>

                    <h3 className='font-Inter font-semibold text-[16px] text-[#FFFFFF]'>“Build Customized AI Models Tailored to Your Business Needs”</h3>

                    <h3 className='font-Inter font-semibold text-[16px] text-[#FFFFFF] '> 
                    <span className='text-[#ff7643]'>AI Model Builder empowers businesses</span> to create bespoke artificial intelligence models. 
                    Tailor-made solutions for your unique challenges, <span className='text-[#ff7643]'> designed to enhance performance</span> and 
                    <span className='text-[#ff7643]'>drive innovation.</span>
                    </h3>

                    <h3 className='font-Inter font-semibold text-[16px] text-[#ffffff]'>
                    <span className='text-[#ff7643]'>Explore features</span> like customization options, real-time updates, and <span className='text-[#ff7643]'>seamless integration into 
                    your workflows.</span>
                    </h3>

                    <div>
                    <button className='bg-[#ff7643] py-[.5rem] px-[2rem] rounded-[20px] font-Inter font-semibold text-[#ffffff] text-[16px] '>Start Building</button>
                    </div>
                   
               </div>
                <div className='flex items-center justify-center'>
                        <img src={LandingPageImg3} alt="" className='w-[60%]' />
                </div>
            </div>}
{/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

           

        </div>
        {/* ------------section-2-end---------------------------------------------------------------------------------------- */}



    </div>
  )
}

export default LandingPage
