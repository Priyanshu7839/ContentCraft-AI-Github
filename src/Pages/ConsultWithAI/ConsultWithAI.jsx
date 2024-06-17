import React from 'react'
import { ConsultWithAIForm, ConsultWithAISidebar } from '../../Components'

const ConsultWithAI = () => {
  return (
     <div className='w-full min-h-[100vh]'>
     
          
          <div className='absolute top-[120px] left-0'>
               <ConsultWithAISidebar/>
          </div>

          <ConsultWithAIForm/>
      
          
        
    </div>
  )
}

export default ConsultWithAI
