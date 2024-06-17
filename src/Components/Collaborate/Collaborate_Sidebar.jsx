import React from 'react'

import { setcurrCollaborateSidebarOptions } from '../../Store/Slices/CollaborateSidebarOptionsSlice';
import { setcurrAddCollaborationOptions } from '../../Store/Slices/AddCollaboratorOptionsSlice'

import { useDispatch,useSelector } from 'react-redux';

const Collaborate_Sidebar = () => {

  const currCollaborateSidebarOptions = useSelector((state)=> state.CollaborateSidebarOptions.currCollaborateSidebarOptions);

  const dispatch = useDispatch();

  const Collaboration_sidebar_items = ['Add Collaborator','Add Content','Upcoming Meetings'];
  

  return (
    <div className='h-[85vh] w-[300px] bg-[#1e2d4a] px-[1rem] py-[2rem] flex flex-col gap-[3rem] rounded-r-[10px] items-center'>

      <h1 className='text-center font-semibold font-Inter text-[28px] text-[#ffffff]'>Collaboration Hub</h1>

      <ul className='flex flex-col items-start w-full gap-[.5rem]'>
          {
            Collaboration_sidebar_items.map((items,index)=>{

              return(

                <li key={index} className={`w-full flex items-center gap-[1rem] px-[1rem] py-[.5rem] rounded-[10px] cursor-pointer font-Inter font-normal text-[16px] text-[#ffffff] ${currCollaborateSidebarOptions === `${items}` ? 'bg-[#06142e]' : 'bg-[#374868]'}`}
                  
                onClick={()=>{
                  dispatch(setcurrCollaborateSidebarOptions(`${items}`))
                  dispatch(setcurrAddCollaborationOptions('')) 
                }}

                >
                    {items}
                </li>

              )

            })
          }
      </ul>

        
    </div>
  )
}

export default Collaborate_Sidebar
