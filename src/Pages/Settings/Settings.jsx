import React, { useState } from 'react';
import { SettingsSidebar, ChangeEmail, AccountSetting, EditPersonalInfo, ChangePassword, PrivacySecuritySettings,LinkToPrivacyPolicy,DataCollectionAndUsage,PasswordPolicies,NotificationSettings,CollaborationSettings,          AppVersionAndUpdates, TwoFactorAuth,ThirdPartyIntegration,IncidentReportingForm,SecurityMeasures,HelpAndSupport,Faq,ContentGenerationPreferences, KnowledgeBase,ReleaseNotes,Feedback, ContactSupport,AccountAssistanceForm,ContentGenerationSupportForm,TechnicalIssuesForm
 } from '../../Components/index'
import { useSelector, useDispatch } from 'react-redux';

const Settings = () => {
  const currPanel = useSelector((state) => state.panel.currPanel);
  const currAccountSettingSlide = useSelector((state) => state.AccountSettingsSlide.currAccountSettingSlide);
  const currPrivacySettingSlide = useSelector((state) => state.PrivacySettingsSlide.currPrivacySettingSlide);
  const currHelpAndSupportOptions = useSelector((state)=>state.HelpAndSupportOptions.currHelpAndSupportOptions);
  const currAppVersionAndUpdatesOptions = useSelector((state)=>state.AppVersionAndUpdatesOptions.currAppVersionAndUpdatesOptions);

 
  return (
    <div className='w-full min-h-[100vh]'>
      <div className='absolute top-[120px] left-0'>
        <SettingsSidebar />
      </div>
      {/* -------------------------Main Settings Panel----------------------------------- */}
      {
        (currPanel === 'AccSettings' && currAccountSettingSlide === '') &&
        <>
          <AccountSetting />
        </>
      }

      {
        (currPanel === 'Privacy' && currPrivacySettingSlide === '') &&
        <>
          <PrivacySecuritySettings />
        </>
      }

      {
        (currPanel === 'NotiSettings' && currPrivacySettingSlide === '' )&&
        <>
          <NotificationSettings/>
        </>
      }

      {
        currPanel === 'ContentGeneration' && currHelpAndSupportOptions === '' &&

        <>
        <ContentGenerationPreferences/>
        </>
      }
      {
        currPanel === 'CollabSettings' && currPrivacySettingSlide === '' &&

        <>
        <CollaborationSettings/>
        </>
      }
      {
        currPanel === 'AppUpdates' && currAppVersionAndUpdatesOptions === '' &&

        <>
        <AppVersionAndUpdates/>
        </>
      }
      {
        currPanel === 'HelpSupport' && currHelpAndSupportOptions === '' &&

        <>
        <HelpAndSupport/>
        </>
      }

      {/* -------------------------Main Settings Panel-End------------------------------- */}

      {/* ------------------Account Settings Controls-------------------------------------- */}


      {
        currAccountSettingSlide === 'Edit Personal Information' &&

        <EditPersonalInfo />
      }

      {
        currAccountSettingSlide === 'Change Password' &&

        <ChangePassword />

      }

      {
        currAccountSettingSlide === 'Change Email Address' &&

        <ChangeEmail />
      }
      {/* ------------------Account Settings Controls End---------------------------------- */}

      {/* ----------------------Privacy settings Controls -------------------------------- */}
      
            {
                currPrivacySettingSlide === 'Link to Privacy Policy' && 

                <LinkToPrivacyPolicy/>
            }

            {
              currPrivacySettingSlide === 'Data Collection And Usage' &&

              <DataCollectionAndUsage/>
            }

            {
              currPrivacySettingSlide === 'Password Policies' &&

              <PasswordPolicies/>
            }
            {
              currPrivacySettingSlide === 'Two-Factor Authentication (2FA)' && 

              <TwoFactorAuth/>
            }
            {
              currPrivacySettingSlide === 'Third-Party Integration' &&

              <ThirdPartyIntegration/>
            }

            {currPrivacySettingSlide === 'Incident Response' &&

             <IncidentReportingForm/>
            
            }
            {
            currPrivacySettingSlide === 'Security Measures' &&

            <SecurityMeasures/>
            }

      {/* ----------------------Privacy settings Controls End -------------------------------- */}
      {/* ----------------------App Version And Updates ------------------------------------ */}
            {
              currAppVersionAndUpdatesOptions === 'Release Notes' &&

                <ReleaseNotes/>
            }

            {
              currAppVersionAndUpdatesOptions === 'Feedback' &&

              <Feedback/>
            }
      {/* ----------------------App Version And Updates End -------------------------------- */}

      {/* ----------------------Help and Support ------------------------------------ */}
      {
          currHelpAndSupportOptions === 'FAQs' && 

          <Faq/>
      }
      {
          currHelpAndSupportOptions === 'Knowledge Base' && 

          <KnowledgeBase/>
      }
      {
        currHelpAndSupportOptions === 'Contact Support' &&

        <ContactSupport/>
      }
      {
        currHelpAndSupportOptions === 'Technical Issues' &&

        <TechnicalIssuesForm/>
      }
      {
        currHelpAndSupportOptions === 'Account Assistance' &&

        <AccountAssistanceForm/>
      }
      {
        currHelpAndSupportOptions === 'Content Generation' &&
        
        <ContentGenerationSupportForm/>
      }


      {/* ----------------------Help and Support End -------------------------------- */}


    </div>
  )
}

export default Settings
