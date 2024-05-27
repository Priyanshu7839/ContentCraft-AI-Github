import React ,{useState} from 'react';
import { IoMdArrowRoundForward } from "react-icons/io";

import { setcontentCreationUpdates,setcollaborationActivities,setconsultingServices,setaccountSecurity,setappUpdates,setactivityOnYourContent,setsubscriptionManagement,setplatformNews } from '../../../Store/Slices/NotificationOptionSlice';
import { useDispatch, useSelector, } from 'react-redux';


const NotificationSettings = () => {
   
    const dispatch = useDispatch();
    const contentCreationUpdates = useSelector((state)=>state.NotificationOption.contentCreationUpdates);
    const collaborationActivities = useSelector((state)=>state.NotificationOption.collaborationActivities);
    const consultingservices = useSelector((state)=>state.NotificationOption.consultingServices);
    const accountSecurity = useSelector((state)=>state.NotificationOption.accountSecurity);
    const appUpdates = useSelector((state)=>state.NotificationOption.appUpdates);
    const activityOnYourContent = useSelector((state)=>state.NotificationOption.activityOnYourContent);
    const subscriptionManagement = useSelector((state)=>state.NotificationOption.subscriptionManagement);
    const platformNews  = useSelector((state)=>state.NotificationOption.platformNews );

  return (
    <div className='min-h-[100vh]'>

    <div className='p-[3rem] flex flex-col gap-[3rem] '>
        {/* --------------------Notification Settings-------------------------------------------- */}
        <div className='w-full flex flex-col bg-[#374868] p-[2rem] gap-[2rem] font-Inter text-[#ffffff] rounded-[10px] '>
            <h1 className='font-semibold text-[28px]'>Privacy Settings</h1>

            {/* ------------------settings----------------------- */}
            <div className='w-full flex-col'>
                {/* -------------------------Content Creation Updates ----------------------*/}
                <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                   onClick={()=>{
                    dispatch(setcontentCreationUpdates(!contentCreationUpdates));
                   }}
                >
                    <h1 className='font-medium text-[20px]'>
                        Content Creation Updates
                    </h1>

                    <button className={`w-[50px] h-[25px] relative rounded-full ${contentCreationUpdates?'bg-[#ff7643]':'bg-[#06142e] transition-all duration-700'}`}>
                        <span className={`w-[25px] h-[25px] rounded-full  bg-white absolute top-0 transition-all duration-500 ${contentCreationUpdates ?'right-0 ':'left-0 '}`}></span>
                    </button>
                </div>

                {/* --------------------------------------------------------------------- */}
                {/* -------------------------Collaboration Activities ----------------------*/}
                <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                   onClick={()=>{
                    dispatch(setcollaborationActivities(!collaborationActivities));
                   }}
                >
                    <h1 className='font-medium text-[20px]'>
                        Collaboration Activities
                    </h1>

                    <button className={`w-[50px] h-[25px] relative rounded-full ${collaborationActivities?'bg-[#ff7643]':'bg-[#06142e] transition-all duration-700'}`}>
                        <span className={`w-[25px] h-[25px] rounded-full  bg-white absolute top-0 transition-all duration-500 ${collaborationActivities ?'right-0 ':'left-0 '}`}></span>
                    </button>
                </div>

                {/* --------------------------------------------------------------------- */}
                {/* -------------------------Consulting Services----------------------*/}
                <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                   onClick={()=>{
                    dispatch(setconsultingServices(!consultingservices));
                   }}
                >
                    <h1 className='font-medium text-[20px]'>
                        Consulting Services
                    </h1>

                    <button className={`w-[50px] h-[25px] relative rounded-full ${consultingservices?'bg-[#ff7643]':'bg-[#06142e] transition-all duration-700'}`}>
                        <span className={`w-[25px] h-[25px] rounded-full  bg-white absolute top-0 transition-all duration-500 ${consultingservices ?'right-0 ':'left-0 '}`}></span>
                    </button>
                </div>

                {/* --------------------------------------------------------------------- */}
                {/* -------------------------Account Security----------------------*/}
                <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                   onClick={()=>{
                    dispatch(setaccountSecurity(!accountSecurity));
                   }}
                >
                    <h1 className='font-medium text-[20px]'>
                        Account Security
                    </h1>

                    <button className={`w-[50px] h-[25px] relative rounded-full ${accountSecurity?'bg-[#ff7643]':'bg-[#06142e] transition-all duration-700'}`}>
                        <span className={`w-[25px] h-[25px] rounded-full  bg-white absolute top-0 transition-all duration-500 ${accountSecurity ?'right-0 ':'left-0 '}`}></span>
                    </button>
                </div>

                {/* --------------------------------------------------------------------- */}
                {/* -------------------------App Updates----------------------*/}
                <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                   onClick={()=>{
                    dispatch(setappUpdates(!appUpdates));
                   }}
                >
                    <h1 className='font-medium text-[20px]'>
                        App Updates
                    </h1>

                    <button className={`w-[50px] h-[25px] relative rounded-full ${appUpdates?'bg-[#ff7643]':'bg-[#06142e] transition-all duration-700'}`}>
                        <span className={`w-[25px] h-[25px] rounded-full  bg-white absolute top-0 transition-all duration-500 ${appUpdates ?'right-0 ':'left-0 '}`}></span>
                    </button>
                </div>

                {/* --------------------------------------------------------------------- */}
                {/* -------------------------Activity on Your Content ----------------------*/}
                <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                   onClick={()=>{
                    dispatch(setactivityOnYourContent(!activityOnYourContent));
                   }}
                >
                    <h1 className='font-medium text-[20px]'>
                        Activity on Your Content
                    </h1>

                    <button className={`w-[50px] h-[25px] relative rounded-full ${activityOnYourContent?'bg-[#ff7643]':'bg-[#06142e] transition-all duration-700'}`}>
                        <span className={`w-[25px] h-[25px] rounded-full  bg-white absolute top-0 transition-all duration-500 ${activityOnYourContent ?'right-0 ':'left-0 '}`}></span>
                    </button>
                </div>

                {/* --------------------------------------------------------------------- */}
                {/* -------------------------Subscription Management ----------------------*/}
                <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                   onClick={()=>{
                    dispatch(setsubscriptionManagement(!subscriptionManagement));
                   }}
                >
                    <h1 className='font-medium text-[20px]'>
                        Subscription Management
                    </h1>

                    <button className={`w-[50px] h-[25px] relative rounded-full ${subscriptionManagement?'bg-[#ff7643]':'bg-[#06142e] transition-all duration-700'}`}>
                        <span className={`w-[25px] h-[25px] rounded-full  bg-white absolute top-0 transition-all duration-500 ${subscriptionManagement ?'right-0 ':'left-0 '}`}></span>
                    </button>
                </div>

                {/* --------------------------------------------------------------------- */}
                {/* -------------------------Platform News----------------------*/}
                <div className='w-full flex items-center justify-between py-[1rem]  cursor-pointer'
                   onClick={()=>{
                    dispatch(setplatformNews(!platformNews));
                   }}
                >
                    <h1 className='font-medium text-[20px]'>
                        Platform News
                    </h1>

                    <button className={`w-[50px] h-[25px] relative rounded-full ${platformNews?'bg-[#ff7643]':'bg-[#06142e] transition-all duration-700'}`}>
                        <span className={`w-[25px] h-[25px] rounded-full  bg-white absolute top-0 transition-all duration-500 ${platformNews ?'right-0 ':'left-0 '}`}></span>
                    </button>
                </div>

                {/* --------------------------------------------------------------------- */}
            </div>

        </div>

        {/* -------------------------------Disclaimer------------------------------------------ */}
        <p className='text-[#ff7643] font-medium font-Inter text-[16px]'>
            Some notifications are essential for a seamless experience. Customize your preferences, but keep in mind that certain notifications are
            necessary for account security and app functionality.
        </p>
    </div>
</div>
  )
}

export default NotificationSettings
