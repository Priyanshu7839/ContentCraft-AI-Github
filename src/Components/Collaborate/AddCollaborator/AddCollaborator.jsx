import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

import { setcurrAddCollaborationOptions } from '../../../Store/Slices/AddCollaboratorOptionsSlice';
import { setcurrCollaborateSidebarOptions } from '../../../Store/Slices/CollaborateSidebarOptionsSlice';
import { useDispatch } from 'react-redux';



const AddCollaborator = () => {
    const dispatch = useDispatch();

    const AddCollaboratorOptionsArray = ['Invite Collaborator','Collaborators','Invite Requests'];

  return (
    <div className=' min-h-[100vh]'>


        {/* ------------------------------------------------------------------- */}
        <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
            <div className='w-full flex items-center gap-[1rem] cursor-pointer'

            onClick={()=>{dispatch(setcurrCollaborateSidebarOptions(''))}}
                
            >
                <IoMdArrowRoundBack className='text-[30px]' />

                <h1 className='font-semibold text-[26px]'>Add Collaborator</h1>

            </div>

            {/* ----------------------------Input Div----------------------------------- */}
            <div className='p-[2rem] w-full bg-[#374868] rounded-[10px] flex flex-col gap-[2rem]'>
                <h1 className='font-Inter text-[20px] text-[#ffffff]' >
                    Connect with team members by adding collaborators to your space.
                </h1>

                <ul className='font-Inter'>
                    {
                        AddCollaboratorOptionsArray.map((option,index)=>{
                            return (
                                <li key={index} className={`w-full flex items-center justify-between py-[1rem] cursor-pointer ${index!==AddCollaboratorOptionsArray.length - 1 ?'border-b-[2px] border-[#06142E]':''}`}
                                
                                onClick={()=>{
                                    dispatch(setcurrAddCollaborationOptions(`${option}`))
                                }}
                                > 
                                    <h1 className='font-medium text-[18px]'>
                                        {option}
                                    </h1>

                                    <IoMdArrowRoundForward className='text-[24px]' />
                                </li>
                            )
                        })
                    }
                </ul>



            </div>
        </div>

    </div>
  )
}

export default AddCollaborator
