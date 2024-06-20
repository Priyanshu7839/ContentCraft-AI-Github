import React from 'react'
import { UserImg } from '../../assets'
import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { setcurrAccountSettingSlide } from '../../Store/Slices/AccountSettingsSlice';
import { setCurrPanel } from '../../Store/Slices/settingSidebarSlice';
import { setcurrNavbarElements } from '../../Store/Slices/NavbarElementsSlice';
import { useDispatch } from 'react-redux';



const ProfileSidebar = ({ setshowProfileSidebar }) => {
    const dispatch = useDispatch();

    const toggleSidebar = () => {
        setshowProfileSidebar(prevState => !prevState);
    };

    const navigate = useNavigate();


    return (
        <div className='w-[350px] h-[100vh] bg-[#374868] rounded-l-[10px] px-[2rem] py-[2rem]'>
            <div className='flex h-full flex-col justify-between'>

                {/* -------------------------------------------------------- */}
                <div className='flex flex-col gap-[3rem]'>
                    <div className='cursor-pointer flex gap-[1.5rem] items-center justify-center bg-[#06142e] py-[.5rem] rounded-[10px]'
                        onClick={toggleSidebar}
                    >
                        <div className='rounded-full w-[56px] h-[56px] bg-red-400  overflow-hidden border-[1px] border-[#ff7643]'>

                            <img src={UserImg} alt="" className='w-[100%] h-[100%] object-fit' />

                        </div>
                        <h1 className='font-Inter font-semibold text-[#FFFFFF] text-[16px]'>TrafalGar Law</h1>
                    </div>

                    <div className='flex flex-col gap-[.5rem]'>

                        {/* -------------------------------- */}
                        <div className='flex items-center justify-between bg-[#06142e] px-[2rem] py-[1rem] rounded-[10px] cursor-pointer'
                            onClick={() => {
                                navigate('/profile')
                                toggleSidebar()
                            }}
                        >
                            <div className='flex gap-[1rem] items-center'>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <h1 className='font-Inter font-normal text-[16px] text-[#ffffff]'>Profile Information</h1>
                            </div>

                            <IoMdArrowRoundForward className='text-[#ffffff]' />

                        </div>
                        {/* ----------------------------------- */}
                        {/* -------------------------------- */}
                        <div className='flex items-center justify-between bg-[#06142e] px-[2rem] py-[1rem] rounded-[10px] cursor-pointer'

                            onClick={() => {
                                navigate('/contentcraft/settings')
                                toggleSidebar()
                                dispatch(setcurrNavbarElements('Settings'));
                                dispatch(setCurrPanel('Account Settings'))
                                dispatch(setcurrAccountSettingSlide('Change Password'))
                            }}


                        >
                            <div className='flex gap-[1rem] items-center'>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.9983 1L17.9983 3M17.9983 3L20.9983 6L17.4983 9.5L14.4983 6.5M17.9983 3L14.4983 6.5M10.3883 10.61C10.9047 11.1195 11.3151 11.726 11.5961 12.3948C11.877 13.0635 12.0229 13.7813 12.0253 14.5066C12.0278 15.232 11.8867 15.9507 11.6102 16.6213C11.3338 17.2919 10.9274 17.9012 10.4145 18.4141C9.90155 18.9271 9.29224 19.3334 8.62162 19.6099C7.951 19.8864 7.23232 20.0275 6.50695 20.025C5.78159 20.0226 5.06386 19.8767 4.39511 19.5958C3.72636 19.3148 3.11979 18.9043 2.61032 18.388C1.60845 17.3507 1.05408 15.9614 1.06661 14.5193C1.07915 13.0772 1.65757 11.6977 2.67732 10.678C3.69706 9.65825 5.07653 9.07982 6.51861 9.06729C7.9607 9.05476 9.35001 9.60913 10.3873 10.611L10.3883 10.61ZM10.3883 10.61L14.4983 6.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>


                                <h1 className='font-Inter font-normal text-[16px] text-[#ffffff]'>Change Password</h1>
                            </div>

                            <IoMdArrowRoundForward className='text-[#ffffff]' />

                        </div>
                        {/* ----------------------------------- */}
                        {/* -------------------------------- */}
                        <div className='flex items-center justify-between bg-[#06142e] px-[2rem] py-[1rem] rounded-[10px] cursor-pointer'>
                            <div className='flex gap-[1rem] items-center'>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>


                                <h1 className='font-Inter font-normal text-[16px] text-[#ffffff]'>Favorites </h1>
                            </div>

                            <IoMdArrowRoundForward className='text-[#ffffff]' />

                        </div>
                        {/* ----------------------------------- */}
                    </div>
                </div>
                {/* -------------------------------------------------------- */}
                {/* -------------------------------------------------------- */}
                <div className='flex flex-col gap-[.5rem]'>
                    {/* ------------------------------------- */}
                    <div className='flex items-center justify-between bg-[#06142e] px-[2rem] py-[1rem] rounded-[10px] cursor-pointer'>
                        <div className='flex gap-[1rem] items-center'>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                            <h1 className='font-Inter font-normal text-[16px] text-[#ffffff]'>Terms And Conditions</h1>
                        </div>


                    </div>
                    {/* ------------------------------------- */}
                    {/* ------------------------------------- */}
                    <div className='flex items-center justify-between bg-[#06142e] px-[2rem] py-[1rem] rounded-[10px] cursor-pointer'>
                        <div className='flex gap-[1rem] items-center'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.58984 13.5098L15.4198 17.4898" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.4098 6.50977L8.58984 10.4898" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                            <h1 className='font-Inter font-normal text-[16px] text-[#ffffff]'>Share With Friends</h1>
                        </div>



                    </div>
                    {/* ------------------------------------- */}
                    {/* ------------------------------------- */}
                    <div className='flex items-center justify-between bg-[#06142e] px-[2rem] py-[1rem] rounded-[10px] cursor-pointer'>
                        <div className='flex gap-[1rem] items-center'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16 17L21 12L16 7" stroke="#FF7643" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21 12H9" stroke="#FF7643" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <h1 className='font-Inter font-normal text-[16px] text-[#ffffff]'>LogOut </h1>
                        </div>



                    </div>
                    {/* ------------------------------------- */}

                </div>
                {/* -------------------------------------------------------- */}
            </div>
        </div>
    )
}

export default ProfileSidebar
