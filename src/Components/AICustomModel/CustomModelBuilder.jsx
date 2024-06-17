import React, { useState } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useDispatch } from 'react-redux';




const CustomModelBuilder = ({SetModelBuild}) => {

    const dispatch = useDispatch();

    const [ModelSettings,setModelSettings] = useState(new Array(3).fill(""));
  
    const [AdvancedSettings,setAdvancedSettings] = useState(new Array(3).fill(""));




    const ModelSettingsArray = [
        {
            name: 'Model Configuration',
            SettingsName: 'Model Architecture',
            settingsTypes: ['Neural Network', 'Decision Time', 'Support Vector Machine']
        },
        {
            name: 'Training Options',
            SettingsName: 'Training Algorithm',
            settingsTypes: ['Stochastic Gradient Descent', 'Adam', 'RMSprop']
        },
        {
            name: 'Data Configuration',
            SettingsName: 'Data Processing Options',
            settingsTypes: ['Normalization', 'Standardization', 'Min-Max Scaling']
        },

    ]


    const AdvanceFunctionArray = [
        {
            name: 'Activation Functions',
            type: ['ReLU (Rectified Linear Unit)', 'Tanh (Hyperbolic Tangent)', 'Parametric ReLU (PReLU)']
        },
        {
            name: 'Loss Functions',
            type: ['Mean Squared Error', 'Binary Crossentropy', 'Binary Crossentropy'],

        },
        {
            name: 'Optimizers',
            type: ['Adam', 'RMSprop']
        }

    ]

  

    return (
        <div className='min-h-[100vh]'>

            {/* --------------------------------------------policy field--------------------------------- */}
            <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
                <div className='w-full flex items-center gap-[1rem] cursor-pointer'
                    onClick={() => { dispatch(setcurrPrivacySettingSlide('')) }}
                >
                    {/* <IoMdArrowRoundBack className='text-[30px]' /> */}

                    <h1 className='font-semibold text-[26px]'>Custom Model Builder</h1>

                </div>
                {/* ---------------------------------------------------- */}

                <div className='p-[2rem] bg-[#37486873] flex items-stretch  gap-[3rem] rounded-[10px]'>

                    <div className='w-full  flex flex-col gap-[3rem]'>
                        {/* --------------------------------------------------------------------------------- */}
                        {
                            ModelSettingsArray.map((setting, index) => {
                                return (
                                    <div key={index} className='flex items-stretch flex-col gap-[1rem]'>
                                        <h1 className='text-[24px] text-[#ff7643] font-Inter font-semibold'>{setting.name}</h1>


                                        <div className='flex gap-[1rem]'>
                                            <div className='flex flex-col gap-[.5rem] w-[50%] min-h-fit '>
                                                <h3 className='font-Inter text-[#fff] text-[18px] font-extralight'>{setting.SettingsName}</h3>
                                                {
                                                    setting.settingsTypes.map((type, indes) => {
                                                        return (
                                                            <div className='flex items-center justify-between py-[.5rem] px-[1rem] bg-[#374868] rounded-[10px]'
                                                                key={indes}
                                                                onClick={()=>{
                                                                    let settings = [...ModelSettings]
                                                                    settings[index] = type
                                                                    setModelSettings(settings)
                                                                }}
                                                            >
                                                                {type}

                                                                <div className={`w-[20px] h-[20px] rounded-full flex items-center justify-center border-[2px]  box-border border-white ${' border-[#717782]'}`}>
                                                                    <div
                                                                    className={`w-[12px] h-[12px] rounded-full ${ModelSettings[index]===type && 'bg-[#ff7643]'}`}
                                                                    
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className='w-[50%] min-h-fit '>
                                                {
                                                    index === 0 &&
                                                    <div className='flex flex-col gap-[.5rem]'>
                                                        <h3 className='font-Inter text-[#fff] text-[18px] font-medium'>HyperParameters</h3>

                                                        <input type="text" placeholder='Enter Parameter Values' className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none' />
                                                    </div>
                                                }
                                                {
                                                    index === 1 &&
                                                    <div className='flex flex-col gap-[.5rem]'>
                                                        <h3 className='font-Inter text-[#fff] text-[18px] font-medium'>Training Duration</h3>

                                                        <input type="text" placeholder='Enter Training Duration' className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none' />
                                                    </div>
                                                }
                                                {
                                                    index === 2 &&
                                                    <div className='flex flex-col gap-[.5rem]'>
                                                        <h3 className='font-Inter text-[#fff] text-[18px] font-medium'>Upload Dataset</h3>

                                                        <div className='w-full flex flex-col gap-[.5rem]'>


                                                            <div className='bg-[#374868]  rounded-[10px] flex items-center justify-center gap-[1rem] p-[.5rem] relative'>

                                                                <input type="file" className='w-full text-[#000]  p-[.5rem] rounded-[10px] border-none outline-none absolute opacity-0 top-0' />


                                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M21 15.5V19.5C21 20.0304 20.7893 20.5391 20.4142 20.9142C20.0391 21.2893 19.5304 21.5 19 21.5H5C4.46957 21.5 3.96086 21.2893 3.58579 20.9142C3.21071 20.5391 3 20.0304 3 19.5V15.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M17 8.5L12 3.5L7 8.5" stroke="#FF7643" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M12 3.5V15.5" stroke="#FF7643" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                                <h1 className='font-Inter font-semibold text-[16px]'>Upload Dataset</h1>

                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>

                                        </div>
                                    </div>

                                )
                            })
                        }
                        {/* -------------------------Advanced Settings--------------------------------------- */}
                        <div className='flex flex-col gap-[1rem]'>

                            <h1 className='text-[24px] text-[#ff7643] font-Inter font-semibold'>Advanced Settings</h1>

                            {
                                AdvanceFunctionArray.map((funct, index) => {
                                    return (
                                        <div className='flex flex-col gap-[.5rem] w-[50%] min-h-fit'
                                            key={index}
                                        >

                                            <h3 className='font-Inter text-[#fff] text-[18px] font-extralight'>{funct.name}</h3>
                                            {
                                                funct.type.map((type, indes) => {
                                                    return (
                                                        <div className='flex items-center justify-between py-[.5rem] px-[1rem] bg-[#374868] rounded-[10px]'
                                                            key={indes}

                                                            onClick={
                                                                ()=>{
                                                                    let settings = [...AdvancedSettings];
                                                                    settings[index] = type;
                                                                    setAdvancedSettings(settings);
                                                                }
                                                            }
                                                        >
                                                            {type}

                                                            <div className={`w-[20px] h-[20px] rounded-full flex items-center justify-center border-[2px]  box-border ${AdvancedSettings[index] !== type &&'border-[#717782]'}`}>
                                                                <div className={`w-[12px] h-[12px] rounded-full ${AdvancedSettings[index] === type && 'bg-[#ff7643]'}`}></div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {/* -------------------------Advanced Settings-End----------------------------------- */}

                        <p className='font-Inter text-[16px] font-medium text-[#ff7643]'>
                            Customize your machine learning model by adjusting parameters and configurations below. Once satisfied, save and train to create
                            your personalized model.
                        </p>
                        {/* ---------------------Save button------------------------------- */}
                        <div className='w-[50%] flex'>

                            <button
                                className='w-full p-[.5rem] bg-[#ff7643] rounded-[30px] font-Inter font-semibold text-[16px] text-center'
                                onClick={SetModelBuild}    
                            >
                                Save & Train
                            </button>

                        </div>
                        {/* ----------------------------------------------------------------- */}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default CustomModelBuilder
