import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { setcontentTypeOptions,setcontentLengthOptions,setcontentToneOptions } from '../../../Store/Slices/ContentGenerationPreferencesOptionsSlice';
import { useDispatch,useSelector } from 'react-redux';


const ContentGenerationPreferences = () => {
    const [contentTypeOptionShow,setcontentTypeOptionShow] = useState(false);
    const [contentToneOptionShow,setcontentToneOptionShow] = useState(false);
    const [contentLengthOptionShow,setcontentLengthOptionShow] = useState(false);

   


    const dispatch = useDispatch(); 
    const contentTypeOptions = useSelector((state)=>state.ContentGenerationPreferencesOptions.contentTypeOptions);
    const contentToneOptions = useSelector((state)=>state.ContentGenerationPreferencesOptions.contentToneOptions);
    const contentLengthOptions = useSelector((state)=>state.ContentGenerationPreferencesOptions.contentLengthOptions);


    const contentTypes = ['Articles','BlogPosts','Poetry','Social Media Posts','Product Description','Code Snippets','Creative Writings','Technical Documentation','EmailCopy','Essays','Speeches','News Articles','Dialogues/Conversations','Learning Materials','Storytelling'];

    const contentTone = ['Casual','Formal','Creative','Technical','Inspirational','Educational','Humorous','Persuasive','Narrative','Professional','Sarcastic','Analytical'];

    const contentLengths = ['Short','Medium','Long'];

    
    
    
  return (
    <div className='min-h-[100vh]'>



    <div className='p-[3rem] pt-[0rem] flex flex-col gap-[3rem] '>
      {/* --------------------Content generation Preferences-------------------------------------------- */}
      <div className='w-full flex flex-col bg-[#1d2d4a] p-[2rem] gap-[2rem] font-Inter text-[#ffffff] rounded-[10px] '>
            <h1 className='font-semibold text-[28px]'>Personal Information</h1>
            {/* ------------------settings----------------------- */}
            <div className='w-full flex flex-col gap-[2rem]'>
                <div className='flex '>
                    {/* -------------content type option tag-------------------- */}
                    <div className='w-[50%] flex flex-col gap-[1rem]'>
                    <h1 className='font-Inter font-semibold text-[20px]'>Content Type</h1>
                    <p className='font-Inter text-[#ff7643] text-[16px] font-semibold'>Select the type of content you want to generate.</p>
                        {/* ---------type Heading-------------- */}

                    <div className='px-[1rem] py-[.5rem] bg-[#374868] w-[80%] rounded-[5px] flex items-center justify-between transition-all duration-300'
                            onClick={()=>{setcontentTypeOptionShow(!contentTypeOptionShow)}}
                    >
                        <h1 className='font-Inter font-normal text-[16px]'>{contentTypeOptions}</h1>

                        <IoIosArrowDown className={`transition-all duration-300 ${contentTypeOptionShow?'rotate-180':''}`}/>

                        
                    </div>
                        {/* ---------type Heading end-------------- */}


                    <div className={` bg-[#374868] w-[80%] rounded-[5px] transition-all duration-300  overflow-hidden font-Inter font-normal text-[16px] ${contentTypeOptionShow?'h-fit':'h-[0px]'}`}
                            
                    >
                        {/* ------------------------- */}

                            {
                                contentTypes.map((type,index)=>{
                                    return(
                                        <div key={index} className='px-[1rem] py-[.5rem] flex items-center justify-between'
                                        onClick={()=>{
                                            dispatch(setcontentTypeOptions(`${type}`));
                                            setcontentTypeOptionShow(!contentTypeOptionShow);
                                        }}
                                        >
                                            <h1>{type}</h1>


                                            <div className='rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center relative'>
                                                <div className={`rounded-full w-[10px] h-[10px] relative z-1 ${contentTypeOptions===`${type}`?'bg-[#ff7643]':'bg-white'}`}></div>
                                            </div>

                                        </div>
                                    )
                                })
                            }

                        {/* -------------------------- */}
                       
                           
                    </div>
                    
                    </div>
                    {/* -------------content type option tag end-------------------- */}
                    {/* -------------Tone option tag ----------------------- */}

                    <div className='w-[50%] flex flex-col gap-[1rem]'>
                        <h1 className='font-Inter font-semibold text-[20px]'>Tone</h1>
                        <p className='font-Inter text-[#ff7643] text-[16px] font-semibold'>Choose the tone for your generated content.</p>
                        {/* ---------type Heading-------------- */}

                        <div className='px-[1rem] py-[.5rem] bg-[#374868] w-[80%] rounded-[5px] flex items-center justify-between transition-all duration-300'
                                onClick={()=>{setcontentToneOptionShow(!contentToneOptionShow)}}
                        >
                            <h1 className='font-Inter font-normal text-[16px]'>{contentToneOptions}</h1>

                            <IoIosArrowDown className={`transition-all duration-300 ${contentToneOptionShow?'rotate-180':''}`}/>

                            
                        </div>
                        {/* ---------type Heading end-------------- */}


                        <div className={` bg-[#374868] w-[80%] rounded-[5px] transition-all duration-300  overflow-hidden font-Inter font-normal text-[16px] ${contentToneOptionShow?'h-fit':'h-[0px]'}`}
                                
                        >
                            {/* ------------------------- */}
                                {
                                    contentTone.map((tone,index)=>{
                                        return(
                                            <div key={index} className='px-[1rem] py-[.5rem] flex items-center justify-between'
                                            onClick={()=>{
                                                dispatch(setcontentToneOptions(`${tone}`))
                                                setcontentToneOptionShow(!contentToneOptionShow)
                                            }}
                                            >
                                                <h1>{tone}</h1>

                                                <div className='rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center relative'>
                                                    <div className={`rounded-full w-[10px] h-[10px] relative z-1 ${contentToneOptions===`${tone}`?'bg-[#ff7643]':'bg-white'}`}></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            {/* ---------------------------- */}
                        </div>
                    </div>
                    {/* -------------Tone option tag end-------------------- */}

            </div>
                    {/* -------------Content Length option tag end-------------------- */}

            <div className='w-[50%] flex flex-col gap-[1rem]'>
                        <h1 className='font-Inter font-semibold text-[20px]'>Content Length</h1>

                        <p className='font-Inter text-[#ff7643] text-[16px] font-semibold'>Specify the desired length of your generated content.</p>
                        {/* ---------type Heading-------------- */}
                        <div className='px-[1rem] py-[.5rem] bg-[#374868] w-[80%] rounded-[5px] flex items-center justify-between transition-all duration-300'
                                onClick={()=>{setcontentLengthOptionShow(!contentLengthOptionShow)}}
                        >
                            <h1 className='font-Inter font-normal text-[16px]'>{contentLengthOptions}</h1>

                            <IoIosArrowDown className={`transition-all duration-300 ${contentLengthOptionShow?'rotate-180':''}`}/>

                            
                        </div>
                        {/* ---------type Heading End-------------- */}


                        <div className={` bg-[#374868] w-[80%] rounded-[5px] transition-all duration-300  overflow-hidden font-Inter font-normal text-[16px] ${contentLengthOptionShow?'h-fit':'h-[0px]'}`}
                                
                        >
                                {
                                    contentLengths.map((length,index)=>{
                                        return(
                                            <div key={index} className='px-[1rem] py-[.5rem] flex items-center justify-between'
                                            onClick={()=>{
                                                dispatch(setcontentLengthOptions(`${length}`))
                                                setcontentLengthOptionShow(!contentLengthOptionShow)
                                            }}
                                            >

                                                <h1>{length}</h1>

                                                <div className='rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center relative'>
                                                   <div className={`rounded-full w-[10px] h-[10px] relative z-1 ${contentLengthOptions===`${length}`?'bg-[#ff7643]':'bg-white'}`}></div>
                                                </div>

                                            </div>
                                        )
                                    })
                                }



                               
                        </div>
            </div>
                    {/* -------------Content Length option tag end-------------------- */}

            
        
        </div>
      </div>
      {/* --------------------Content generation Preferences-end---------------------------------------- */}
      </div>
      
    </div>
  )
}

export default ContentGenerationPreferences
