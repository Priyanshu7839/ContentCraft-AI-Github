import React, { useState } from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import {UserImg} from '../../assets'
import { setcurrNavbarElements, } from '../../Store/Slices/NavbarElementsSlice';
import { setcurrAICustomModelOption } from '../../Store/Slices/AICustomModelOptionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {ProfileSidebar} from '../index';


const Header = () => {
    const [isLoggedIn,SetisLoggedIn] = useState(true);
    const dispatch = useDispatch();
    const currNavbarElements = useSelector((state)=>state.NavbarElements.currNavbarElements);
    const navigate = useNavigate();

    const[showProfileSidebar,setshowProfileSidebar] = useState(false);

    const Userdata = useSelector((state)=>state.UserData.UserData);

 

  return (
   <div className="navbar bg-[#06142E] w-full px-[2rem] py-[.5rem] flex items-center justify-between   ">

    {/* --------------------------------------------------------------------------------------------------------------- */}
        <div className='flex items-center gap-[1rem]'>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="5" y1="20.5" x2="34" y2="20.5" stroke="#FF7643"/>
                <path d="M26 32.5H39L50 40H75" stroke="#FF7643"/>
                <path d="M26 58.5H38.5L49.5 51L74.5 51" stroke="#FF7643"/>
                <line x1="5" y1="45.5" x2="30" y2="45.5" stroke="#FF7643"/>
                <line x1="58" y1="29.5" x2="75" y2="29.5" stroke="#FF7643"/>
                <rect x="34.5" y="16.5" width="8" height="8" rx="4" stroke="#FF7643"/>
                <rect x="49.5" y="25.5" width="8" height="8" rx="4" stroke="#FF7643"/>
                <rect x="17.5" y="28.5" width="8" height="8" rx="4" stroke="#FF7643"/>
                <rect x="30.5" y="41.5" width="8" height="8" rx="4" stroke="#FF7643"/>
                <rect x="17.5" y="54.5" width="8" height="8" rx="4" stroke="#FF7643"/>
            </svg>

            <h1 className='font-normal font-Inter leading-[43.67px] text-[24px] text-[#FFFFFF]'>ContentCraft AI</h1>
        </div>
    {/* --------------------------------------------------------------------------------------------------------------- */}

{
    isLoggedIn
    ?
    <>
    {/* --------------------------------------------------------------------------------------------------------------- */}

       <ul className='flex items-center gap-[2rem]  font-Inter  cursor-pointer'>
        <li
        onClick={()=>{
            dispatch(setcurrNavbarElements('Home'));
            navigate('/')
        }}
        className={`${currNavbarElements==='Home'?'text-[#ff7643] font-semibold':'text-[#ffffff] font-normal'}`}
        >
            Home
        </li>
        <li
        onClick={()=>{
            dispatch(setcurrNavbarElements('DashBoard'));
            dispatch(setcurrAICustomModelOption('DashBoard'))
            navigate('/contentcraft/AICustomModel')
        }}
        className={`${currNavbarElements==='DashBoard'?'text-[#ff7643] font-semibold':'text-[#ffffff] font-normal'}`}

        >
            DashBoard
        </li>
        <li
            onClick={()=>{
                dispatch(setcurrNavbarElements('TaskManager'));
                navigate('/contentcraft/Taskmanager')
            }}
        className={`${currNavbarElements==='TaskManager'?'text-[#ff7643] font-semibold':'text-[#ffffff] font-normal'}`}

        >
            TaskManager
        </li>
        <li
            onClick={()=>{
                dispatch(setcurrNavbarElements('Collaborate'));
                navigate('/contentcraft/collaborate');
            }}
        className={`${currNavbarElements==='Collaborate'?'text-[#ff7643] font-semibold':'text-[#ffffff] font-normal'}`}

        >
            Collaborate
        </li>
        <li
            onClick={()=>{
                dispatch(setcurrNavbarElements('Settings'));
                navigate('/contentcraft/settings')
            }}
        className={`${currNavbarElements==='Settings'?'text-[#ff7643] font-semibold':'text-[#ffffff] font-normal'}`}

        >
            Settings
        </li>

       </ul>

    {/* --------------------------------------------------------------------------------------------------------------- */}




    {/* --------------------------------------------------------------------------------------------------------------- */}

       <div className='cursor-pointer flex gap-[1.5rem] items-center justify-center'
            onClick={()=>{
                setshowProfileSidebar(!showProfileSidebar);
            }}
       >
            <div className='rounded-full w-[56px] h-[56px] bg-red-400  overflow-hidden border-[1px] border-[#ff7643]'>

                <img src={UserImg} alt=""  className='w-[100%] h-[100%] object-fit'/>

            </div>
            <h1 className='font-Inter font-semibold text-[#FFFFFF] text-[16px]'>{Userdata.UserName}</h1>
       </div>

       {showProfileSidebar &&

            <div className='fixed top-0 right-0 '>      
              <ProfileSidebar setshowProfileSidebar={setshowProfileSidebar}/>
            </div>
       
       }

    {/* --------------------------------------------------------------------------------------------------------------- */}
    </>
    :
    <>
        <button onClick={()=>{SetisLoggedIn(true)}}
                className='py-[.5rem] px-[2rem] rounded-[10px] bg-[#FF7643] flex items-center justify-between gap-[.5rem] font-Inter font-semibold text-[16px] text-[#FFFFFF] '
        
        >
           Log in

            <FiArrowUpRight/>

        </button>
    </>

}
   </div>
  )
}

export default Header
