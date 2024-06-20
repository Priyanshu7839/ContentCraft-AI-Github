import React,{useState} from 'react'
import { IoIosArrowDown } from "react-icons/io";


const CreateWithAIForm = () => {
    const ContentType = ['Articles','BlogPosts','Poetry','Social Media Posts','Product Description','Code Snippets','Creative Writings','Technical Documentation','EmailCopy','Essays','Speeches','News Articles','Dialogues/Conversations','Learning Materials','Storytelling'];
    const [contentTypeOptionsShow, setcontentTypeOptionsShow] = useState(false);
    const [ContentTypeOptions, setContentTypeOptions] = useState('Select')



    return (
        <div className='min-h-[100vh]'>

            <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>

                {/* ---------------------------------------------------- */}

                <div className='p-[2rem] bg-[#1d2d4a] flex flex-col gap-[2rem] rounded-[10px]'>
                    {/* --------Content Type and File Upload----------------------- */}
                    <div className='flex'>
                        {/* -------------Content Type ----------------------- */}

                        <div className='w-[50%] flex flex-col gap-[1rem]'>
                            <h1 className='font-Inter font-semibold text-[20px]'>Content Type</h1>
                            <p className='font-Inter text-[#ff7643] text-[16px] font-semibold w-[80%]'>Choose the type of content you want to create.</p>
                            {/* ---------consultation type select div-------------- */}

                            <div className='px-[1rem] py-[.5rem] bg-[#374868] w-[80%] rounded-[5px] flex items-center justify-between transition-all duration-300 '
                                onClick={() => { setcontentTypeOptionsShow(!contentTypeOptionsShow) }}
                            >
                                <h1 className='font-Inter font-normal text-[16px]'>{ContentTypeOptions}</h1>

                                <IoIosArrowDown className={`transition-all duration-300 ${contentTypeOptionsShow ? 'rotate-180' : ''}`} />


                            </div>
                            {/* ---------consultation type select div end-------------- */}


                            <div className={` bg-[#374868] w-[80%] rounded-[5px] transition-all duration-300  overflow-hidden font-Inter font-normal text-[16px] ${contentTypeOptionsShow ? 'h-fit' : 'h-[0px]'}`}

                            >
                                {/* ------------------------- */}
                                {
                                    ContentType.map((tone, index) => {
                                        return (
                                            <div key={index} className='px-[1rem] py-[.5rem] flex items-center justify-between'
                                                onClick={() => {
                                                    setContentTypeOptions(`${tone}`)
                                                    setcontentTypeOptionsShow(!contentTypeOptionsShow)
                                                }}
                                            >
                                                <h1>{tone}</h1>

                                                <div className='rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center relative'>
                                                    <div className={`rounded-full w-[10px] h-[10px] relative z-1 ${ContentTypeOptions === `${tone}` ? 'bg-[#ff7643]' : 'bg-white'}`}></div>
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
                            <h1 className='font-Inter font-semibold text-[20px]'>Upload Files</h1>
                            <p className='font-Inter text-[#ff7643] text-[16px] font-semibold'>Enhance your content with images, videos, or other media.</p>
                           



                            {/* ---------Upload Div---------------------- */}
                            <div className=' w-[80%] rounded-[5px] flex items-center justify-center gap-[1rem] p-[.5rem] relative bg-[#374868]'>

                                <input type="file" className='w-full text-[#000]  p-[.5rem] rounded-[10px] border-none outline-none absolute opacity-0 top-0' />


                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 15.5V19.5C21 20.0304 20.7893 20.5391 20.4142 20.9142C20.0391 21.2893 19.5304 21.5 19 21.5H5C4.46957 21.5 3.96086 21.2893 3.58579 20.9142C3.21071 20.5391 3 20.0304 3 19.5V15.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17 8.5L12 3.5L7 8.5" stroke="#FF7643" stroke-width="2" stroke-linecap="round" strokelinejoin="round" />
                                    <path d="M12 3.5V15.5" stroke="#FF7643" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h1 className='font-Inter font-medium text-[16px]'>Upload Files</h1>

                            </div>
                            {/* ---------Upload Div-End------------------ */}


                        </div>
                        {/* -------------File Upload Div-End---------------------- */}

                    </div>
                    {/* --------Content Type and File Upload-End------------------- */}

                    {/* -------------Content Title-------------------------------- */}
                    <div>
                        {/* -------------Text Title Div-------------------------- */}

                        <div className='w-[100%] flex flex-col gap-[1rem]'>
                            <h1 className='font-Inter font-semibold text-[20px]'>Title</h1>
                            <p className='font-Inter text-[#ff7643] text-[16px] font-semibold'>Enter a captivating title for your content</p>

                            <input name="" id=""  placeholder='Title Here...' className='w-[100%] text-[#000] p-[.5rem] rounded-[5px] border-none outline-none'/>


                        </div>
                        {/* -------------Text Title Div-End---------------------- */}
                    </div>
                    {/* -------------Content Title-End---------------------------- */}

                    {/* -----------------Submit Button And Disclaimer--------------------- */}
                    <div className='flex gap-[1rem] justify-between'>
                        <div className='w-[50%] flex items-end justify-end'>
                            <button className='w-[100%] p-[.5rem] flex items-center justify-center bg-[#ff7643] box-border rounded-[30px] font-Inter font-semibold text-[16px] text-[#fff]'>Start Creating</button>
                        </div>
                        {/* ------------------------Diclaimer--------------------- */}
                        <div className='w-[40%] flex'>
                            <p className='text-[12px] text-[#ff7643] text-justify'>Craft compelling content with our creation tools. Whether it's a blog post, article, or social media content, make it stand out with a captivating title and rich media. Save or post your creation to share it with the world.
                            </p>

                        </div>

                    </div>
                    {/* -----------------Submit Button And Disclaimer-End----------------- */}


                </div>
                {/* ------------------------------------------------- */}
            </div>
        </div>
    )

}

export default CreateWithAIForm
