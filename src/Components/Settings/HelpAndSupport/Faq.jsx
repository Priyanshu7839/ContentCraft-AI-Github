import React, { useState } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { setcurrHelpAndSupportOptions } from '../../../Store/Slices/HelpAndSupportOptionsSlice';




const Faq = () => {
  const [panel, setPanel] = useState('');
  console.log(panel)
  const dispatch = useDispatch();

  const faqQuestions = [
    {
      ques: 'How do I create a new project?',
      ans: ' To create a new project, go to the main screen, click on the "+" button, and follow the prompts to set up your project details'
    },
    {
      ques:'Can I collaborate with others on a project?',
      ans:'Yes, you can! Invite collaborators to your project by navigating to the project details and selecting the "Collaborate" option.'
    },
    {
      ques:'What types of content can I generate with this AI?',
      ans:'Our AI can generate various types of content, including blog posts, articles, and social media posts. Choose the content type when using the content creation tools.'
    },
    {
      ques:'How do I change my account password?',
      ans:'Navigate to the account settings, select the "Security" tab, and choose the option to change your password. Follow the instructions to update your password.'
    }
  ]
  return (
    <div className=' min-h-[100vh]'>

      {/* --------------------------------------------Faq--------------------------------- */}


      <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
        <div className='w-full flex items-center gap-[1rem] cursor-pointer'
          onClick={() => { dispatch(setcurrHelpAndSupportOptions('')) }}
        >
          <IoMdArrowRoundBack className='text-[30px]' />

          <h1 className='font-semibold text-[26px]'>FAQs</h1>

        </div>
        {/* ---------------------------------------------------- */}
        <div className='w-full flex flex-col gap-[1rem]'>
          {
            faqQuestions.map((quest, index) => {

              return (

                <div className='p-[2rem] bg-[#374868] flex flex-col gap-[2rem] rounded-[10px] cursor-pointer'
                  key={index}
                  onClick={() => {
                    setPanel(index)
                  }}
                >

                  <div className='flex items-center justify-between w-full'>
                    <h1 className='font-Inter font-normal text-[20px]'>{quest.ques}</h1>

                    {panel === index ?
                      (
                        <FaMinus className='text-[24px]' />
                      ) :
                      (
                        <FaPlus className='text-[24px]' />
                      )




                    }
                  </div>


                  {
                    panel === index &&

                    <>
                      <p className='font-Inter font-normal text-[18px] '>
                        To create a new project, go to the main screen, click on the "+" button, and follow the prompts to set
                        up your project details
                      </p>
                    </>
                  }

                </div>
              )
            })}

        </div>
      </div>

    </div>

  )
}

export default Faq


