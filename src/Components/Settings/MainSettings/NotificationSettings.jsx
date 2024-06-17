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

    const NotificationOptionsArray =[
        'contentCreationUpdates','collaborationActivities','consultingServices','accountSecurity','appUpdates','activityOnYourContent','subscriptionManagement','platformNews'
    ]

    const notificationOptions = {
        contentCreationUpdates: useSelector((state) => state.NotificationOption.contentCreationUpdates),
        collaborationActivities: useSelector((state) => state.NotificationOption.collaborationActivities),
        consultingServices: useSelector((state) => state.NotificationOption.consultingServices),
        accountSecurity: useSelector((state) => state.NotificationOption.accountSecurity),
        appUpdates: useSelector((state) => state.NotificationOption.appUpdates),
        activityOnYourContent: useSelector((state) => state.NotificationOption.activityOnYourContent),
        subscriptionManagement: useSelector((state) => state.NotificationOption.subscriptionManagement),
        platformNews: useSelector((state) => state.NotificationOption.platformNews),
      };

    const actionCreators = {
        contentCreationUpdates: setcontentCreationUpdates,
        collaborationActivities: setcollaborationActivities,
        consultingServices: setconsultingServices,
        accountSecurity: setaccountSecurity,
        appUpdates: setappUpdates,
        activityOnYourContent: setactivityOnYourContent,
        subscriptionManagement: setsubscriptionManagement,
        platformNews: setplatformNews,
      };


    const NotificationOptionNamesArray = [
        'Content Creation Updates','Collaboration Activities','Consulting Services','Account Security','App Updates','Activity On Your Content','Subscription Management','Platform News'
    ]



  return (
    <div className='min-h-[100vh]'>

    <div className='p-[3rem] flex flex-col gap-[3rem] '>
        {/* --------------------Notification Settings-------------------------------------------- */}
        <div className='w-full flex flex-col bg-[#374868] p-[2rem] gap-[2rem] font-Inter text-[#ffffff] rounded-[10px] '>
            <h1 className='font-semibold text-[28px]'>Privacy Settings</h1>

            {/* ------------------settings----------------------- */}
            <div className='w-full flex-col'>               
                {/* --------------------------------------------------------------------- */}
                

                {
                  NotificationOptionsArray.map((option,index)=>{

                    const isEnabled = notificationOptions[option];
                    const actionCreator = actionCreators[option];

                    return (
                        <div className={`w-full flex items-center justify-between py-[1rem] ] cursor-pointer ${index!== NotificationOptionsArray.length - 1 && 'border-b-[2px] border-[#06142E]'}`}
                        onClick={()=>{
                            if (actionCreator) {
                                dispatch(actionCreator(!isEnabled));
                              }
                            
                        }}
                        >
                            <h1 className='font-medium text-[20px]'>
                            {NotificationOptionNamesArray[index]}
                            </h1>

                            <button className={`w-[50px] h-[25px] relative rounded-full ${isEnabled?'bg-[#ff7643]':'bg-[#06142e] transition-all duration-700'}`}>
                                <span className={`w-[25px] h-[25px] rounded-full  bg-white absolute top-0 transition-all duration-500 ${isEnabled ?'right-0 ':'left-0 '}`}></span>
                            </button>
                        </div>
                    )
                  })  
                }
            </div>

        </div>

        {/* -------------------------------Disclaimer------------------------------------------ */}
        <p className='text-[#ff7643] font-medium font-Inter text-[16px]'>
            Some notifications are essential for a seamless experience. Customize your preferences, but keep in mind that certain notifications are necessary for account security and app functionality.
        </p>
    </div>
</div>
  )
}

export default NotificationSettings
