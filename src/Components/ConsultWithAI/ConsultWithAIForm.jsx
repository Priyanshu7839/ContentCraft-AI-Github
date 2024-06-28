import  { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const ConsultWithAIForm = () => {
    const ConsultationType = ['Content Strategy', 'Writing Assistance', 'SEO Consultation'];
    const [consultationTypeOptionsShow, setConsultationTypeOptionsShow] = useState(false);
    const [consultationTypeOptions, setConsultationTypeOptions] = useState('Select');
    const [consultationDetails, setConsultationDetails] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
      
        const formData = new FormData();
        formData.append('consultationType', consultationTypeOptions);
        formData.append('consultationDetails', consultationDetails);
        if (selectedFile) {
          formData.append('file', selectedFile);
        }
      
        try {
          const response = await fetch('http://localhost:3000/api/consult/create', {
            method: 'POST',
            body: formData,
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          // Clear form inputs upon successful response
          setConsultationTypeOptions('Select');
          setConsultationDetails('');
          setSelectedFile(null);
      
          const result = await response.json();
          console.log('AI Response:', result);
        } catch (error) {
          console.error('Error:', error);
        }
      };
      
    return (
        <div className='min-h-[100vh]'>
            <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
                <form onSubmit={handleFormSubmit} className='p-[2rem] bg-[#1d2d4a] flex flex-col gap-[2rem] rounded-[10px]'>
                    <div className='flex'>
                        <div className='w-[50%] flex flex-col gap-[1rem]'>
                            <h1 className='font-Inter font-semibold text-[20px]'>Consultation Type</h1>
                            <p className='font-Inter text-[#ff7643] text-[16px] font-semibold'>Select the type of consultation you need.</p>
                            <div className='px-[1rem] py-[.5rem] bg-[#374868] w-[80%] rounded-[5px] flex items-center justify-between transition-all duration-300 '
                                onClick={() => setConsultationTypeOptionsShow(!consultationTypeOptionsShow)}
                            >
                                <h1 className='font-Inter font-normal text-[16px]'>{consultationTypeOptions}</h1>
                                <IoIosArrowDown className={`transition-all duration-300 ${consultationTypeOptionsShow ? 'rotate-180' : ''}`} />
                            </div>
                            <div className={`bg-[#374868] w-[80%] rounded-[5px] transition-all duration-300 overflow-hidden font-Inter font-normal text-[16px] ${consultationTypeOptionsShow ? 'h-fit' : 'h-[0px]'}`}>
                                {ConsultationType.map((type, index) => (
                                    <div key={index} className='px-[1rem] py-[.5rem] flex items-center justify-between'
                                        onClick={() => {
                                            setConsultationTypeOptions(type);
                                            setConsultationTypeOptionsShow(false);
                                        }}
                                    >
                                        <h1>{type}</h1>
                                        <div className='rounded-full w-[18px] h-[18px] bg-white flex items-center justify-center relative'>
                                            <div className={`rounded-full w-[10px] h-[10px] relative z-1 ${consultationTypeOptions === type ? 'bg-[#ff7643]' : 'bg-white'}`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-[50%] flex flex-col gap-[1rem]'>
                            <h1 className='font-Inter font-semibold text-[20px]'>File Upload</h1>
                            <p className='font-Inter text-[#ff7643] text-[16px] font-semibold'>Upload relevant files or documents</p>
                            <div className='w-[80%] rounded-[5px] flex items-center justify-center gap-[1rem] p-[.5rem] relative bg-[#374868]'>
                                <input type="file" className='w-full text-[#000] p-[.5rem] rounded-[10px] border-none outline-none absolute opacity-0 top-0' onChange={handleFileChange} />
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 15.5V19.5C21 20.0304 20.7893 20.5391 20.4142 20.9142C20.0391 21.2893 19.5304 21.5 19 21.5H5C4.46957 21.5 3.96086 21.2893 3.58579 20.9142C3.21071 20.5391 3 20.0304 3 19.5V15.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17 8.5L12 3.5L7 8.5" stroke="#FF7643" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 3.5V15.5" stroke="#FF7643" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h1 className='font-Inter font-medium text-[16px]'>Upload Files</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] flex flex-col gap-[1rem]'>
                        <h1 className='font-Inter font-semibold text-[20px]'>Consultation Details</h1>
                        <p className='font-Inter text-[#ff7643] text-[16px] font-semibold'>Provide details about your consultation request</p>
                        <textarea name="consultationDetails" id="consultationDetails" rows="10" placeholder='Describe Here...' className='w-[100%] text-[#000] p-[.5rem] rounded-[5px] border-none outline-none' value={consultationDetails} onChange={(e) => setConsultationDetails(e.target.value)}></textarea>
                    </div>
                    <div className='flex gap-[1rem] justify-between'>
                        <div className='w-[50%] flex items-end justify-end'>
                            <button type='submit' className='w-[100%] p-[.5rem] flex items-center justify-center bg-[#ff7643] box-border rounded-[30px] font-Inter font-semibold text-[16px] text-[#fff]'>Start Consulting</button>
                        </div>
                        <div className='w-[40%] flex'>
                            <p className='text-[12px] text-[#ff7643] text-justify'>Note: Get personalized insights and recommendations from our AI. Fill in the details above to start your consultation.</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ConsultWithAIForm;
