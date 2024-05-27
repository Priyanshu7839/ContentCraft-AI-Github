import { useState } from 'react';
import { Header ,Footer ,SettingsSidebar,AccountSetting,EditPersonalInfo,ChangePassword,ChangeEmail,LinkToPrivacyPolicy} from './Components';
import { LandingPage ,HomePage, ProfileWeb,Settings} from './Pages';

import { BrowserRouter } from "react-router-dom";
import Routers from "./Routes";


function App() {
 

  return (
		<BrowserRouter>
			<Routers />
		</BrowserRouter>
	);

}

export default App
