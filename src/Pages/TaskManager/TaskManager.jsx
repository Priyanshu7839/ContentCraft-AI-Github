import React from 'react';
import { TaskAssigned, TaskManagerSidebar } from '../../Components';
import AssignTask from '../../Components/TaskManager/AssignTask';
import { useSelector } from 'react-redux';

const TaskManager = () => {

  const currTaskmanagerSidebarOptions = useSelector((state)=>state.TaskmanagerSidebarOptions.currTaskmanagerSidebarOptions);


  return (
    <div className='w-full min-h-[100vh]'>
      
          
          <div className='absolute top-[120px] left-0'>
               <TaskManagerSidebar/>
          </div>
          
        {
            currTaskmanagerSidebarOptions === 'Task Assigned' && 

            <TaskAssigned/>
        }
        {
            currTaskmanagerSidebarOptions === 'Assign Task' && 

            <AssignTask/>
        }
      </div>
  )
}

export default TaskManager
