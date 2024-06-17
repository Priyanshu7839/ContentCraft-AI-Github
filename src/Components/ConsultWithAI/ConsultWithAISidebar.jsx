import React from 'react'

const ConsultWithAISidebar = () => {

  const ConsultWithAI_sidebar_items = ['Start Consulting'];
    

  return (
    <div className='h-[85vh] w-[300px] bg-[#1e2d4a] px-[1rem] py-[2rem] flex flex-col gap-[3rem] rounded-r-[10px] items-center'>

    <h1 className='text-center font-semibold font-Inter text-[28px] text-[#ffffff]'>Consult With AI</h1>

    <ul className='flex flex-col items-start w-full gap-[.5rem]'>
        {
          ConsultWithAI_sidebar_items.map((items,index)=>{

            return(

              <li key={index} className={`w-full flex items-center gap-[1rem] px-[1rem] py-[.5rem] rounded-[10px] cursor-pointer font-Inter font-normal text-[16px] text-[#ffffff]  bg-[#06142E]`}
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

export default ConsultWithAISidebar
