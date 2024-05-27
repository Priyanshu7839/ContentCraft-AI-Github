import React from 'react';

import { setprojectInvitation, seteditsAndComments, setapprovals, setcollaborationActivities } from '../../../Store/Slices/CollaborationOptionsSlice';
import { useDispatch, useSelector, } from 'react-redux';


const CollaborationSettings = () => {
    const dispatch = useDispatch();
    const projectInvitation = useSelector((state) => state.CollaborationOptions.projectInvitation);
    const editsAndComments = useSelector((state) => state.CollaborationOptions.editsAndComments);
    const approvals = useSelector((state) => state.CollaborationOptions.approvals);
    const collaborationActivities = useSelector((state) => state.CollaborationOptions.collaborationActivities);


    return (
        <div className=' min-h-[100vh]'>



            <div className='p-[3rem] flex flex-col gap-[3rem] '>
                {/* ------------------------------collaboration Settings Heading---------------------------------- */}
                <div className='w-full flex flex-col bg-[#374868] p-[2rem] gap-[2rem] font-Inter text-[#ffffff] rounded-[10px] '>
                    <h1 className='font-semibold text-[28px]'>Collaboration Settings</h1>

                    {/* ------------------Collaboration Settings----------------------- */}
                    <div className='w-full flex-col'>
                        {/* -------------------------Project Invitation ----------------------*/}
                        <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                            onClick={() => dispatch(setprojectInvitation(!projectInvitation))}
                        >
                            <h1 className='font-medium text-[20px]'>
                                Project Invitation
                            </h1>

                            <button className={`w-[50px] h-[25px] relative rounded-full ${projectInvitation ? 'bg-[#ff7643]' : 'bg-[#06142e] transition-all duration-700'}`}>
                                <span className={`w-[25px] h-[25px] rounded-full  bg-white absolute top-0 transition-all duration-500 ${projectInvitation ? 'right-0 ' : 'left-0 '}`}></span>
                            </button>
                        </div>
                        {/* ---------------------------------------------------- ----------------*/}
                        {/* -------------------------Edits and Comments ----------------------*/}
                        <div className='w-full flex items-center justify-between py-[1rem] border-b-[2px] border-[#06142E] cursor-pointer'
                            onClick={() => dispatch(seteditsAndComments(!editsAndComments))}
                        >
                            <h1 className='font-medium text-[20px]'>
                                Edits and Comments
                            </h1>

                            <button className={`w-[50px] h-[25px] relative rounded-full ${editsAndComments ? 'bg-[#ff7643]' : 'bg-[#06142e] transition-all duration-700'}`}>
                                <span className={`w-[25px] h-[25px] rounded-full  bg-white absolute top-0 transition-all duration-500 ${editsAndComments ? 'right-0 ' : 'left-0 '}`}></span>
                            </button>
                        </div>
                        {/* ---------------------------------------------------- ----------------*/}
                        {/* -------------------------Approvals ----------------------*/}
                        <div className='w-full flex items-center justify-between py-[1rem]  cursor-pointer'
                            onClick={() => dispatch(setapprovals(!approvals))}
                        >
                            <h1 className='font-medium text-[20px]'>
                                Approvals
                            </h1>

                            <button className={`w-[50px] h-[25px] relative rounded-full ${approvals ? 'bg-[#ff7643]' : 'bg-[#06142e] transition-all duration-700'}`}>
                                <span className={`w-[25px] h-[25px] rounded-full  bg-white absolute top-0 transition-all duration-500 ${approvals ? 'right-0 ' : 'left-0 '}`}></span>
                            </button>
                        </div>
                        {/* ---------------------------------------------------- ----------------*/}
                    </div>
                </div>

                {/* ------------------------------Notification Preferences for Collaborators Settings Heading---------------------------------- */}
                <div className='w-full flex flex-col bg-[#374868] p-[2rem] gap-[2rem] font-Inter text-[#ffffff] rounded-[10px] '>
                    <h1 className='font-semibold text-[28px]'>Notification Preferences for Collaborators</h1>

                    {/* ------------------Notification Preferences for Collaborators Settings----------------------- */}
                    <div className='w-full flex-col'>
                        {/* -------------------------CollaborationActivities----------------------*/}
                        <div className='w-full flex items-center justify-between py-[1rem]  cursor-pointer'
                            onClick={() => dispatch(setcollaborationActivities(!collaborationActivities))}
                        >
                            <h1 className='font-medium text-[20px]'>
                                Collaboration Activities
                            </h1>

                            <button className={`w-[50px] h-[25px] relative rounded-full ${collaborationActivities ? 'bg-[#ff7643]' : 'bg-[#06142e] transition-all duration-700'}`}>
                                <span className={`w-[25px] h-[25px] rounded-full  bg-white absolute top-0 transition-all duration-500 ${collaborationActivities ? 'right-0 ' : 'left-0 '}`}></span>
                            </button>
                        </div>
                        {/* -------------------------------------------------------------------- */}

                    </div>
                </div>

                {/* -------------------------------Disclaimer------------------------------------------ */}
                <p className='text-[#ff7643] font-medium font-Inter text-[16px]'>
                    Your collaboration settings determine how you receive notifications and stay informed about collaborative projects. Changes will take effect immediately.
                </p>



            </div>
        </div>
    )
}

export default CollaborationSettings
