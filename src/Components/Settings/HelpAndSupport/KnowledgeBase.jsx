import React,{useState} from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { setcurrHelpAndSupportOptions } from '../../../Store/Slices/HelpAndSupportOptionsSlice';

const KnowledgeBase = () => {
    const [panel, setPanel] = useState('');
    console.log(panel)
    const dispatch = useDispatch();
    
    const faqQuestions = [
      {
        ques: 'Getting Started',
        ans: 'Introduction to the AI Content Catalyst app, account setup, and basic features.'
      },
      {
        ques:'Content Creation',
        ans:'Guides and tutorials on using AI for content creation, writing tips, and creative strategies.'
      },
      {
        ques:'Collaboration',
        ans:'Information on collaborating with others, sharing projects, and working on content together.'
      },
      {
        ques:'Troubleshooting',
        ans:'Common issues and solutions, FAQs, and troubleshooting tips.'
      }
    ]
    return (
      <div className=' min-h-[100vh]'>
    
        {/* --------------------------------------------Knowledge Base--------------------------------- */}
    
    
        <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
          <div className='w-full flex items-center gap-[1rem] cursor-pointer'
            onClick={() => { dispatch(setcurrHelpAndSupportOptions('')) }}
          >
            <IoMdArrowRoundBack className='text-[30px]' />
    
            <h1 className='font-semibold text-[26px]'>Knowledge Base</h1>
    
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

export default KnowledgeBase
