import React from 'react'
import { Link } from 'react-router-dom'
import { setCurrPanel } from '../../Store/Slices/settingSidebarSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setcurrNavbarElements } from '../../Store/Slices/NavbarElementsSlice'

const LogOutEveryWhere = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

  return (
    <div className='font-Inter text-[#ffffff] flex flex-col gap-[2rem] p-[4rem]'>
      <div className='flex flex-col gap-[.5rem]'>
        <h1 className='font-semibold text-[36px] text-[#ff7643]'>Log-Out Everywhere</h1>
        <h2 className='font-semibold text-[24px] text-[#ff7643]'>Warnings:-</h2>
      </div>

      <ul className='flex flex-col gap-[1rem] font-semibold text-[18px]'>
        <h1 className='font-semibold text-[18px]'>By proceeding with this action, you are about to log out of your ContentCraft AI account from all devices. This means you will be 
        signed out of the mobile app and any other sessions currently active, including web sessions on different devices.</h1>

        <h2 className='font-semibold text-[18px]'>Before you proceed, please consider the following:</h2>

        <li >
            1. Immediate Sign Out: 
            <span className='font-light'>You will be instantly signed out from all devices. Ensure that you have access to your account credentials for re-login if needed.</span>
        </li>
        
        <li>
            2. Ongoing Sessions:
            <span className='font-light'>If you have any unsaved work or ongoing tasks, they will be disrupted, and any changes made since your last save may be lost.</span>
        </li>

        <li>
          3. Connected Devices: 
          <span className='font-light'>If you are currently using multiple devices to access your account, they will all be logged out 
          simultaneously.</span>
        </li>

        <li>
           4. Re-authentication: 
           <span className='font-light'>After logging out everywhere, you will need to re-enter your credentials on each device to regain access to your account.</span>
        </li>

        <p className='font-light'>
        Please be absolutely certain that you want to proceed with this action. If you have any concerns or if your account security is at risk, we recommend changing your password instead of logging out everywhere.
        </p>

       <Link className='text-[#ff7643]'>Are you sure you want to log out from all devices?</Link>

      </ul>

     
      <button onClick={
        ()=>{
            navigate('/contentcraft/settings')


            dispatch(setCurrPanel('Privacy'))

            dispatch(setcurrNavbarElements('Settings'))

            

        }
      } className='w-[30%] px-[5rem] py-[.3rem] border-[1px] border-[#ff7643] flex items-center justify-center text-[#ff7643] rounded-full'>Cancel</button>
      


    </div>
  )
}

export default LogOutEveryWhere
