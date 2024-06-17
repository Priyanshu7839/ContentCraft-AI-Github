import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { setcurrAddCollaborationOptions } from '../../../Store/Slices/AddCollaboratorOptionsSlice';

const SentInvites = () => {
    const sentRequestArray = [
        {
            Name:'Sarah Johnson',
            desgn:'Data Analyst',
        },
        {
            Name:'Emily Chen',
            desgn:'Graphic Designer',
        },
    ]

    const dispatch = useDispatch();

    return (
        <div className='min-h-[100vh]'>

            {/* --------------------------------------------policy field--------------------------------- */}
            <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
                <div className='w-full flex items-center gap-[1rem] cursor-pointer'
                    onClick={() => { dispatch(setcurrAddCollaborationOptions('Invite Requests')) }}
                >
                    <IoMdArrowRoundBack className='text-[30px]' />

                    <h1 className='font-semibold text-[26px]'>Sent Invites</h1>

                </div>
                {/* ---------------------------------------------------- */}

                <div className='flex flex-col gap-[1rem]'>
                {
                        sentRequestArray.map((req,index)=>{
                            return(
                                <div className='px-[1rem] py-[.7rem] bg-[#374868] flex  gap-[3rem] rounded-[10px] items-center justify-between' 
                                 key={index}
                                >
                                {/* ---------------- */}
                                <div className='flex gap-[1rem] items-center'>
                                    {/* -------Image-Div------------- */}
                                    <div className='w-[45px] h-[45px] rounded-full bg-red-900 border-[1px] border-white'>
        
                                    </div>
                                    {/* -------Image-DivEnd------------- */}
                                    {/* ------------Name Div------------ */}
                                    <div>
                                        <h1 className='font-Inter font-semibold text-[16px]'>{req.Name}</h1>
                                        <p className='font-Inter font-extralight text-[12px]'>{req.desgn}</p>
                                    </div>
                                    {/* ------------Name Div end------------ */}
                                </div>
                                {/* ---------------- */}
                                {/* ---------Buttons-------- */}
                                <div className='flex  font-Inter font-semibold text-[12px]'>
                                    <button className='py-[.1rem] px-[1rem] bg-[#ff7643] text-[#ffffff] rounded-full'>
                                        Cancel
                                    </button>
                                   
                                </div>
                                {/* ---------Buttons end ---- */}
                        </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SentInvites


