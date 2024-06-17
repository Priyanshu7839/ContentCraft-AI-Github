import React from 'react'
import { setcurrTaskmanagerSidebarOptions } from '../../Store/Slices/TaskmanagerSidebarOptionsSlice';
import { useDispatch, useSelector } from 'react-redux';

const TaskManagerSidebar = () => {

    const currTaskmanagerSidebarOptions = useSelector((state)=>state.TaskmanagerSidebarOptions.currTaskmanagerSidebarOptions);
    
    const dispatch = useDispatch();
  
    const Create_sidebar_items = ['Task Assigned','Assign Task'];

  return (
    <div className='h-[85vh] w-[300px] bg-[#1e2d4a] px-[1rem] py-[2rem] flex flex-col gap-[3rem] rounded-r-[10px] items-center'>

    <h1 className='text-center font-semibold font-Inter text-[28px] text-[#ffffff]'>Task Manager</h1>

    <ul className='flex flex-col items-start w-full gap-[.5rem]'>
        {
          Create_sidebar_items.map((items,index)=>{

            return(

              <li key={index} className={`w-full flex items-center gap-[1rem] px-[1rem] py-[.5rem] rounded-[10px] cursor-pointer font-Inter font-normal text-[16px] text-[#ffffff]   ${currTaskmanagerSidebarOptions === items ?'bg-[#06142E]' : 'bg-[#374868]'}`}

              onClick={()=>{dispatch(setcurrTaskmanagerSidebarOptions(`${items}`))}}
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

export default TaskManagerSidebar
