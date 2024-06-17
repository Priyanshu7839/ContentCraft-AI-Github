import { useEffect     } from 'react';

import { BrowserRouter } from "react-router-dom";

import   Routers         from "./Routes";

import { useDispatch   } from 'react-redux';

import { loadSettings  } from './Store/Slices/NotificationOptionSlice';




function App() {
	
 
	const dispatch = useDispatch();

	useEffect(() => {

        // Dispatch the loadSettings action when the app initializes
        dispatch(loadSettings());

    }, [dispatch]);

  return (

		<BrowserRouter>
			<Routers />
		</BrowserRouter>
		
	);

}

export default App
