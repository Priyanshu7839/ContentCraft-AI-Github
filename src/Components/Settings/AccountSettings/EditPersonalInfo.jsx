import React, { useState } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";

import { useDispatch} from 'react-redux';
import { setcurrAccountSettingSlide } from '../../../Store/Slices/AccountSettingsSlice';
import { setUserData } from '../../../Store/Slices/UserDataSlice';


const EditPersonalInfo = () => {
    const dispatch = useDispatch();

    const initialValues = {
        firstName:'',
        lastName:'',
        desc:'',
        role:'',
        organisation:''

    }

    const [formValues,setformValues] = useState(initialValues);
    const [formErrors,setformErrors] = useState({});

    const handleChange = (e) => {
        const {name,value} = e.target;
        setformValues({...formValues,[name]:value})
    }

    const validate = (values) =>{
        const errors ={}

        if(!values.firstName){
            errors.firstName = 'Please Enter Your Name'
        }
         return errors
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validate(formValues);
        setformErrors(errors);

        if(Object.keys(errors).length === 0){
            console.log('Name',formValues.firstName + ' ' + formValues.lastName)
            console.log('Desc',formValues.desc);
            console.log('Role',formValues.role)
      
        //   dispatch(setUserData({
        //     UserName:formValues.firstName + ' ' + formValues.lastName,
        //     UserRole:formValues.role,
        //     UserDesc:formValues.desc,
        //     UserOrganisation:formValues.organisation
        //   }))

          setformValues(initialValues)
          }
    }


   
    

    return (
        <div className=' min-h-[100vh]'>


            {/* ------------------------------------------------------------------- */}
            <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
                <div className='w-full flex items-center gap-[1rem] cursor-pointer'
                    onClick={() => dispatch(setcurrAccountSettingSlide(''))}
                >
                    <IoMdArrowRoundBack className='text-[30px]' />

                    <h1 className='font-semibold text-[26px]'>Edit Personal Info</h1>

                </div>

                {/* ----------------------------Input Div----------------------------------- */}
                <form className='p-[2rem] w-full bg-[#374868] rounded-[10px] flex flex-col gap-[2rem]' onSubmit={handleSubmit}>

                    {/* ---------------Name Input------------------- */}
                    <div className='flex justify-between gap-[2rem] '>
                        <div className='w-[50%] flex flex-col gap-[.5rem]'>
                            <h1 className='font-Inter font-medium text-[18px]'>First Name*</h1>
                            <input
                                type="text"
                                placeholder='First Name Here...'
                                className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none'
                                name='firstName'
                                value={formValues.firstName}
                                onChange={handleChange}
                            />
                            {formErrors.firstName&& <p className='text-[#ff0000]'>{formErrors.firstName}</p>}
                        </div>
                       

                        <div className='w-[50%] flex flex-col gap-[.5rem]'>
                            <h1 className='font-Inter font-medium text-[18px]'>Last Name</h1>
                            <input type="text"
                                placeholder='Last Name Here...'
                                className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none' 
                                name='lastName'
                                value={formValues.lastName}
                                onChange={handleChange}
                                
                                />
                        </div>
                    </div>

                    {/* ----------------------desc-Input-------------------------------------- */}

                    <div className='flex flex-col gap-[.5rem]'>
                        <h1 className='font-Inter font-medium text-[18px]'>Description</h1>
                        <textarea  id="" rows="10" placeholder='Tell Us About You...' className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none'
                        name="desc"
                        value={formValues.desc}
                        onChange={handleChange}
                        ></textarea>

                    </div>

                    {/* ------------------------Oraganisation Name Input----------------------------------- */}

                    <div className='flex flex-col gap-[.5rem]'>
                        <h1 className='font-Inter font-medium text-[18px]'>Enter Oraganisation Name</h1>

                        <input type="text"
                            placeholder="Organsation Name"
                            className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none' 
                            name='organisation'
                            value={formValues.organisation}
                            onChange={handleChange}

                            />
                    </div>
                    {/* ------------------------New Role Input----------------------------------- */}

                    <div className='flex flex-col gap-[.5rem]'>
                        <h1 className='font-Inter font-medium text-[18px]'>Enter New Role</h1>

                        <input type="text"
                            placeholder="What's your role?"
                            className='w-[100%] text-[#000] p-[.5rem] rounded-[10px] border-none outline-none' 
                            name='role'
                            value={formValues.role}
                            onChange={handleChange}

                            />
                    </div>
                    {/* ----------------------------------Save Changes Button--------------------- */}
                    <div className='w-[50%] flex'>

                        <button type='submit'
                        className='w-[90%] p-[.5rem] bg-[#ff7643] rounded-[30px] font-Inter font-semibold text-[16px] text-center'>
                            Save Changes
                        </button>

                    </div>


                </form>
            </div>

        </div>
    )
}

export default EditPersonalInfo
