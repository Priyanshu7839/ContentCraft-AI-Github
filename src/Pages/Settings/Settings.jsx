import React, { useState } from 'react';
import { SettingsSidebar, ChangeEmail, AccountSetting, EditPersonalInfo, ChangePassword, PrivacySecuritySettings,LinkToPrivacyPolicy,DataCollectionAndUsage,PasswordPolicies,NotificationSettings,CollaborationSettings,          AppVersionAndUpdates, TwoFactorAuth,ThirdPartyIntegration,IncidentReportingForm,SecurityMeasures,HelpAndSupport,Faq
 } from '../../Components/index'
import { useSelector, useDispatch } from 'react-redux';

const Settings = () => {
  const currPanel = useSelector((state) => state.panel.currPanel);
  const currAccountSettingSlide = useSelector((state) => state.AccountSettingsSlide.currAccountSettingSlide);
  const currPrivacySettingSlide = useSelector((state) => state.PrivacySettingsSlide.currPrivacySettingSlide);
  const currHelpAndSupportOptions = useSelector((state)=>state.HelpAndSupportOptions.currHelpAndSupportOptions);



 
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
        currPanel === 'CollabSettings' && currPrivacySettingSlide === '' &&

        <>
        <CollaborationSettings/>
        </>
      }
      {
        currPanel === 'AppUpdates' && currPrivacySettingSlide === '' &&

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
        currAccountSettingSlide === 'EditPersonalInfo' &&

        <EditPersonalInfo />
      }

      {
        currAccountSettingSlide === 'ChangePassword' &&

        <ChangePassword />

      }

      {
        currAccountSettingSlide === 'ChangeEmail' &&

        <ChangeEmail />
      }
      {/* ------------------Account Settings Controls End---------------------------------- */}

      {/* ----------------------Privacy settings Controls -------------------------------- */}
      
            {
                currPrivacySettingSlide === 'LinkToPrivacyPolicy' && 

                <LinkToPrivacyPolicy/>
            }

            {
              currPrivacySettingSlide === 'DataCollection' &&

              <DataCollectionAndUsage/>
            }

            {
              currPrivacySettingSlide === 'PasswordPolicies' &&

              <PasswordPolicies/>
            }
            {
              currPrivacySettingSlide === 'TwoFactorAuth' && 

              <TwoFactorAuth/>
            }
            {
              currPrivacySettingSlide === 'ThirdPartyIntegration' &&

              <ThirdPartyIntegration/>
            }

            {currPrivacySettingSlide === 'IncidentResponse' &&

             <IncidentReportingForm/>
            
            }
            {
            currPrivacySettingSlide === 'SecurityMeasures' &&

            <SecurityMeasures/>
            }

      {/* ----------------------Privacy settings Controls End -------------------------------- */}
      {/* ----------------------Help and Support ------------------------------------ */}
      {
          currHelpAndSupportOptions === 'faq' && 

          <Faq/>
      }
      {/* ----------------------Help and Support End -------------------------------- */}


    </div>
  )
}

export default Settings
