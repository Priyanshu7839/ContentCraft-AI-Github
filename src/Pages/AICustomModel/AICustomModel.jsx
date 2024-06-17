import React,{useState} from 'react'
import { AICustomModelSidebar, CustomModelBuilder, Dashboard, ModelCreationResult, ModelPerformance } from '../../Components'
import { useSelector } from 'react-redux';

const AICutomModel = () => {

  const currAICustomModelOption = useSelector((state)=>state.AICustomModelOptions.currAICustomModelOption);

  const [ModelBuild,setModelBuild] = useState(false);
  
  const [ModelPerformanceShow,setModelPerformanceShow] = useState(false);

  const SetModelBuild = () =>{
    setModelBuild(!ModelBuild);
  }

  const ShowModelPerformance = () => {
    setModelPerformanceShow(!ModelPerformanceShow)
  }
  
  

  return (
    <div className='w-full min-h-[100vh]'>
      
          <div className='absolute top-[120px] left-0'>
                <AICustomModelSidebar  />
          </div>

         

          {
            (currAICustomModelOption === 'Build Model' && !ModelBuild && !ModelPerformanceShow) &&

            <CustomModelBuilder SetModelBuild={SetModelBuild} />
          }

          {
            (currAICustomModelOption === 'Build Model' && ModelBuild && !ModelPerformanceShow) &&

            <ModelCreationResult 
            SetModelBuild={SetModelBuild}
            ShowModelPerformance={ShowModelPerformance}
            
            />

          }

          {
            (currAICustomModelOption === 'Build Model' && ModelBuild && ModelPerformanceShow) &&
            <ModelPerformance ShowModelPerformance={ShowModelPerformance}/>
          }

          {
            currAICustomModelOption === 'DashBoard' &&
            
            <Dashboard/>
          }
         
           

           
        
    </div>
  )
}

export default AICutomModel
