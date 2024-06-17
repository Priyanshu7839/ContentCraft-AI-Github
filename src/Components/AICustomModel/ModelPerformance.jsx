import React from 'react';
import { IoMdArrowRoundBack,IoIosArrowForward  } from "react-icons/io";
import testData from '../../Data/testData2.json';
import { Line } from 'react-chartjs-2';


const PercentageRing = ({ percentage }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="w-fit">
            <svg width="60" height="60" className="transform-rotate-90">
                <circle
                    className="text-[#06142E]"
                    strokeWidth="7.5" // Half of 15 to maintain proportion
                    stroke="currentColor"
                    fill="transparent"
                    r={radius / 2} // Half of the original radius
                    cx="30" // Half of 60
                    cy="30" // Half of 60
                />
                <circle
                    className="text-[#ff7643]"
                    strokeWidth="7.5" // Half of 15 to maintain proportion
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


const ModelPerformance = ({ShowModelPerformance}) => {

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

    return (
        <div className='min-h-[100vh]'>

            {/* --------------------------------------------policy field--------------------------------- */}
            <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
                <div className='w-full flex items-center gap-[1rem] cursor-pointer'
                 onClick={ShowModelPerformance}
                >
                    <IoMdArrowRoundBack className='text-[30px]' />

                    <h1 className='font-semibold text-[26px]'>Model Performance</h1>

                </div>
                {/* ---------------------------------------------------- */}

                <div className='p-[2rem] bg-[#37486873] flex flex-col gap-[1rem] rounded-[10px]'>
                    <h1 className='text-[28px] font-semibold'>Content Relevance Classification</h1>

                    <div className='w-full flex gap-[1rem]'>
                        {/* ------------------Div 1------------------------------- */}
                        <div className='w-[50%] flex flex-col gap-[3rem]'>
                            {/* ------------Performance Metrics--------------- */}
                            <div className='flex flex-col gap-[.5rem]'>
                                <h1 className='text-[20px] font-medium'>Performance Metrics</h1>
                                <div className='bg-[#374868] w-full flex p-[1rem]  items-center justify-between rounded-[5px]'>
                                    {
                                        ModelPerformancePercentage.map((performances, index) => {
                                            return (
                                                <div className='flex flex-col items-center justify-center gap-[.5rem]'
                                                key={index}
                                                >
                                                    <PercentageRing percentage={performances.percentage} />
                                                    <h1 className='font-semibold font-Inter text-[#ffffff] text-[16px]'>{performances.name}</h1>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            {/* --------------Trends And Insights------------- */}
                            <div className='flex flex-col gap-[.5rem] '>
                                <h1 className='text-[20px] font-medium'> Recall-Precision Curve</h1>
                                <div className='p-[1rem] bg-[#374868] rounded-[5px] flex flex-col gap-[1rem] h-[400px]'>
                                    
                                   
                                        <Line 

                                            data={{
                                                labels: testData.map((data) => data.label),
                                                datasets: [
                                                    {
                                                        label: '',
                                                        data: testData.map((data) => data.revenue),
                                                        backgroundColor: '#fff',
                                                        borderColor: '#fff',
                                                        borderWidth: 1,
                                                        

                                                    }
                                                ]
                                            }}

                                            options={{
                                                maintainAspectRatio: false,
                                                responsive: true,
                                            }}

                                        />

                                   
                                    
                                </div>
                            </div>

                        </div>
                        {/* ------------------Div 1-end--------------------------- */}
                        {/* ------------------Div 2------------------------------- */}
                        <div className='w-[50%] flex flex-col  gap-[3rem]'>
                            {/* ---------Content Analysis---------------- */}
                            <div className='flex flex-col gap-[.5rem]'>
                                <h1 className='text-[20px] font-medium'>
                                Confusion Matrices 
                                </h1>
                                <div className='w-full flex flex-col p-[1rem] bg-[#374868] rounded-[5px] gap-[1rem]'>
                                    <h1 className='text-[18px] font-normal'>Prediction Examples :</h1>
                                    <div className='h-[200px] w-full bg-[#fff] rounded-[5px]'>

                                    </div>
                                    
                                </div>
                            </div>
                            {/* ------------------Model Insights--------------------------- */}
                            <div className='flex flex-col gap-[1rem]'>
                                <h1 className='text-[20px] font-medium'>
                                Model Insights 
                                </h1>
                                <div className='w-full flex flex-col p-[1rem] bg-[#374868] rounded-[5px] gap-[1rem]'>
                                    <p className='text-[14px] text-justify'>Based on the performance metrics, the model is performing well with high accuracy and precision. Consider analyzing false positives to improve model generalization.</p>
                                </div>
                            </div>
                            {/* -------------------Go to Dashboard-------------------------- */}
                            <div className='px-[1rem] py-[.5rem] bg-[#374868] rounded-[5px] flex items-center justify-between cursor-pointer'>
                                <h1 className='text-[18px] font-normal'>Go to Dashboard</h1>

                                <IoIosArrowForward />
                            </div>
                            {/* --------------disclaimer--------------------------------------- */}
                            <p className='text-[14px] text-[#ff7643]'>Understanding model performance is crucial for making informed decisions. Use the provided metrics and insights to assess and optimize your model.</p>
                        </div>

                        {/* ------------------Div-2-end--------------------------- */}


                    </div>

                </div>
            </div>
        </div>
    )
}

export default ModelPerformance
