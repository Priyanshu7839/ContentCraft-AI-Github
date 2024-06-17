import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaLock } from "react-icons/fa";

import { useDispatch } from 'react-redux';
import { setcurrAppVersionAndUpdatesOptions } from '../../../Store/Slices/AppVersionAndUpdatesSettingsOptionsSlice';

const ReleaseNotes = () => {
    const dispatch = useDispatch(); 

    const versionHistoryArray = [
        {
            name:'Version 2.0.0 (November 15, 2023)',
            info:[
                {
                    feature:'New Features - Collaboration Hub:',
                    desc:'Introducing a collaborative workspace! Now you can invite team members, share projects, and work together seamlessly.'
                },
                {
                    feature:'Enhancements - Enhanced Content Suggestions:',
                    desc:'Our AI algorithms have been upgraded for even more accurate and creative content suggestions.'
                },
                {
                    feature:'Bugs Fixed - Fixed Image Upload Issue:',
                    desc:"Resolved a bug where some users were experiencing issues with uploading images. Now, it's smoother than ever!"
                }
            ]
        },
        {
            name:'Version 1.1.0 (October 22, 2023)',
            info:[
                {
                    feature:'New Features - Integration with Google Drive:',
                    desc:'Connect your AI Content Catalyst account with Google Drive to sync your generated content effortlessly.'
                },
                {
                    feature:'Enhancements - Integration with Google Drive:',
                    desc:"We've polished the user interface for a more intuitive and delightful user experience."
                },
                {
                    feature:'Bugs Fixed - Resolved Draft Saving Issue:',
                    desc:"Fixed an issue where some users were facing difficulties in saving drafts. Your work is now securely saved as you create."
                },
            ]
        }
    ]

  return (
    <div className='min-h-[100vh] font-Inter'>

            {/* --------------------------------------------policy field--------------------------------- */}
            <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
                <div className='w-full flex items-center gap-[1rem] cursor-pointer'
                    onClick={()=>{dispatch(setcurrAppVersionAndUpdatesOptions(''))}}
                >
                    <IoMdArrowRoundBack className='text-[30px]' />

                    <h1 className='font-semibold text-[26px]'>Release Notes</h1>

                </div>
                {/* ---------------------------------------------------- */}

                <div className='p-[2rem] bg-[#374868] flex flex-col gap-[3rem] rounded-[10px]'>
                    
                    <p className='text-[#ffffff] text-[16px] font-normal' >
                    Stay informed about the latest updates! Below are the release notes for the most recent version of AI Content Catalyst.
                    </p>

                    <div className='flex flex-col gap-[3rem]'>
                        {
                            versionHistoryArray.map((version,index)=>{
                                return(
                                    <div key={index} className='flex flex-col gap-[1rem]'>
                                    <h1 className='text-[#ffffff] text-[24px] font-semibold'>
                                        {version.name}
                                    </h1>

                                    {
                                        version.info.map((feat,indes)=>{
                                            return(
                                                <div key={indes} className='flex flex-col gap-[.5rem]'>
                                                    <h2 className='text-[#ff7643] text-[20px] font-semibold'>{feat.feature}</h2>
                                                    <h3 className='text-[#ffffff] text-[16px] font-normal'>{feat.desc}</h3>
                                                </div>
                                            )
                                        })
                                    }

                                    
                                    
                                    </div>
                                )
                            })
                        }
                    </div>
                    <a className='text-[#ff7643] text-[16px] font-semibold underline' href="">View Previous Release Notes</a>
                </div>
                {/* ---------------------------------------------------- */}

            </div>
        </div>
  )
}

export default ReleaseNotes

