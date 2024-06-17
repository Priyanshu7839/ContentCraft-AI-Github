import React from 'react'
import { IoMdArrowRoundBack,IoIosArrowForward } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { setcurrAICustomModelOption } from '../../Store/Slices/AICustomModelOptionsSlice';




const ModelCreationResult = ({SetModelBuild,ShowModelPerformance}) => {
    const TrainingCompletion = '50'
    const ModelAccuracy = '70'
    const dispatch = useDispatch();

    return (
        <div className='min-h-[100vh]'>

            {/* --------------------------------------------policy field--------------------------------- */}
            <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
                <div className='w-full flex items-center gap-[1rem] cursor-pointer'
                    onClick={SetModelBuild}
                >
                    <IoMdArrowRoundBack className='text-[30px]' />

                    <h1 className='font-semibold text-[26px]'>Model Creation Result</h1>

                </div>
                {/* ---------------------------------------------------- */}

                <div className='p-[2rem] bg-[#37486873] flex flex-col gap-[3rem] rounded-[10px]'>

                    <p className='font-normal text-[16px] font-Inter text-[#ff7643]'>
                        Congratulations! Your custom model is ready for use. Explore its performance and capabilities. Click on "View Model Performance" to analyze detailed metrics or go to the dashboard to manage and deploy your models.
                    </p>

                    {/* ------------------------------------------------- */}

                    <div className='flex items-stretch gap-[2rem]' >
                        {/* --------training progress div----------------------------------------------- */}


                        <div className='flex flex-col w-[50%] gap-[1rem]'>
                            <h1 className='font-Inter text-[22px] font-medium'>Training Progress</h1>
                            <div className=' bg-[#374868] p-[1rem] rounded-[5px] flex flex-col gap-[2rem] ' >
                                {/* ---------------Training completion Percentage---------------------- */}
                                <div className='flex flex-col gap-[.5rem]'>
                                    <h2 className='flex gap-[.5rem] font-Inter text-[16px]'>Traning Completed : <h1 className='font-medium'>{TrainingCompletion}%</h1></h2>

                                    <div className='w-full h-[15px] rounded-full bg-[#06142e]' >
                                    <div className='h-[15px] bg-[#ff7643] rounded-full' style={{ width: `${TrainingCompletion}%` }}></div>
                                    </div>
                                </div>

                                {/* --------------Model Accuracy Percentage----------------------------- */}
                                <div className='flex flex-col gap-[.5rem]'>
                                    <h2 className='flex gap-[.5rem] font-Inter text-[16px]'>Model Accuracy : <h1 className='font-medium'>{ModelAccuracy}%</h1></h2>

                                    <div className='w-full h-[15px] bg-[#06142E] rounded-full'>
                                    <div className='h-[15px] bg-[#ff7643] rounded-full' style={{ width: `${ModelAccuracy}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* -----------------------------Generated Model info div --------------------------*/}
                        <div className='flex flex-col gap-[1rem] w-[50%] '>
                            <h1 className='font-Inter text-[22px] font-medium'>Generated Model Information</h1>
                            <div className=' bg-[#374868] p-[1rem] rounded-[5px] flex flex-col gap-[2rem] '>
                                <h1 className='flex gap-[.5rem] font-Inter text-[16px]'> Model Architecture : <h1 className='font-medium'>Neural Network</h1></h1>
                                <h1 className='flex gap-[.5rem] font-Inter text-[16px]'>HyperParameters :
                                    <h1 className='font-medium'>
                                        <p>Learning rate: 0.001</p>
                                        <p>Batch Size: 32</p>
                                        <p>Eposchs: 50</p>
                                    </h1>
                                </h1>
                            </div>
                        </div>
                    </div>
                    {/* -------------------------------------------------------------------------------- */}
                    {/* --------------------------Buttons---------------------------------------------- */}
                    <div className='flex gap-[2rem]'>
                        {/* --------------View Model Performance-------------- */}
                        <div className='w-full flex items-center justify-between bg-[#374868] rounded-[5px] p-[.5rem] font-Inter text-[16px] cursor-pointer'
                            onClick={ShowModelPerformance}
                        >

                            View Model Performance
                            <IoIosArrowForward />

                        </div>
                        {/* --------------Go To Dashboard-------------- */}
                        <div className='w-full flex items-center justify-between bg-[#374868] rounded-[5px] p-[.5rem] font-Inter text-[16px] cursor-pointer' 
                        onClick={()=>{dispatch(setcurrAICustomModelOption('DashBoard'))}}
                        >

                            Go To Dashboard
                            <IoIosArrowForward />

                        </div>
                    </div>
                    {/* --------------------------Buttons-End------------------------------------------ */}





                </div>
            </div>
        </div>
    )
}

export default ModelCreationResult
