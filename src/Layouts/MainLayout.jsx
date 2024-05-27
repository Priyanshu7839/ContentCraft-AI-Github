import { Outlet } from "react-router-dom";
import {Header,Footer} from '../Components/index'


const MainLayout = () => {
  return (
   <main className="font-Inter">
        <Header/>
            <div className="bg-[#06142e] h-[100vh] overflow-x-scroll scroll-smooth">
                <Outlet/>
            </div>
        <Footer/>
   </main>
  )
}

export default MainLayout
