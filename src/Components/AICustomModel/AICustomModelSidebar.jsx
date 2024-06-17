import React from 'react'
import { setcurrAICustomModelOption } from '../../Store/Slices/AICustomModelOptionsSlice'
import { useDispatch, useSelector } from 'react-redux'

const AICustomModelSidebar = () => {

    const AICustomModelSidebarItems = ['Build Model', 'DashBoard']

    const dispatch = useDispatch();

    const currAICustomModelOption = useSelector((state)=>state.AICustomModelOptions.currAICustomModelOption);

    return (
        <div className='h-[85vh] w-[300px] bg-[#1e2d4a] px-[1rem] py-[2rem] flex flex-col gap-[3rem] rounded-r-[10px] items-center  overflow-scroll'>
            <div className='w-full flex items-center justify-center gap-[1rem]'>
                <h1 className='text-center font-semibold font-Inter text-[24px] text-[#ffffff]'>AI Custom Model</h1>
            </div>

            <div className='flex flex-col gap-[.5rem] w-full text-[#ffffff]' >
                {
                    AICustomModelSidebarItems.map((items, index) => {
                        return (
                            <div className={`px-[.5rem] py-[.5rem]  flex  gap-[3rem] rounded-[10px] items-center justify-between w-full ${currAICustomModelOption === items ?'bg-[#06142E]':'bg-[#374868]'}`}
                                key={index}
                                onClick={()=>{dispatch(setcurrAICustomModelOption(`${items}`))}}

                            >
                                {/* ---------------- */}
                               

                                    <h1 className='font-Inter font-medium text-[16px]'>{items}</h1>

                                    
                                {/* ---------------- */}

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AICustomModelSidebar
