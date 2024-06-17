import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaSearch } from "react-icons/fa";


const TaskAssigned = () => {

  const TaskAssignedArray = [
    {
      title: 'Write a blog post on the impact of AI in healthcare.',
      assignedBy: 'Abhishek',
      dueDate: '02/01/2024'
    },
    {
      title: 'Collaborate on project presentation.',
      assignedBy: 'Prem',
      dueDate: '08/01/2024'
    },
    {
      title: 'Market research for new product launch.',
      assignedBy: 'sunny',
      dueDate: '18/01/2024'
    }
    
  ]





  return (
    <div className='min-h-[100vh]'>


      <div className='p-[4rem] pt-0 flex flex-col gap-[5rem] font-Inter text-[#ffffff]'>
        {/* ---------heading-------------------------------------- */}
        <div className='flex flex-col gap-[1rem]'>
          <div className='w-full flex items-center gap-[1rem] cursor-pointer'
            onClick={() => { dispatch(setcurrPrivacySettingSlide('')) }}
          >
            <IoMdArrowRoundBack className='text-[30px]' />

            <h1 className='font-semibold text-[26px]'>Task Assigned to you</h1>

          </div>
          {/* ------------------search div---------------- */}
          <div className='relative'>
            <input className='w-full px-[1rem] pl-[3rem] py-[.3rem] rounded-[5px] border-none outline-none text-[#000] bg-[#374868] placeholder:text-[#06142e]' type="text" name="" id="" placeholder='search...' />

            <FaSearch className='text-[20px] absolute top-[50%] left-2 translate-y-[-50%] text-[#06142e]' />
          </div>
        </div>
        {/* ---------------------------------------------------- */}

        <div className=' flex flex-col gap-[1rem] '>

          {
            TaskAssignedArray.map((task, index) => {
              return (
                <div className='bg-[#37486873] px-[2rem] py-[1rem] rounded-[10px] flex flex-col items-start gap-[1rem]'>
                  <h1 className='font-semibold text-[20px]'>{task.title}</h1>

                  <div className='w-full flex items-center justify-between'>
                    <h2 className='text-[16px] font-extralight'>Assigned by : <span className='font-semibold'>{task.assignedBy}</span></h2>
                    <h2 className='text-[16px] font-extralight'>Due Date : <span className='font-semibold'>{task.dueDate}</span></h2>
                  </div>
                </div>
              )
            })
          }



        </div>
      </div>
    </div>
  )
}

export default TaskAssigned
