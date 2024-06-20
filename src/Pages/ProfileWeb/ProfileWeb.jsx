import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import {UserImg,InviteRequestImg1,InviteRequestImg2,InviteRequestImg3} from '../../assets/index';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setcurrCollaborateSidebarOptions } from '../../Store/Slices/CollaborateSidebarOptionsSlice';
import { setcurrAddCollaborationOptions } from '../../Store/Slices/AddCollaboratorOptionsSlice';
import { setcurrTaskmanagerSidebarOptions } from '../../Store/Slices/TaskmanagerSidebarOptionsSlice';
import { setcurrAccountSettingSlide } from '../../Store/Slices/AccountSettingsSlice';
import { setCurrPanel} from '../../Store/Slices/settingSidebarSlice';



const PercentageRing = ({ percentage }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
  
    return (
      <div className=" w-fit">
        <svg width="120" height="120" className="transform-rotate-90">
          <circle
            className="text-[#06142E]"
            strokeWidth="15"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
          />
          <circle
            className="text-[#ff7643]"
            strokeWidth="15"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            style={{ fill: '#ffffff', fontSize: '20px' }}
          >
            {percentage}%
          </text>
        </svg>
      </div>
    );
  };
  

const ProfileWeb = () => {

    const Userdata = useSelector((state)=>state.UserData.UserData);
  
    
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const UserData = {
        img:Userdata.UserImage,
        name:Userdata.UserName,
        OrganisationName:Userdata.UserOrganisation,
        Designation:Userdata.UserRole,
        Email:Userdata.UserEmail,
        Desc:Userdata.UserDesc
    }
    


    const Notifications = [
        {
            Title:"🚀 Your AI Model is Ready!",
            Desc:"Great news! Your customized AI model has completed training. You can now unleash its creative power to generate high-quality content tailored to your needs. Explore the possibilities and start crafting brilliance with AI!",
            Time:"1m"
        },
        {
            Title:"🤝 New Collaboration Opportunity!",
            Desc:"You've been invited to collaborate on an exciting new project. Join forces with your team and start crafting innovative content together.",
            Time:"2m"
        },
        {
            Title:"👏 Feedback Received!",
            Desc:"Your recent content creation has received positive feedback. Explore comments and suggestions to enhance your creative process.",
            Time:"3m"
        }
    ]


    const inviteRequests=[
        {
            name:'Peter Parker',
            desn:'Content  Writer',
            img:InviteRequestImg1,
        },
        {
            name:'Sarah Johnson',
            desn:'Data Analyst',
            img:InviteRequestImg2,
        },
        {
            name:'Emily Chen',
            desn:'Graphic Designer',
            img:InviteRequestImg3,
        },
    ]

    const TasksDue = [
        {
            title:"Task1",
            DueDate:"Due Date"
        },
        {
            title:"Task2",
            DueDate:"Due Date"
        },
        {
            title:"Task3",
            DueDate:"Due Date"
        },
        
    ]

    const UpcomingMeetings = [
        {
            title:"Meeting 1",
            DateTime:"Date & Time"
        },
        {
            title:"Meeting 2",
            DateTime:"Date & Time"
        },
        {
            title:"Meeting 3",
            DateTime:"Date & Time"
        },
    ]

    const ModelPreformancePercentage = [
        {
            name:"Accuracy",
            percentage:80
        },
        {
            name:"Precision",
            percentage:70
        },
        {
            name:"Recall",
            percentage:85
        },
        {
            name:"F1 score",
            percentage:65
        },
       
    ]


  return (
    <div className='profileWeb p-[1.5rem] pt-[10rem] pb-[4rem] flex flex-col gap-[1.5rem] bg-[#06142E] '>
        {/* ------------------------------------------Section-1------------------------------------------------------------------- */}
        <div className='p-[3rem] pt-[7rem] flex flex-col gap-[.5rem] bg-[#1e2d4a] rounded-[10px] relative'>

                <div className='w-[180px] h-[180px] rounded-full bg-[#0000009f] absolute top-[-25%] border-[2px] border-[#ff7643] overflow-hidden'>
                        <img src={UserData.img} alt="" className='object-fit w-[100%] h-[100%]'/>
                </div>

                <div className='w-fit absolute right-12 top-5'>
                    <button className='text-[36px] text-[#ffffff]'
                    onClick={()=>{
                        navigate('/contentcraft/settings')
                        dispatch(setCurrPanel('Account Settings'))
                        dispatch(setcurrAccountSettingSlide('Edit Personal Information'))
                    }}
                    
                    >
                        <CiEdit/>
                    </button>
                </div>




            {/* ------------------------------------------------ */}
            <div className='flex items-center justify-between'>
                <h1 className='font-Inter font-extrabold text-[28px] text-[#ffffff]'>
                    {UserData.name}
                </h1>

                {UserData.OrganisationName &&
                    
                    
                    <h3 className='font-Inter font-semibold text-[16px] text-[#ffffff]'>
                    {UserData.OrganisationName}
                </h3>}
            </div>
            {/* ------------------------------------------------ */}
            {/* ------------------------------------------------ */}
            {UserData.Designation&& 
            <div className='flex items-center justify-start gap-[.5rem]'>
                
                <svg width="18" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 18L22 12L16 6" stroke="#FF7643" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 6L2 12L8 18" stroke="#FF7643" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

               
                
                <h2 className='font-Inter font-semibold text-[16px] text-[#ffffff]'>
                    {UserData.Designation}
                </h2>
            </div>
            }
            {/* ------------------------------------------------ */}
            {/* ------------------------------------------------ */}
            <div className='flex items-center justify-start gap-[.5rem]'>
                <IoMailOutline className='text-[#ff7643]'/>

                <h2 className='font-Inter font-medium text-[16px] text-[#ffffff]'>
                     {UserData.Email}
                </h2>
            </div>
            {/* ------------------------------------------------ */}
            {/* ------------------------------------------------ */}
           {UserData.Desc&& 
           
           <h1 className='font-Inter font-normal text-[13px] text-[#ffffff]'>
                {UserData.Desc}
            </h1>}
            {/* ------------------------------------------------ */}

        </div>
        {/* ------------------------------------------Section-1-end--------------------------------------------------------------- */}

        {/* ------------------------------------------Section-2------------------------------------------------------------------- */}
        <div className='w-full flex items-stretch justify-between '>
            {/* -------------------ModelPerformance---------------------- */}
            <div className='w-[65%] bg-[#1e2d4a] p-[1rem] min-h-fit rounded-[10px]'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold font-Inter text-[#ffffff] text-[24px]'>
                        Model Performance
                    </h1>
                    <IoMdArrowRoundForward  className='text-[#ffffff]'/>
                </div>
                {/* ------------------------------------- */}
                <div className='w-full flex p-[4rem]  items-center justify-between'>

                   {
                        ModelPreformancePercentage.map((performances,index)=>{
                            return (
                                <div className='flex flex-col items-center justify-center gap-[.5rem]'>
                                    <PercentageRing percentage={performances.percentage}/>
                                    <h1 className='font-semibold font-Inter text-[#ffffff] text-[24px]'>{performances.name}</h1>
                                </div>
                            )
                        })
                   }
                    

                </div>
            </div>
            {/* -----------------Notifications--------------- */}
            <div className='w-[33%] bg-[#1e2d4a] p-[1rem] flex flex-col gap-[1rem] min-h-fit rounded-[10px]'>
                <div className='flex items-center justify-between '>
                    <h1 className='font-semibold font-Inter text-[#ffffff] text-[24px]'>
                        Notifications
                    </h1>
                    <IoMdArrowRoundForward  className='text-[#ffffff]'/>
                </div>
                {/* ----------------------------------- */}
                <div className='flex flex-col gap-[1rem] '>
                    {
                        Notifications.map((Notify,index)=>{
                            return(
                                <div key={index} className=' py-[.5rem] px-[1rem] bg-[#374868] rounded-[10px]'>

                                    <div className='w-full  flex items-center justify-between'>
                                        <h1 className='font-medium font-Inter text-[16px] text-[#ffffff]'>{Notify.Title}</h1>
                                        <h2 className='font-Inter font-normal text-[12px] text-[#ffffff]'>{Notify.Time}</h2>
                                    </div>

                                    <h4 className='font-Inter font-extralight text-[10px] text-[#ffffff]'>
                                        {Notify.Desc}
                                    </h4>

                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
        {/* ------------------------------------------Section-2-end--------------------------------------------------------------- */}
        {/* ------------------------------------------Section-3------------------------------------------------------------------- */}
        <div className='flex items-stretch justify-between'>

            <div className='w-[65%]  flex items-stretch justify-between'>
                    {/* -----------------Tasks Due---------------------- */}
                    <div className='p-[2rem] bg-[#1e2d4a] flex flex-col gap-[1rem] w-[58%] rounded-[10px]'>
                        <div className='flex items-center justify-between cursor-pointer'
                        onClick={()=>
                            {
                                navigate('/contentcraft/TaskManager')
                                dispatch(setcurrTaskmanagerSidebarOptions('Task Assigned'))
                            }
                        }
                        >
                            <h1 className='font-semibold font-Inter text-[#ffffff] text-[24px]'>
                                Tasks Due
                            </h1>
                            <IoMdArrowRoundForward className='text-[#ffffff]'/>
                        </div>  
                        {/* ------------------------------------ */}
                        <div className='flex flex-col gap-[1rem] '>
                            {
                                TasksDue.map((tasks,index)=>{
                                    return(
                                        <div key={index} className=' py-[.5rem] px-[1rem] bg-[#374868] rounded-[10px]'>

                                            <div className='w-full  flex flex-col items-start justify-between'>
                                                <h1 className='font-medium font-Inter text-[16px] text-[#ffffff]'>{tasks.title}</h1>
                                                <h2 className='font-Inter font-normal text-[12px] text-[#ffffff]'>{tasks.DueDate}</h2>
                                            </div>

                                           

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* ---------------Upcoming Meetings------------------------ */}
                    <div className='p-[2rem] bg-[#1e2d4a] flex flex-col gap-[1rem] w-[39%] rounded-[10px]'>
                         <div className='flex items-center justify-between  cursor-pointer '
                         onClick={()=>{
                            navigate('/contentcraft/collaborate') 
                            dispatch(setcurrCollaborateSidebarOptions('Upcoming Meetings'))
                            
                         }}
                         >
                            <h1 className='font-semibold font-Inter text-[#ffffff] text-[24px]'>
                                Upcoming Meetings
                            </h1>
                            <IoMdArrowRoundForward  className='text-[#ffffff]'/>
                        </div>  
                        {/* ----------------------------------------------- */}
                        <div className='flex flex-col gap-[1rem] '>
                            {
                                UpcomingMeetings.map((meets,index)=>{
                                    return(
                                        <div key={index} className=' py-[.5rem] px-[1rem] bg-[#374868] rounded-[10px]'>

                                            <div className='w-full  flex flex-col items-start'>
                                                <h1 className='font-medium font-Inter text-[16px] text-[#ffffff]'>{meets.title}</h1>
                                                <h2 className='font-Inter font-normal text-[12px] text-[#ffffff]'>{meets.DateTime}</h2>
                                            </div>

                                           

                                        </div>
                                    )
                                })
                            }
                        </div>


                    </div>
            </div>
        {/* ------------------------------------------------- */}
            {/* --------------------------Invite requests--------------------------------------- */}
            <div className='w-[33%] p-[2rem] flex flex-col gap-[1rem] bg-[#1e2d4a] rounded-[10px]'>
                <div className='flex items-center justify-between cursor-pointer '
                onClick={()=>{
                    navigate('/contentcraft/collaborate')
                    dispatch(setcurrCollaborateSidebarOptions('Add Collaborator'))
                    dispatch(setcurrAddCollaborationOptions('Invite Requests'))
                }}
                >
                    <h1 className='font-semibold font-Inter text-[#ffffff] text-[24px]'>
                        Invite Requests
                    </h1>
                    <IoMdArrowRoundForward  className='text-[#ffffff]'/>
                </div>
                {/* ------------------------ */}
                <div className='flex flex-col gap-[1rem]'>
                    {
                            inviteRequests.map((invitations,index)=>{
                                return(
                                    <div key={index} className=' py-[.5rem] px-[1rem] bg-[#374868] rounded-[10px] flex items-center justify-between'>

                                            <div className='flex items-center gap-[1rem]'>
                                                <div className='w-[50px] h-[50px] rounded-full bg-red-900 border-[1px] border-white overflow-hidden'>
                                                    <img src={invitations.img} alt="" className='w-[100%] h-[100%] object-fit' />
                                                </div>
                                                <div className='font-Inter text-[#ffffff]'>
                                                    <h1 className='font-medium text-[16px]'>{invitations.name}</h1>
                                                    <h2 className='font-extralight text-[12px]'>{invitations.desn}</h2>
                                                </div>
                                            </div>

                                            <button className='p-[.1rem] px-[1rem] rounded-[20px] bg-[#ff7643] font-Inter text-[#ffffff] font-semibold text-[16px]'>
                                                Accept
                                            </button>

                                    </div>
                                )
                            })
                        }
                </div>
            </div>

        </div>
        {/* ------------------------------------------Section-3-end--------------------------------------------------------------- */}

      
    </div>
  )
}

export default ProfileWeb
