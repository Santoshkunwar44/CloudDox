import { SidebarWrapper } from "./Sidebar.styles"
import {IoLibrarySharp} from "react-icons/io5"
import {MdSwitchAccount} from "react-icons/md"
import {AiOutlineLogout} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
const Sidebar = () => {

  const navigate =useNavigate()


  const handleLogout=()=>{
    navigate("/auth/login")
  }

  return (
    <SidebarWrapper>
      <Link to="/" className="logoBox">
          <img src="/images/logo.png" alt="logo" />
          <h1 className="appName">CloudDocx</h1>
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