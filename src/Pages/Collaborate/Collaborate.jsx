import React from 'react'
import { AddCollaborator, AddContent, AllCollaboratorsSidebar, Collaborate_Sidebar, InviteCollaborator, InviteRequests, SentInvites, UpcomingMeetings } from '../../Components'
import { useSelector } from 'react-redux';

const Collaborate = () => {

  const currCollaborateSidebarOptions = useSelector((state)=> state.CollaborateSidebarOptions.currCollaborateSidebarOptions);
  const currAddCollaborationOptions   = useSelector((state)=>state.AddCollaboratorOptions.currAddCollaborationOptions);

  console.log(currAddCollaborationOptions)

  return (
    <div className='w-full min-h-[100vh]'>
      {
        currAddCollaborationOptions === 'Collaborators' ?
        (
          <div className='absolute top-[120px] left-0'>
            <AllCollaboratorsSidebar/>
          </div>
        ):
        (
          
          <div className='absolute top-[120px] left-0'>
               <Collaborate_Sidebar/>
          </div>
          
        )
      }


      {/* ---------------------------------------------------------- */}

        {
            (currCollaborateSidebarOptions === 'Add Collaborator' && currAddCollaborationOptions=== '') &&

            <AddCollaborator/>
        }
        {
            currAddCollaborationOptions=== 'Invite Collaborator' &&

            <InviteCollaborator/>
        }
        {
            currAddCollaborationOptions === 'Invite Requests' &&

            <InviteRequests/>
        }
        {
            currAddCollaborationOptions === 'Sent Invites' &&

            <SentInvites/>
        }

        {/* -------------------------------------------------------- */}

        {
            currCollaborateSidebarOptions === 'Upcoming Meetings' &&

            <UpcomingMeetings/>
        }
        {/* --------------------------------------------------------- */}

        {

                currCollaborateSidebarOptions === 'Add Content' &&

                <AddContent/>

        }
    </div>
  )
}

export default Collaborate
