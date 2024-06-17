import React from 'react';
import { IoMdArrowRoundForward } from "react-icons/io";

import { setcurrAppVersionAndUpdatesOptions,setautomaticUpdates } from '../../../Store/Slices/AppVersionAndUpdatesSettingsOptionsSlice';
import { useDispatch,useSelector } from 'react-redux';

const AppVersionAndUpdates = () => {

    const dispatch = useDispatch();

    const automaticUpdates = useSelector((state)=>state.AppVersionAndUpdatesOptions.automaticUpdates);

    const AppVersionAndUpdatesNameArray = [
        'Release Notes','Check for updates','Automatic Updates','Feedback'
    ]
    return (
        <div className=' min-h-[100vh]'>
            <div className='p-[3rem] flex flex-col gap-[3rem]  font-Inter text-[#ffffff] '>

                <div className='p-[2rem] bg-[#374868] flex flex-col items-start justify-between rounded-[10px]'>
                    <h1 className='font-Inter text-[#ffffff] font-medium text-[20px]'>
                            Current Version
                    </h1>
                    <h3 className='font-Inter text-[#ff7643] text-[16px] font-semibold'>
                        -v2.0.0
                    </h3>
                </div>
              
                {/* ------------------------------------------------------ */}
                {
                    AppVersionAndUpdatesNameArray.map((Ver,index)=>{
                        return(
                            <div className='p-[2rem] bg-[#374868] flex items-center justify-between rounded-[10px] cursor-pointer'
                                key={index}
                                onClick={()=>{
                                    index!==2?
                                    (
                                        dispatch(setcurrAppVersionAndUpdatesOptions(`${Ver}`))
                                    ):(
                                        dispatch(setautomaticUpdates(!automaticUpdates))
                                    )
                                }}
                            >
                                <h1 className='font-medium text-[20px]'>
                                    {Ver}
                                </h1>

                                {
                                    index!==2 ?
                                    (
                                        <IoMdArrowRoundForward className='text-[24px]' />
                                    )
                                    :
                                    (
                                        <button className={`w-[50px] h-[25px] relative rounded-full ${automaticUpdates?'bg-[#ff7643]':'bg-[#06142e] transition-all duration-700'}`}>
                                              <span className={`w-[25px] h-[25px] rounded-full  bg-white absolute top-0 transition-all duration-500 ${automaticUpdates ?'right-0 ':'left-0 '}`}></span>
                                        </button>
                                    )
                                }
                            </div>
                        )
                    })
                }
                {/* ------------------------------------------------------ */}



            </div>
        </div>
    )
}

export default AppVersionAndUpdates
