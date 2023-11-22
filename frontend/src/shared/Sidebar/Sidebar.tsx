import { SidebarWrapper } from "./Sidebar.styles"
import {IoLibrarySharp} from "react-icons/io5"
import {AiOutlineLogout} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import React from "react"
type SidebarPropsType={
  isDrawer:boolean
}
const Sidebar:React.FC<SidebarPropsType> = ({isDrawer}) => {

  const navigate =useNavigate()


  const handleLogout=()=>{
    navigate("/auth/login")
  }

  return (
    <SidebarWrapper isDrawer={isDrawer}>
      <Link to="/" className="logoBox">
          <img src="/images/logo.png" alt="logo" />
          <h1 className="appName">Resourcify</h1>
      </Link>
      <div className="sidebarItemList">

        <div className="sidebarItem activeSidebarItem">
        <IoLibrarySharp/>
          <p>Master Library</p>
        </div>

{/* 
        <div className="sidebarItem">
        <MdSwitchAccount/>
          <p>Accout</p>
        </div> */}

      <div className="sidebarItem logout" onClick={handleLogout}>
        <AiOutlineLogout/>
        <p>Logout</p>
      </div>
      </div>

      
    </SidebarWrapper>
  )
}

export default Sidebar