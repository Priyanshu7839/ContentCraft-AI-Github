import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import testData from '../../Data/testData.json';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setCurrPanel } from '../../Store/Slices/settingSidebarSlice';
import { setcurrNavbarElements } from '../../Store/Slices/NavbarElementsSlice';



const PercentageRing = ({ percentage }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    

    return (
        <div className="w-fit">
            <svg width="60" height="60" className="transform-rotate-90">
                <circle
                    className="text-[#06142E]"
                    strokeWidth="7.5" 
                    stroke="currentColor"
                    fill="transparent"
                    r={radius / 2} // Half of the original radius
                    cx="30" // Half of 60
                    cy="30" // Half of 60
                />
                <circle
                    className="text-[#ff7643]"
                    strokeWidth="7.5" 
                    strokeDasharray={circumference / 2} // Adjust to match the new radius
                    strokeDashoffset={offset / 2} // Adjust to match the new radius
                    stroke="currentColor"
                    fill="transparent"
                    r={radius / 2} // Half of the original radius
                    cx="30" // Half of 60
                    cy="30" // Half of 60
                />
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    style={{ fill: '#ffffff', fontSize: '10px' }} // Reduce font size to fit the smaller circle
                >
                    {percentage}%
                </text>
            </svg>
        </div>

    );
};



const Dashboard = () => {

    const ModelPerformancePercentage = [
        {
            name: "Accuracy",
            percentage: 80
        },
        {
            name: "Precision",
            percentage: 70
        },
        {
            name: "Recall",
            percentage: 85
        },
        {
            name: "F1 score",
            percentage: 65
        },

    ]

    const DashboardButtons = [{
        name:'Create New Content',
        path:'/contentcraft/CreateWithAI',
         navElement:''
    }, 
    {
        name:'Settings',
        path:'/contentcraft/settings',
        navElement:'Settings'
    },
    {
        name:'Help And Support',
        path:'/contentcraft/settings',
        navElement:'Settings'
    },
    {
        name:'Logout',
        path:'',
         navElement:'Settings'
    }
    ];

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (


        <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff] min-h-[100vh]'>


            <div className='p-[2rem] bg-[#37486873] flex flex-col gap-[1rem] rounded-[10px]'>
                <h1 className='text-[28px] font-semibold'>Summary Statistics</h1>

                <div className='w-full flex gap-[1rem]'>
                    {/* ------------------Div 1------------------------------- */}
                    <div className='w-[50%] flex flex-col gap-[1rem]'>
                        {/* ------------Performance Metrics--------------- */}
                        <div className='flex flex-col gap-[.5rem]'>
                            <h1 className='text-[20px] font-medium'>Performance Metrics</h1>
                            <div className='bg-[#374868] w-full flex p-[1rem]  items-center justify-between rounded-[5px]'>
                                {
                                    ModelPerformancePercentage.map((performances, index) => {
                                        return (
                                            <div className='flex flex-col items-center justify-center gap-[.5rem]'>
                                                <PercentageRing percentage={performances.percentage} />
                                                <h1 className='font-semibold font-Inter text-[#ffffff] text-[16px]'>{performances.name}</h1>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {/* --------------Trends And Insights------------- */}
                        <div className='flex flex-col gap-[.5rem]'>
                            <h1 className='text-[20px] font-medium'> Trends And Insights</h1>
                            <div className='p-[1rem] bg-[#374868] rounded-[5px] flex flex-col gap-[1rem]'>
                                <h1 className='text-[18px] font-medium'>Content Relevance Trends</h1>
                                <div className='bg-[#fff] rounded-[5px]'>
                                    <Line

                                        data={{
                                            labels: testData.map((data) => data.label),
                                            datasets: [
                                                {
                                                    label:'',
                                                    data: testData.map((data) => data.revenue),
                                                    backgroundColor: '#1f77b4',
                                                    borderColor: '#1f77b4',
                                                    borderWidth:1,
                                                  
                                                }
                                            ]
                                        }}

                                    />
                                   
                                </div>
                                <ul className='text-[18px] font-medium'>
                                        <h1 className='mb-[1rem]'>Top Categories Based on Relevance :</h1>

                                        <li className='text-[16px] font-normal'>1.Technology</li>
                                        <li className='text-[16px] font-normal'>2.science</li>
                                        <li className='text-[16px] font-normal'>3.Art</li>
                                 </ul>
                            </div>
                        </div>

                    </div>
                    {/* ------------------Div 1-end--------------------------- */}
                    {/* ------------------Div 2------------------------------- */}
                    <div className='w-[50%] flex flex-col  gap-[3rem]'>
                        {/* ---------Content Analysis---------------- */}
                        <div className='flex flex-col gap-[.5rem]'>
                            <h1 className='text-[20px] font-medium'>
                                Content Analysis
                            </h1>
                            <div className='w-full flex flex-col p-[1rem] bg-[#374868] rounded-[5px] gap-[1rem]'>
                                <h1 className='text-[18px] font-normal'>Total content Analyzed : <span className='font-medium'>10,000</span></h1>
                                <div className='flex flex-col gap-[.5rem]'>
                                    <h1 className='text-[18px] font-normal'>Revalant Content Percentage : <span className='font-medium'>75%</span>
                                    </h1>
                                    <div className='w-full h-[15px] bg-[#06142E] rounded-full'>
                                        <div className='h-[15px] bg-[#ff7643] rounded-full' style={{ width: `50%` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[1rem]'>
                            {
                            DashboardButtons.map((buttons, index) => {
                                return (
                                    <div key={index} className='bg-[#374868] flex items-center justify-between px-[1rem] py-[.5rem] rounded-[5px] cursor-pointer'
                                    onClick={()=>{
                                        navigate(`${buttons.path}`)
                                        dispatch(setcurrNavbarElements(`${buttons.navElement}`))

                                        if(buttons.name=== 'Help And Support'){
                                            dispatch(setCurrPanel('Help And Support'))
                                        }
                                        
                                    }}
                                    >
                                        <h1 className='text-[18px] font-normal'>{buttons.name}</h1>

                                        <IoIosArrowForward />
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                    {/* ------------------Div-2-end--------------------------- */}


                </div>
            </div>
        </div>

    )
}

export default Dashboard
