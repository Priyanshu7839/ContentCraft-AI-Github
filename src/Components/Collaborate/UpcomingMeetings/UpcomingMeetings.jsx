import React from 'react'



const UpcomingMettings = () => {

  const MeetingsArray = [
    {
      topic: 'Content Strategy Review',
      date: 'Tuesday Nov 15,2023',
      time: '10:00 AM - 11:00 AM',
      Duration: '1 Hour 30 Minutes'
    },
    {
      topic: 'Content Strategy Review',
      date: 'Tuesday Nov 15,2023',
      time: '10:00 AM - 11:00 AM',
      Duration: '1 Hour 30 Minutes'
    }



  ]

  return (
    <div className='min-h-[100vh]'>

      {/* --------------------------------------------policy field--------------------------------- */}
      <div className='p-[4rem] pt-0 flex flex-col gap-[3rem] font-Inter text-[#ffffff]'>
        <div className='w-full flex items-center gap-[1rem] cursor-pointer'

        >


          <h1 className='font-semibold text-[26px]'>Upcoming Meetings </h1>

        </div>

        {/* ---------------------------------------------------- */}

        <div className='  flex flex-col gap-[3rem] '>



          {/* --------------------------------------------------- */}
          {
            MeetingsArray.map((meeting, index) => {
              return (
                <div className='flex flex-col gap-[2rem] bg-[#374868] p-[2rem] rounded-[10px]'
                     key={index}
                >
                  <h1>Meeting {index+1}</h1>

                  <div className='w-full flex'>
                    <div className='w-[50%] flex flex-col gap-[1rem]'>

                      <h1>{meeting.topic}</h1>
                      <h2>{meeting.date}</h2>
                      <h1>{meeting.time}</h1>
                      <h2 className='flex'>Duration: <h1>{meeting.Duration}</h1></h2>

                    </div>
                    <div className='w-[50%] flex flex-col gap-[1rem] justify-end font-Inter font-semibold text-[16px]'>
                      <button className='w-full bg-[#ff7643] p-[.5rem] rounded-full'>Join Meeting</button>
                      <button className='w-full border-[#ff7643] p-[.5rem] border-[1px] rounded-full text-[#ff7643]'>Set Reminder</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
          {/* --------------------------------------------------- */}

        </div>

      </div>
    </div>
  )
}

export default UpcomingMettings
