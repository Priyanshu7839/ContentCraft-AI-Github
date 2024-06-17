import React, { useState } from 'react';


const AddContent = () => {
    const categoryArray = ['Blog Posts','Reports','Documents'];
    const contentTypeArray=['Text','Image','Video'];

    const [category,setcategory] = useState('');
    const [contentType,setcontentType] = useState('');

    return (
        <div className='min-h-[100vh]'>

            {/* --------------------------------------------Add Content--------------------------------- */}
            <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
                <div className='w-full flex items-center gap-[1rem] cursor-pointer'

                >


                    <h1 className='font-semibold text-[26px]'>Add Content</h1>

                </div>
                {/* ---------------------------------------------------- */}

                <div className='p-[2rem] bg-[#37486873] flex flex-col gap-[3rem] rounded-[10px]'>

                    <p>Create and contribute new content to your projects.</p>

                    {/* ------------------------Name-input------------------------------- */}
                    <div className='flex justify-between gap-[2rem] '>
                        <div className='w-[50%] flex flex-col gap-[.5rem]'>
                            <h1 className='font-Inter font-medium text-[18px]'>Title</h1>
                            <input
                                type="text"
                                placeholder='Title Here...'
                                className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none' />
                        </div>
                    </div>
                    {/* ----------------------------------------------------------------- */}
                    {/* ------------------------Select------------------------------- */}
                    <div className='flex justify-between gap-[2rem] '>
                       {/* ------------category--------------- */}

                        <div className='w-[50%] flex flex-col gap-[.5rem]'>
                            <h1 className='font-Inter font-medium text-[18px]'>Category</h1>
                            {
                                categoryArray.map((categories,index)=>{
                                    return(
                                        <div key={index} className='flex items-center justify-between py-[.5rem] px-[1rem] bg-[#374868] rounded-[10px]'
                                        onClick={()=>{
                                            setcategory(`${categories}`)
                                        }}
                                        >
                                            {categories}

                                            <div className={`w-[20px] h-[20px] rounded-full flex items-center justify-center border-[2px]  box-border  ${category === categories ?'border-white':'border-[#717782]'}`}>
                                                <div className={`w-[12px] h-[12px] rounded-full ${category === categories &&'bg-[#ff7643]'}`}></div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* ------------ContentType--------------- */}


                        <div className='w-[50%] flex flex-col gap-[.5rem]'>
                            <h1 className='font-Inter font-medium text-[18px]'>Content type</h1>
                            
                            {
                                contentTypeArray.map((type,index)=>{
                                    return(
                                        <div key={index} className='flex items-center justify-between py-[.5rem] px-[1rem] bg-[#374868] rounded-[10px]'
                                        onClick={()=>{
                                            setcontentType(`${type}`)
                                        }}
                                        >
                                            {type}

                                            <div className={`w-[20px] h-[20px] rounded-full flex items-center justify-center border-[2px]  box-border  ${contentType === type ?'border-white':'border-[#717782]'}`}>
                                                <div className={`w-[12px] h-[12px] rounded-full ${contentType === type &&'bg-[#ff7643]'}`}></div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* ----------------------------------------------------------------- */}

                    {/* ---------------------------Detailed Message---------------------- */}
                    <div className='flex flex-col gap-[.5rem]'>
                        <h1 className='font-Inter font-medium text-[18px]'>Description</h1>
                        <textarea name="" id="" rows="10" className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none'></textarea>

                    </div>
                    {/* ----------------------------------------------------------------- */}
                    {/* ----------------------------------Attach files------------------------------------- */}
                    <div className='flex items-center gap-[2rem]'>
                            <div className='w-[50%] flex flex-col gap-[.5rem]'>
                                <label className='font-Inter font-medium text-[18px]' htmlFor="">Attach Files(If Any)</label>
                                
                                <div className=' bg-[#374868] rounded-[10px] flex items-center justify-center gap-[1rem] p-[.5rem] relative'>

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
                            {/* <div className='w-[50%] flex flex-col gap-[.5rem] font-Inter'>
                                
                            </div> */}
                        </div>
                        {/* ----------------------------------------------- */}
                    {/* ---------------------Submit button------------------------------- */}
                    <div className='w-[50%] flex'>

                        <button
                            className='w-[90%] p-[.5rem] bg-[#ff7643] rounded-[30px] font-Inter font-semibold text-[16px] text-center'>
                            Submit
                        </button>

                    </div>
                    {/* ----------------------------------------------------------------- */}

                </div>
            </div>
        </div>
    )
}

export default AddContent
