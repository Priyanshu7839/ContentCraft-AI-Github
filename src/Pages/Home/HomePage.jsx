import React from 'react'
import { HomePageImg1,HomePageImg2,HomePageImg3,HomePageImg4,HomePageImg5,HomePageImg6,HomePageImg7,HomePageImg8
    ,LandingPageImg1,LandingPageImg2,LandingPageImg3,LandingPageImg4
 } from '../../assets'
import { useNavigate } from 'react-router-dom';
import { setcurrAICustomModelOption } from '../../Store/Slices/AICustomModelOptionsSlice';
import { setcurrNavbarElements } from '../../Store/Slices/NavbarElementsSlice';
import { setcurrCollaborateSidebarOptions } from '../../Store/Slices/CollaborateSidebarOptionsSlice';
import { useDispatch } from 'react-redux';



const HomePage = () => {
    
    const dispatch = useDispatch()

    const Navigate = useNavigate();

    const featuresArray = [
        {
            featureImg:HomePageImg1,
            featureName:"AI Creation",
            featurePath:'/contentcraft/CreateWithAI'
        },
        {
            featureImg:HomePageImg2,
            featureName:"AI Consulting",
            featurePath:'/contentcraft/ConsultWithAI'
        },
        {
            featureImg:HomePageImg3,
            featureName:"Collaborate",
            featurePath:'/contentcraft/collaborate'
        },
        {
            featureImg:HomePageImg4,
            featureName:"AI Custom Model",
            featurePath:'/contentcraft/AICustomModel'
        },
        {
            featureImg:HomePageImg5,
            featureName:"Add Content",
            featurePath:'/contentcraft/collaborate'
        },
        {
            featureImg:HomePageImg6,
            featureName:"Schedule Meeting",
            featurePath:'#'
        },
        {
            featureImg:HomePageImg7,
            featureName:"Explore Content",
            featurePath:'#'
        },
        {
            featureImg:HomePageImg8,
            featureName:"Dashboard",
            featurePath:'/contentcraft/AICustomModel'
        },
        
    ]

    const FeaturedContentArray = [
        {
            Name:'Featured Project',
            desc:'Discover outstanding projects currently in the spotlight.',
            projects:[
               { Name:'Project 1',
                desc:'Project 1 Desc'
                },
               { Name:'Project 2',
                desc:'Project 2 Desc'
                },
               { Name:'Project 3',
                desc:'Project 3 Desc'
                },

            ]
        },
        {
            Name:'Featured Documents',
            desc:'Engage with noteworthy documents that share valuable insights.',
            projects:[
               { Name:'Documents 1',
                desc:'Documents 1 Desc'
                },
               { Name:'Documents 2',
                desc:'Documents 2 Desc'
                },
               { Name:'Documents 3',
                desc:'Documents 3 Desc'
                },

            ]
        },
        {
            Name:'Featured Resources',
            desc:'Explore resources that enhance your workflow and knowledge.',
            projects:[
               { Name:'Resources 1',
                desc:'Resources 1 Desc'
                },
               { Name:'Resources 2',
                desc:'Resources 2 Desc'
                },
               { Name:'Resources 3',
                desc:'Resources 3 Desc'
                },

            ]
        }
    ]

  return (
    <div className='homePage bg-[#06142e]'>
        {/* ---------------------------------------------------Section-1------------------------------------------------------ */}
       <div className='w-full p-[1rem]  border-b-[1px] border-[#374868] '>
            <h1 className='font-Inter text-[28px] font-semibold text-[#FFFFFF]'> <span className='text-[#ff7643]'>Welcome</span> Trafalgar</h1>

            <h4 className='font-Inter text-[16px] font-medium text-[#FFFFFF]'>Engage in productive collaboration with ContentCraft AI. ContentCraft-AI  is your collaborative workspace where ideas come to life. Explore, 
                create, and collaborate seamlessly to elevate your projects.</h4>

            <div className=' p-[2rem] flex flex-wrap gap-[1rem] w-full items-center justify-between cursor-pointer '
            
            >
                
               { featuresArray.map((names, index)=>{
                    return (
                       <div key={index} className='p-[1rem] w-[23%] flex flex-col items-center gap-[.5em] border-[2px] border-[#ff7643] rounded-[10px] bg-[#374868]'
                       onClick={()=>{
                        Navigate(`${names.featurePath}`)

                        if(names.featureName==='AI Custom Model'){
                            dispatch(setcurrAICustomModelOption('Build Model'));
                            
                        }
                        
                        if (names.featureName === "Dashboard") {
                            dispatch(setcurrAICustomModelOption('DashBoard'));
                            dispatch(setcurrNavbarElements('DashBoard'))
                            
                        }
                        if(names.featureName === 'Collaborate'){
                            dispatch(setcurrNavbarElements('Collaborate'))
                            dispatch(setcurrCollaborateSidebarOptions('Add Collaborator'))
                        }
                        if(names.featureName === 'Add Content'){
                            dispatch(setcurrNavbarElements('Collaborate'))
                            dispatch(setcurrCollaborateSidebarOptions('Add Content'))

                        }

                    
                    }}
                       >
                            <img src={names.featureImg} alt="" className='w-[40%]' />
                            <h1 className='font-Inter font-semibold text-[#FFFFFF] text-[18px]'>{names.featureName}</h1>
                       </div>
                    )
                })}

            </div>
       </div>
        {/* ---------------------------------------------------Section-1-End-------------------------------------------------- */}
        {/* ---------------------------------------------------Section-2------------------------------------------------------ */}
        <div className='w-full p-[1rem] border-b-[1px] border-[#374868] flex flex-col gap-[2rem]'>
            <h1 className='font-Inter font-semibold text-[28px] text-[#ffffff]'>
                <span className='text-[#ff7643]'>Revolutionizing</span> Your Content Creation
            </h1>

            <div className='w-full px-[1rem] py-[2rem]  bg-[#374868] border-[2px] border-[#ff7643] flex'>

                <div className='w-[70%] flex flex-col gap-[2rem]'>

                     <h3 className='font-Inter text-[16px] font-semibold text-[#ffffff]'>
                       <span className='text-[#ff7643]'> Unlock the power of AI</span> for seamless and impactful content creation. Our platform 
                        combines <span className='text-[#ff7643]'>human-like creativity with machine efficiency</span> to:
                    </h3>

                    <ul className='list-disc font-Inter font-semibold text-[16px] pl-[1rem] text-[#ffffff]'>
                        <li >
                            Generate Engaging Content
                        </li>
                        <li >
                            Enhance Collaboration
                        </li>
                        <li>
                            Boost Productivity
                        </li>
                        
                    </ul>

                    <h3 className='font-Inter text-[16px] font-semibold text-[#ffffff]'>
                        Customize, automate, and optimize your content creation process with <span className='text-[#ff7643]'>ContentCraft AI</span>. 
                        Elevate your creativity, streamline teamwork, and supercharge productivity. 
                        <span className='text-[#ff7643]'>Welcome to the future of content!</span>
                    </h3>

               
                <div className='w-full'>

                    <button className='font-Inter font-semibold text-[#ffffff] text-[16px] bg-[#ff7643] py-[.5rem] px-[2rem] rounded-[20px]'
                    onClick={()=>{Navigate('/contentcraft/CreateWithAI')}}
                    >
                       Explore AI-Driven Content Today!
                    </button>

                </div>
            </div>

                {/* ------------------------------------------------section2-image---------------------------------------------- */}
                <div className='w-[30%] flex items-center justify-center'>

                    <img src={LandingPageImg1} alt="" className='w-[80%]' />

                </div>
                {/* ------------------------------------------------section2-image-End------------------------------------------- */}





            </div>

        </div>
        {/* ---------------------------------------------------Section-2-End-------------------------------------------------- */}
        {/* ---------------------------------------------------Section-3------------------------------------------------------ */}
        <div className='w-full p-[1rem] border-b-[1px] border-[#374868]  flex flex-col gap-[2rem]'>
            <h1 className='font-Inter font-semibold text-[28px] text-[#ffffff]'>
                Your Path to <span className='text-[#ff7643]'>Intelligent Solutions</span>
            </h1>

            <div className='w-full px-[1rem] py-[2rem]  bg-[#374868] border-[2px] border-[#ff7643] flex'>

                <div className='w-[70%] flex flex-col gap-[2rem]'>

                     <h3 className='font-Inter text-[16px] font-semibold text-[#ffffff]'>
                    <span className='text-[#ff7643]'> Embark on a journey of AI-driven innovation</span> with our expert consultation services. 
                    Our team of seasoned <span className='text-[#ff7643]'>AI professionals</span> is dedicated to:
                    </h3>

                    <ul className='list-disc font-Inter font-semibold text-[16px] pl-[1rem] text-[#ffffff]'>

                        <li className='text-[#ff7643] '>
                            Crafting Tailored Solutions:  
                        </li>
                        <h1>
                            Understand your unique needs and design AI solutions that align with your goals.
                        </h1>
                        <li   className='text-[#ff7643] '>
                            Driving Data-Driven Decisions:  
                        </li>
                        <h1>
                            Harness the power of data analytics and AI insights to guide strategic decision-making.
                        </h1>
                        <li  className='text-[#ff7643] '>
                            Empowering Your Team: 
                        </li>
                        <h1>
                            Provide training and support to empower your team in leveraging AI technologies.
                        </h1>
                        <li  className='text-[#ff7643] '>
                            Optimizing Processes: 
                        </li>
                        <h1>
                            Streamline workflows, automate tasks, and boost overall team productivity.
                        </h1>
                        
                    </ul>

                   

                    <div className='w-full'>

                        <button className='font-Inter font-semibold text-[#ffffff] text-[16px] bg-[#ff7643] py-[.5rem] px-[2rem] rounded-[20px]'
                        onClick={()=>{Navigate('/contentcraft/ConsultWithAI')}}
                        
                        >
                            Start Consulting Now !  
                        </button>

                    </div>
                </div>

                {/* ------------------------------------------------section3-image---------------------------------------------- */}
                <div className='w-[30%] flex items-center justify-center'>

                    <img src={LandingPageImg2} alt=""  className='w-[80%]'/>

                </div>
                {/* ------------------------------------------------section3-image-End------------------------------------------- */}


    




            </div>

        </div>
        {/* ---------------------------------------------------Section-3-End-------------------------------------------------- */}
        {/* ---------------------------------------------------Section-4------------------------------------------------------ */}
        <div className='w-full p-[1rem] border-b-[1px] border-[#374868]  flex flex-col gap-[2rem]'>
            <h1 className='font-Inter font-semibold text-[28px] text-[#ffffff]'>
            <span className='text-[#ff7643]'> Revolutionize Collaboration</span> With contentcraft AI.
            </h1>

            <div className='w-full px-[1rem] py-[2rem]  bg-[#374868] border-[2px] border-[#ff7643] flex '>

                <div className='w-[70%] flex flex-col gap-[2rem]'>

                     <h3 className='font-Inter text-[16px] font-semibold text-[#ffffff]'>
                     Elevate teamwork and productivity with our <span className='text-[#ff7643]'>collaborative AI platform:</span>
                    </h3>

                    <ul className='list-disc font-Inter font-semibold text-[16px] pl-[1rem] text-[#ffffff]'>
                        <li className='text-[#ff7643] '>
                             Real-Time Collaboration: 
                        </li>
                        <h1>
                             Seamless communication and sharing for efficient project collaboration.
                        </h1>
                        <li   className='text-[#ff7643] '>
                            Task Assignment and Tracking: 
                        </li>
                        <h1>
                            Assign tasks, track progress, and achieve milestones effortlessly.
                        </h1>
                        <li  className='text-[#ff7643] '>
                             AI-Enhanced Brainstorming: 
                        </li>
                        <h1>
                            Unleash creative potential with AI-driven ideation and content refinement.
                        </h1>
                        <li  className='text-[#ff7643] '>
                            Enhanced Productivity: 
                        </li>
                        <h1>
                            Streamline workflows, automate tasks, and boost overall team productivity.
                        </h1>
                        
                    </ul>

                   

                    <div className='w-full'>

                        <button className='font-Inter font-semibold text-[#ffffff] text-[16px] bg-[#ff7643] py-[.5rem] px-[2rem] rounded-[20px]'
                        onClick={()=>{Navigate('/contentcraft/collaborate')}}
                        
                        >
                        Start Collaborating with AI Today!
                        </button>

                    </div>
                </div>

                {/* ------------------------------------------------section4-image---------------------------------------------- */}
                <div className='w-[30%] flex items-center justify-center'>

                    <img src={LandingPageImg4} alt="" className='w-[80%]'/>

                </div>
                {/* ------------------------------------------------section4-image-End------------------------------------------- */}





            </div>

        </div>
        {/* ---------------------------------------------------Section-4-End-------------------------------------------------- */}
     
        {/* ---------------------------------------------------Section-5------------------------------------------------------ */}
        <div className='w-full p-[1rem] border-b-[1px] border-[#374868]  flex flex-col gap-[2rem]'>
            <h1 className='font-Inter font-semibold text-[28px] text-[#ffffff]'>
            Empowering Success Through  <span className='text-[#ff7643]'>Customized AI Models.</span>
            </h1>

            <div className='w-full px-[1rem] py-[2rem]  bg-[#374868] border-[2px] border-[#ff7643] flex '>

                <div className='w-[70%] flex flex-col gap-[2rem]'>

                     <h3 className='font-Inter text-[16px] font-semibold text-[#ffffff]'>
                         Transform your business with our <span className='text-[#ff7643]'>AI Custom Model services</span>, designed to:
                    </h3>

                    <ul className='list-disc font-Inter font-semibold text-[16px] pl-[1rem] text-[#ffffff]'>
                        <li className='text-[#ff7643] '>
                            Meet Unique Requirements:  
                        </li>
                        <h1>
                            Craft bespoke AI models to address your specific business challenges.
                        </h1>
                        <li   className='text-[#ff7643] '>
                             Optimize Performance: 
                        </li>
                        <h1>
                            Fine-tune models for maximum efficiency, accuracy, and scalability.
                        </h1>
                        <li  className='text-[#ff7643] '>
                            Seamless Integration: 
                        </li>
                        <h1>
                            Integrate custom models seamlessly into your existing workflows..
                        </h1>
                        <li  className='text-[#ff7643] '>
                            Continuous Improvement: 
                        </li>
                        <h1>
                            Implement ongoing improvements based on real-world feedback and data.
                        </h1>
                        
                    </ul>

                   

                    <div className='w-full'>

                        <button className='font-Inter font-semibold text-[#ffffff] text-[16px] bg-[#ff7643] py-[.5rem] px-[2rem] rounded-[20px]'
                        onClick={()=>{
                            Navigate('/contentcraft/AICustomModel')
                            dispatch(setcurrAICustomModelOption('Build Model'))
                            
                        }}
                        
                        >
                            Explore AI Custom Models Now!
                        </button>

                    </div>
                </div>

                {/* ------------------------------------------------section5-image---------------------------------------------- */}
                <div className='w-[30%] flex items-center justify-center'>

                    <img src={LandingPageImg3} alt=""  className='w-[80%]'/>

                </div>
                {/* ------------------------------------------------section5-image-End------------------------------------------- */}





            </div>

        </div>
        {/* ---------------------------------------------------Section-5-End-------------------------------------------------- */}

        {/* ---------------------------------------------------Section-6------------------------------------------------------ */}
        <div className='w-full p-[1rem] pb-[3rem] flex flex-col gap-[2rem]'>

            <div className='w-full flex flex-col'>
                <h1 className='font-Inter font-semibold text-[28px] text-[#ffffff] '>
                    <span className='text-[#ff7643]'>Featured</span> Content
                </h1>
                <h2 className='font-Inter font-medium text-[16px] text-[#ffffff]'>
                    Explore the curated collection of content that <span className='text-[#ff7643]'>inspires and informs.</span>
                </h2>
            </div>

            <div className='w-full flex items-center justify-evenly'>

                {
                    FeaturedContentArray.map((feature,index)=>{
                        return (
                            <div className='flex flex-col w-[20%] p-[1rem] gap-[1rem] bg-[#374868] rounded-[10px] border-[2px] border-[#ff7643]' key={index}>
                                <div>
                                    <h1 className='font-Inter font-semibold text-[22px] text-[#ffffff]'>{feature.Name}</h1>
                                    <h2 className='font-Inter font-medium text-[14px]  text-[#ffffff]'>{feature.desc}</h2>
                                </div>
                                {
                                    feature.projects.map((feat,indes)=>{
                                        return (
                                            <div key={indes} className='bg-[#ffffff] p-[1rem] rounded-[10px]'>
                                                <h1 className='font-Inter font-semibold text-[16px]'>{feat.Name}</h1>
                                                <h2 className='font-Inter font-normal text-[12px]'>{feat.desc}</h2>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }

            </div>

        </div>
        {/* ---------------------------------------------------Section-6-End-------------------------------------------------- */}
     
    </div>
  )
}

export default HomePage
