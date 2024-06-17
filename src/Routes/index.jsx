import { Route, Routes } from "react-router-dom";


import { ProfileWeb, Settings, HomePage, Collaborate, AICustomModel, SignIn, ConsultWithAI, CreateWithAI, TaskManager, SignUp, DeleteAccount, Favorites ,LogOutEveryWhere} from "../Pages";


import MainLayout from '../Layouts/MainLayout';
import SettingsLayout from "../Layouts/SettingsLayout";


const Routers = () => {

  return (
    <Routes>
      {/* ==================SignIn page================== */}
      <Route
        path="/SignIn"
        element={<SignIn />}
      />


      {/* ==================SignUp page================== */}
      <Route
        path="/SignUp"
        element={<SignUp />}
      />


      {/* ==================Main Layout================== */}
      <Route
        path="/"
        element={<MainLayout></MainLayout>}
      >
        <Route path="/"
          element={<HomePage />}
        />
        <Route path="/profile"
          element={<ProfileWeb />}
        />
        <Route path="/LogoutEverywhere"
          element={<LogOutEveryWhere />}
        />
        <Route path="/DeleteAccount"
          element={<DeleteAccount />}
        />

      </Route>
      {/* ==================Main Layout End============== */}





      {/* ==================Settings Layout==================== */}
      <Route
        path="/contentcraft"
        element={<SettingsLayout></SettingsLayout>}
      >
        <Route path="/contentcraft/settings"
          element={<Settings />}
        />
        <Route path="/contentcraft/collaborate"
          element={<Collaborate />}
        />
        <Route path="/contentcraft/AICustomModel"
          element={<AICustomModel />}
        />
        <Route path="/contentcraft/ConsultWithAI"
          element={<ConsultWithAI />}
        />
        <Route path="/contentcraft/CreateWithAI"
          element={<CreateWithAI />}
        />
        <Route path="/contentcraft/Taskmanager"
          element={<TaskManager />}
        />
        <Route path="/contentcraft/Favorites"
          element={<Favorites/>}
        />



      </Route>
    </Routes>
  )
}

export default Routers
