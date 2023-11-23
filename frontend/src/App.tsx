import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Group from "./pages/Group/Group"
import { HomeOutletWrapper } from "./App.styles"
import FilePage from "./pages/FilePage/FilePage"
import Upload from "./pages/admin/MasterLibrary/Uploads/UploadMasterLibrary"
import Login from "./pages/Auth/Login/Login"
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword"
import Register from "./pages/Auth/Register/Register"
import DisplayInfo from "./pages/Auth/DisplayInfo/DisplayInfo"
import VerifyEmail from "./pages/Auth/VerifyEmail/VerifyEmail"
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword"
import Sidebar from "./shared/Sidebar/Sidebar"
import ProtectedRoutes from "./pages/ProtectedRoutes/ProtectedRoutes"


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes/>}>

          <Route path="" element={<Navigate to={"/library"}/>}/>
          <Route path="/library" element={<HomeOutlet/>}>
            <Route path="" element={<Home/>}/>
            <Route path="bundle/:id" element={<Group/>}>
            </Route>
            <Route path="file/:id" element={<FilePage/>}/>
          </Route>
          </Route>
          <Route path="/admin" element={<Upload/>}/>
        <Route path="/auth/login" element={<Login/>}/>
        <Route path="/auth/register" element={<Register/>}/>
        <Route path="/auth/sent_reset_link" element={<ForgotPassword/>}/>
        <Route path="/auth/resetpassword" element={<ResetPassword/>}/>
        <Route path="/auth/verifyEmail" element={<VerifyEmail/>}/>
        <Route path="/info/email_sent" element={<DisplayInfo/>}/>
        <Route path="/info/verifyEmail" element={<DisplayInfo/>}/>
            

        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


const  HomeOutlet=()=>{
  return (
      <HomeOutletWrapper>
        <Sidebar isDrawer={false}/>
        <Outlet/>
      </HomeOutletWrapper>
  )
}