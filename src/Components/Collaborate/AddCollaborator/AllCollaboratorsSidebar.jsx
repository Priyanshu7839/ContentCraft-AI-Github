import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { setcurrAddCollaborationOptions } from '../../../Store/Slices/AddCollaboratorOptionsSlice';



const AllCollaboratorsSidebar = () => {

    const collaboratorsList = [
        {
            Name:'Sarah Johnson',
            desgn:'Data Analyst',
        },
        {
            Name:'Emily Chen',
            desgn:'Graphic Designer',
        },
        {
            Name:'Sarah Johnson',
            desgn:'Data Analyst',
        },
        {
            Name:'Emily Chen',
            desgn:'Graphic Designer',
        },
        {
            Name:'Sarah Johnson',
            desgn:'Data Analyst',
        },
        {
            Name:'Emily Chen',
            desgn:'Graphic Designer',
        },
        {
            Name:'Sarah Johnson',
            desgn:'Data Analyst',
        },
        {
            Name:'Emily Chen',
            desgn:'Graphic Designer',
        },
        {
            Name:'Sarah Johnson',
            desgn:'Data Analyst',
        }
    ]

    const dispatch = useDispatch();
  return (
    <div className='h-[85vh] w-[300px] bg-[#1e2d4a] px-[1rem] py-[2rem] flex flex-col gap-[3rem] rounded-r-[10px] items-center  overflow-scroll'>
                <div className='w-full flex items-center gap-[1rem] cursor-pointer'
                    onClick={() => { dispatch(setcurrAddCollaborationOptions('')) }}
                >
                    <IoMdArrowRoundBack className='text-[30px] text-[#fff]' />

                    <h1 className='text-center font-semibold font-Inter text-[24px] text-[#ffffff]'>All Collaborators</h1>

                </div>

                <div className='flex flex-col gap-[.5rem] w-full text-[#ffffff]' >
                {
                        collaboratorsList.map((list,index)=>{
                            return(
                                <div className='px-[.5rem] py-[.4rem] bg-[#374868] flex  gap-[3rem] rounded-[10px] items-center justify-between w-full' 
                                 key={index}
                                >
                                {/* ---------------- */}
                                <div className='flex gap-[1rem] items-center'>
                                    {/* -------Image-Div------------- */}
                                    <div className='w-[40px] h-[40px] rounded-full bg-red-900 border-[1px] border-white'>
        
                                    </div>
                                    {/* -------Image-DivEnd------------- */}
                                    {/* ------------Name Div------------ */}
                                    <div>
                                        <h1 className='font-Inter font-medium text-[16px]'>{list.Name}</h1>
                                        <p className='font-Inter font-extralight text-[12px]'>{list.desgn}</p>
                                    </div>
                                    {/* ------------Name Div end------------ */}
                                </div>
                                {/* ---------------- */}
                               
                        </div>
                            )
                        })
                    }
                </div>
    </div>
  )
}

export default AllCollaboratorsSidebar
