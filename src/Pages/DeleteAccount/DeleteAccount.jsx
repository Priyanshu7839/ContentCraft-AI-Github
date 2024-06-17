import React from 'react'
import { Link } from 'react-router-dom'
import { setCurrPanel } from '../../Store/Slices/settingSidebarSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setcurrNavbarElements } from '../../Store/Slices/NavbarElementsSlice'

const DeleteAccount = () => {
  
    const navigate = useNavigate();

    const dispatch = useDispatch();

  return (
    <div className='font-Inter text-[#ffffff] flex flex-col gap-[2rem] p-[4rem]'>
      <div className='flex flex-col gap-[.5rem]'>
        <h1 className='font-semibold text-[36px] text-[#ff7643]'>Delete Account</h1>
        <h2 className='font-semibold text-[24px] text-[#ff7643]'>⚠️ Warning: Deleting Your Account</h2>
      </div>

      <ul className='flex flex-col gap-[1rem] font-semibold text-[18px]'>
        <h1 className='font-semibold text-[18px]'>Deleting your account is a significant action with irreversible consequences. Before you proceed, please take a moment to consider the following:
        </h1>

        <li >
            1.  Irreversible Action: 
            <span className="font-light">Deleting your account will permanently erase all of your data, including saved projects, preferences, and any personalized content. This process cannot be undone, and the information cannot be recovered.</span>
        </li>
        
        <li>
            2. Access Loss: 
            <span className="font-light">Once your account is deleted, you will lose access to all features, historical data, and any premium or personalized content associated with your account.</span>
        </li>

        <li>
          3. Collaboration Impact: 
          <span className="font-light">If you are part of any collaborative projects or shared content, your contributions will be removed, and ongoing collaborations may be affected.</span>
        </li>

        

        <p className='font-normal text-[#ff7643]'>
        By confirming the deletion of your account, you acknowledge and accept these consequences. Please proceed only if you are certain about this decision.
        </p>

    

      </ul>

     
      <div className='flex items-center gap-[2rem]'>
        <button onClick={
            ()=>{
                navigate('/contentcraft/settings')

                dispatch(setCurrPanel('Privacy'))

                dispatch(setcurrNavbarElements('Settings'))}}

            className='w-[30%] px-[5rem] py-[.3rem] border-[1px] border-[#ff7643] flex items-center justify-center text-[#ff7643] rounded-full font-semibold'>
                Cancel
        </button>

        <button onClick={
            ()=>{
                navigate('/contentcraft/settings')

                dispatch(setCurrPanel('Privacy'))

                dispatch(setcurrNavbarElements('Settings'))}}

            className='w-[30%] px-[5rem] py-[.3rem] border-[1px] border-[#ff7643] flex items-center justify-center text-[#fff] rounded-full bg-[#ff7643] font-semibold'>
                Delete Account
        </button>
      </div>
      


    </div>
  )
}

export default DeleteAccount
