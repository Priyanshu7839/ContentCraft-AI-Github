import { Route, Routes, useLocation } from "react-router-dom";
import { Settings } from "../Pages";
import MainLayout from '../Layouts/MainLayout';
import SettingsLayout from "../Layouts/SettingsLayout";
import {HomePage} from '../Pages';

const Routers = () => {
  return (
    <Routes>
            <Route
              path="/"
              element={<MainLayout></MainLayout>}
            >
                <Route path="/"
                    element={<HomePage/>} 
                />
            </Route>
            {/* ---------Settins Layout------------ */}
            <Route
              path="/settings"
              element={<SettingsLayout></SettingsLayout>}
            >
                <Route path="/settings"
                    element={<Settings/>} 
                />
               
            </Route>
    </Routes>
  )
}

export default Routers
