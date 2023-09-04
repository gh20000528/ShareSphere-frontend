import Home from './page/home/Home'
import Login from './page/login/Login'
import Register from './page/register/Register'
import LeftBar from './component/leftBar/Leftbar'
import Navbar from './component/navbar/Navbar'
import RightBar from './component/rightbar/RightBar'
import Profile from './page/profile/Profile'
import './App.scss';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext'

function App() {

  const currentUse = true

  const { darkMode } = useContext(DarkModeContext)
  const Layout = () => {
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <div style={{flex: 6}}>
            <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
    )
  }
  
    const ProtectedRoute = ({children}) => {
      if(!currentUse) return <Navigate to={'/login'} />
  
      return children
    }

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>,
      children:[
        {
          path:"/",
          element: <Home/>,
        },
        {
          path:"/profile/:id",
          element: <Profile/>,
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
