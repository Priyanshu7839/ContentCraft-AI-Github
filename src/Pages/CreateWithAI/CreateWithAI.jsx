import React from 'react'
import {CreateWithAIForm, CreateWithAISidebar} from '../../Components'

const CreateWithAI = () => {
  return (
    <div className='w-full min-h-[100vh]'>
     
          
          <div className='absolute top-[120px] left-0'>
               <CreateWithAISidebar/>
          </div>

          <CreateWithAIForm/>
      
          
        
    </div>
  )
}

export default CreateWithAI
