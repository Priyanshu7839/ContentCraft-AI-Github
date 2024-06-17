import React from 'react';
import { IoMdArrowRoundForward } from "react-icons/io";

import { setcurrPrivacySettingSlide,setshareDataForAnalytics } from '../../../Store/Slices/PrivacyPolicySlice';
import { useDispatch, useSelector,} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PrivacySecuritySettings = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    const shareDataForAnalytics = useSelector((state)=>state.PrivacySettingsSlide.shareDataForAnalytics);

    const PrivacySettingsArray = [
                'Link to Privacy Policy','Data Collection And Usage','Share Data For Analytics','Password Policies'
            ]
    const AccountControlSettingsArray = [
        'Two-Factor Authentication (2FA)','Third-Party Integration','Incident Response', ,'Log-out Everywhere' ,'Delete Account','Security Measures'
    ]
  

    return (
        <div>
            <div className='min-h-[100vh]'>



                <div className='p-[3rem] flex flex-col gap-[3rem] '>
                    {/* --------------------Privacy Settings-------------------------------------------- */}
                    
                        <div className='w-full flex flex-col bg-[#374868] p-[2rem] gap-[2rem] font-Inter text-[#ffffff] rounded-[10px] '
                        
                        >
                            
                        <h1 className='font-semibold text-[28px]'>Privacy Settings</h1>
                        {/* ------------------settings----------------------- */}
                        <div className='w-full flex-col'>
                           
                            {/* --------------------------------------------------------------------*/}

                            {
                               PrivacySettingsArray.map((settings,index1)=>{
                                    return(
                                        <div className={`w-full flex items-center justify-between py-[1rem] cursor-pointer ${ index1 !== PrivacySettingsArray.length - 1   &&'border-b-[2px] border-[#06142E]'}`}
                                        key={index1}
                                        onClick={() => {
                                            index1 !==2 ?
                                            (
                                            dispatch(setcurrPrivacySettingSlide(`${settings}`))
                                            )    
                                            :
                                            (
                                            dispatch(setshareDataForAnalytics(!shareDataForAnalytics))

                                            )
                                        
                                        
                                        }}
                                        >
                                            <h1 className='font-medium text-[20px]'>
                                               {settings}
                                            </h1>

                                        {
                                        
                                        index1 !== 2 ?
                                        (
                                        <>
                                            <IoMdArrowRoundForward className='text-[24px]' />
                                        </>
                                        )
                                        :
                                        (
                                        <>
                                         <button className={`w-[50px] h-[25px] relative rounded-full ${shareDataForAnalytics?'bg-[#ff7643]':'bg-[#06142e] transition-all duration-700'}`}
                                         >
                                             <span className={`w-[25px] h-[25px] rounded-full  bg-white absolute top-0 transition-all duration-500 ${shareDataForAnalytics ?'right-0 ':'left-0 '}`}></span>
                                        </button>
                                        </>
                                        )
                                    
                                    
                                    
                                    }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                     
                    {/* --------------------Privacy-settings-end---------------------------------------- */}
                    {/* --------------------Security Settings----------------------------------------------- */}
                    <div className='w-full flex flex-col bg-[#374868] p-[2rem] gap-[2rem] font-Inter text-[#ffffff] rounded-[10px]'>
                        <h1 className='font-semibold text-[28px]'>Account Controls</h1>
                        {/* ------------------settings----------------------- */}
                        <div className='w-full flex-col'>
                            
                            {/* ------------------- */}

                            {
                                AccountControlSettingsArray.map((control,index)=>{
                                    return(
                                        <div className={`w-full flex items-center justify-between py-[1rem] cursor-pointer ${index!== AccountControlSettingsArray.length -1 && 'border-b-[2px] border-[#06142E]' }`}
                                        key={index}
                                         onClick={()=>{

                                             if(control !== 'Log-out Everywhere' && control !== 'Delete Account'){
                                                dispatch(setcurrPrivacySettingSlide(`${control}`))
                                             }

                                             if(control === 'Log-out Everywhere'){
                                                navigate('/LogoutEverywhere')
                                             }

                                             if(control === 'Delete Account'){
                                                navigate('/DeleteAccount')
                                             }
                                         }}
                                        
                                         
                                        >
                                            <h1 className='font-medium text-[20px]'>
                                                {control}
                                            </h1>

                                            <IoMdArrowRoundForward className='text-[24px]' />
                                        </div>
                                    )
                                })
                            }
                            
                            {/* ------------------- */}

                        </div>
                    </div>
                    {/* --------------------Security Settings-end------------------------------------------- */}

                    {/* -------------Contact-us----------- */}
                    <div className='w-full rounded-[10px] flex items-center justify-between p-[2rem] bg-[#374868]'
                         onClick={() => dispatch(setcurrPrivacySettingSlide('ContactUs'))}
                    >
                        <h1 className='font-medium text-[20px] text-[#fff] font-Inter'>
                            Contact Us
                        </h1>

                        <IoMdArrowRoundForward className='text-[24px] text-[#fff]' />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default PrivacySecuritySettings
